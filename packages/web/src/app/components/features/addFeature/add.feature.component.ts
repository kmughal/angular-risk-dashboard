import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Feature } from '../types';
import { FeatureService } from '../services/feature.service.service';

@Component({
  selector: 'add-feature',
  templateUrl: './add.feature.component.html',
})
export class AddFeatureComponent {
  @Output() featureAdded = new EventEmitter<Feature[]>();
  @Output() closeModal = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
    private featureService: FeatureService
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
      name: this.newFeature.value.name ?? '',
      description: this.newFeature.value.description ?? '',
    };
    this.featureService.addFeature(newItem).subscribe((features) => {
      this.featureAdded.emit(features);
    });

    this.newFeature.reset();
  }

  closeFeatureModal() {
    (window as any).dialog.close();
    this.closeModal.emit();
  }
}
