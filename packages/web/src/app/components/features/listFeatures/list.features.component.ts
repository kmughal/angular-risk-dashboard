import { Component, Input } from '@angular/core';
import { Feature } from '../types';

@Component({
  selector: 'list-features',
  templateUrl: './list.features.component.html',
})
export class ListFeaturesComponent {
  @Input()
  features: Feature[] = [];
}
