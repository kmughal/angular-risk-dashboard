import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { FeaturesState } from '../reducers';

const selectFeaturesState =
  createFeatureSelector<Readonly<FeaturesState>>('features');

export const selectFeatures = createSelector(selectFeaturesState, (state) => {
  return state.features;
});
