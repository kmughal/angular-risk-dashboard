import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesComponent } from './features.component';
import { AddFeatureComponent } from './addFeature/add.feature.component';
import { ListFeaturesComponent } from './listFeatures/list.features.component';
import { FeatureService } from './services/feature.service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FeaturesComponent, AddFeatureComponent, ListFeaturesComponent],
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  exports: [FeaturesComponent, AddFeatureComponent, ListFeaturesComponent],
  providers: [FeatureService],
})
export class FeatureModule {}
