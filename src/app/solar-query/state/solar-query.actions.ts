import {Action} from '@ngrx/store';
import {QueryData} from '../query-data';

export enum SolarQueryActionsTypes {
  ChangeFormInput = '[Solar Query] Change Form Input',
  SubmitInstallersQuery = '[Solar Query] Submit Installers Query',
  SetModalContentId = '[Solar Query] Set Modal Content',
  SetModalTitle = '[Solar Query] Set Modal Title',
  GetStateFromPostcode = '[Solar Query] Get State From Postcode',
  GetStateFromPostcodeSuccess = '[Solar Query] Get State From Postcode Success',
  GetStateFromPostcodeFail = '[Solar Query] Get State From Postcode Fail',
  ToggleModal = '[Solar Query] Toggle Modal'
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

export class SetModalContentId implements Action {
  readonly  type = SolarQueryActionsTypes.SetModalContentId;
  constructor(public payload: string) {
  }
}
export class SetModalTitle implements Action {
  readonly  type = SolarQueryActionsTypes.SetModalTitle;
  constructor(public payload: string) {
  }
}
export class GetStateFromPostcode implements Action {
  readonly type = SolarQueryActionsTypes.GetStateFromPostcode;
  constructor(public payload: number) { }
}

export class GetStateFromPostcodeSuccess implements Action {
  readonly type = SolarQueryActionsTypes.GetStateFromPostcodeSuccess;

  constructor(public payload: string) { }
}
export class GetStateFromPostcodeFail implements Action {
  readonly type = SolarQueryActionsTypes.GetStateFromPostcodeFail;

  constructor(public payload: string) { }
}

export class ToggleModal implements Action {
  readonly  type = SolarQueryActionsTypes.ToggleModal;
  constructor(public payload: boolean) {
  }
}

export type SolarQueryActions = ChangeFormInput
  | SubmitInstallersQuery
  | SetModalContentId
  | SetModalTitle
  | GetStateFromPostcode
  | GetStateFromPostcodeSuccess
  | GetStateFromPostcodeFail
  | ToggleModal;
