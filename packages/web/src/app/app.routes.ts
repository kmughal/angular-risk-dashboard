import { Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';

import { StoryboardComponent } from './components/storyboard/storyboard.component';

export const routes: Routes = [
  {
    component: FeaturesComponent,
    path: 'features',
  },
  {
    component: StoryboardComponent,
    path: 'storyboard',
  },
  {
    path: '**',
    component: FeaturesComponent,
  }
];
