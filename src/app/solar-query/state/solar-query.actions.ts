import {Action} from '@ngrx/store';
import {QueryData} from '../query-data';

export enum SolarQueryActionsTypes {
  ChangeFormInput = '[Solar Query] Change Form Input',
  SubmitInstallersQuery = '[Solar Query] Submit Installers Query',
  SetModalContent = '[Solar Query] Set Modal Content',
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

export class SetModalContent implements Action {
  readonly  type = SolarQueryActionsTypes.SetModalContent;
  constructor(public payload: string) {
  }
}
export class ToggleModal implements Action {
  readonly  type = SolarQueryActionsTypes.ToggleModal;
  constructor(public payload: boolean) {
  }
}

export type SolarQueryActions = ChangeFormInput
  | SubmitInstallersQuery
  | SetModalContent
  | ToggleModal;
