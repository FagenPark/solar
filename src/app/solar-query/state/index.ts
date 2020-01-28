import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SolarQueryState} from './solar-query.reducer';

const getSolarQueryState = createFeatureSelector<SolarQueryState>('solarQuery');
export const getHasResults = createSelector(getSolarQueryState, state => state.hasResults);
export const getNumberOfPeople = createSelector(getSolarQueryState, state => state.numberOfPeople);
export const getPostCode = createSelector(getSolarQueryState, state => state.postCode);