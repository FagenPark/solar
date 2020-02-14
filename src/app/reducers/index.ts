import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSolarQuery from '../solar-query/state/solar-query.reducer';
import {State} from '../state/app.state';
import * as fromApp from '../state/app.reducer';

export const reducers: ActionReducerMap<State> = {
  solarQuery: fromSolarQuery.reducer,
  app: fromApp.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
