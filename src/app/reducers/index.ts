import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSolarQuery from '../solar-query/state/solar-query.reducer';
import {State} from '../state/app.state';

export const reducers: ActionReducerMap<State> = {
  solarQuery: fromSolarQuery.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
