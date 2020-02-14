import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './app.reducer';

const getAppState = createFeatureSelector<AppState>('app');
export const getLoadingStatus = createSelector(getAppState, state => state.isLoading);
