import {Action} from '@ngrx/store';
import {QueryData} from '../query-data';

export enum SolarQueryActionsTypes {
  ChangeFormInput = '[Solar Query] Change Form Input',
  SubmitInstallersQuery = '[Solar Query] Submit Installers Query'
}

// Action Creators
export class ChangeFormInput implements Action {
  readonly  type = SolarQueryActionsTypes.ChangeFormInput;
  constructor(public payload: QueryData) {
  }
}
export class SubmitInstallersQuery implements Action {
  readonly  type = SolarQueryActionsTypes.SubmitInstallersQuery;
  constructor(public payload: QueryData) {
  }
}

export type SolarQueryActions = ChangeFormInput | SubmitInstallersQuery;
