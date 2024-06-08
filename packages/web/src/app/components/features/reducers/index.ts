import { on, createReducer } from '@ngrx/store';
import { loadFeatures, loadFeaturesSuccess } from '../actions/features.actions';
import { Feature } from '../types';

export interface FeaturesState {
  features: Feature[];
}

const initialState: FeaturesState = {
  features: [],
};

export const featuresReducer = createReducer(
  initialState,
  on(loadFeatures, (state) => ({ ...state })),
  on(loadFeaturesSuccess, (state, { features }) => ({
    ...state,
    features,
  }))
);
