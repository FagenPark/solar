import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {SolarQueryService} from './solar-query/solar-query.service';
import * as queryActions from './solar-query/state/solar-query.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions,
              private solarQueryService: SolarQueryService) {}
  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(queryActions.SolarQueryActionsTypes.GetStateFromPostcode),
    map((action: queryActions.GetStateFromPostcode) => action.payload),
    mergeMap(postcode =>
      this.solarQueryService.getPostcodeInformation(postcode).pipe(
        map(stateName => (new queryActions.GetStateFromPostcodeSuccess(stateName))),
        catchError(err => of(new queryActions.GetStateFromPostcodeFail(err)))
      )
    )
  );
}
