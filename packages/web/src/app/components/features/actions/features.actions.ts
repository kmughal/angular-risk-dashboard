import { createAction } from '@ngrx/store';
import { Feature } from '../types';

export const loadFeatures = createAction('[Features] Load Features');

export const loadFeaturesSuccess = createAction(
  '[Features] Load Features Success',
  (features: Feature[]) => ({ features })
);

export const addNewFeature = createAction(
  '[Features] Add New Feature',
  (feature: Feature) => ({ feature })
);
