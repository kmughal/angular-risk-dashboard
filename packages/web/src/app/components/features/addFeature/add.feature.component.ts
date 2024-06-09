import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Feature } from '../types';
import { FeatureService } from '../services/feature.service.service';
import { Store } from '@ngrx/store';
import { addNewFeature } from '../actions/features.actions';

@Component({
  selector: 'add-feature',
  templateUrl: './add.feature.component.html',
})
export class AddFeatureComponent {
  @Output() featureAdded = new EventEmitter<Feature[]>();
  @Output() closeModal = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
    private featureService: FeatureService,
    private store: Store
  ) {}

  newFeature = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', [Validators.minLength(5), Validators.maxLength(100)]],
  });

  get formControls() {
    return this.newFeature.controls;
  }

  addFeature() {
    const newItem = {
      featureId: 0,
      name: this.newFeature.value.name ?? '',
      description: this.newFeature.value.description ?? '',
    };
    this.store.dispatch(addNewFeature(newItem));
    this.newFeature.reset();
  }

  closeFeatureModal() {
    (window as any).dialog.close();
    this.closeModal.emit();
  }
}
