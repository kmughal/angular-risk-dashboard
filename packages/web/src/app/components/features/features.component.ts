import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddFeatureComponent } from './addFeature/add.feature.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListFeaturesComponent } from './listFeatures/list.features.component';
import { Feature } from './types';
import { FeatureService } from './services/feature.service.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  providers: [FeatureService],
})
export class FeaturesComponent {
  features: Feature[] = [];
  constructor(private featureService: FeatureService) {}

  activateAddFeatureInputBox = false;
  toggleAddInputPanel() {
    this.activateAddFeatureInputBox = !this.activateAddFeatureInputBox;
  }

  ngOnInit() {
    this.featureService.getFeatures().subscribe((features: Feature[]) => {
      this.features = features;
    });
  }

  onFeatureAdded(updatedList: Feature[]) {
    this.features = updatedList;
  }

  onCloseModal() {
    this.activateAddFeatureInputBox = false;
  }
}
