import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { adapter, FeaturesState } from '../reducers';

const selectFeaturesState =
  createFeatureSelector<Readonly<FeaturesState>>('features');

const { selectAll } = adapter.getSelectors(selectFeaturesState);
export const selectFeatures = createSelector(selectAll, (features) => {
  return features;
});
