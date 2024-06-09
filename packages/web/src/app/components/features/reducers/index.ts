import { on, createReducer } from '@ngrx/store';
import { loadFeatures, loadFeaturesSuccess } from '../actions/features.actions';
import { Feature } from '../types';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface FeaturesState extends EntityState<Feature> {}

export const adapter: EntityAdapter<Feature> = createEntityAdapter<Feature>({
  selectId: (feature: Feature) =>
    feature.featureId ?? Math.random().toString(36).substring(2),
});

const initialState = adapter.getInitialState({});

export const featuresReducer = createReducer(
  initialState,
  on(loadFeatures, (state) => ({ ...state })),
  on(loadFeaturesSuccess, (state, { features }) => {
    return adapter.setAll(features, state);
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
