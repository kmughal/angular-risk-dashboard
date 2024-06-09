import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddFeatureComponent } from './addFeature/add.feature.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListFeaturesComponent } from './listFeatures/list.features.component';
import { Feature } from './types';
import { FeatureService } from './services/feature.service.service';
import { Store, select } from '@ngrx/store';
import { loadFeatures } from './actions/features.actions';
import { selectFeatures } from './selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  providers: [FeatureService],
})
export class FeaturesComponent {
  features$: Observable<Feature[]>;
  features: Feature[] = [];

  constructor(private featureService: FeatureService, private store: Store) {
    this.features$ = this.store.pipe(select(selectFeatures));
  }

  activateAddFeatureInputBox = false;
  toggleAddInputPanel() {
    this.activateAddFeatureInputBox = !this.activateAddFeatureInputBox;
  }

  ngOnInit() {
    this.features$.subscribe(features => console.log('Features:', features));
    this.store.dispatch(loadFeatures());
  }

  onFeatureAdded(updatedList: Feature[]) {
    this.features = updatedList;
  }

  onCloseModal() {
    this.activateAddFeatureInputBox = false;
  }
}
