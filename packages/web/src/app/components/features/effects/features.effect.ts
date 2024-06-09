import {
  addNewFeature,
  loadFeatures,
  loadFeaturesSuccess,
} from './../actions/features.actions';
import { Injectable } from '@angular/core';
import { FeatureService } from '../services/feature.service.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class FeaturesEffects {
  loadFeatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFeatures),
      exhaustMap(() =>
        this.featureService.getFeatures().pipe(
          map((features) => {
            return loadFeaturesSuccess(features);
          }),
          catchError(() => of({ type: '[Features] Load Features Failure' }))
        )
      )
    )
  );

  addNewFeature$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addNewFeature),
      exhaustMap((action) =>
        this.featureService.addFeature(action.feature).pipe(
          map((features) => {
            const uniqueFeatures = features.map((feature, index) => ({
              ...feature,
              id: feature.featureId || index + 1
            }));
            return loadFeaturesSuccess(uniqueFeatures);
          }),
          catchError(() => of({ type: '[Features] Load Features Failure' }))
        )
      )
    )
  );


  constructor(
    private featureService: FeatureService,
    private actions$: Actions
  ) {}
}
