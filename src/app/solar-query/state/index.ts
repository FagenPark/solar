import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SolarQueryState} from './solar-query.reducer';

const getSolarQueryState = createFeatureSelector<SolarQueryState>('solarQuery');
export const getHasResults = createSelector(getSolarQueryState, state => state.hasResults);
export const getNumberOfPeople = createSelector(getSolarQueryState, state => state.numberOfPeople);
export const getPostCode = createSelector(getSolarQueryState, state => state.postCode);
export const getModalContentId = createSelector(getSolarQueryState, state => state.modalContentId);
export const getModalStatus = createSelector(getSolarQueryState, state => state.isModalOpen);
export const getStateName = createSelector(getSolarQueryState, state => state.stateName);
export const getErrormessage = createSelector(getSolarQueryState, state => state.errorMessage);
