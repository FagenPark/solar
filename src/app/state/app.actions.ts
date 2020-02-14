import {Action} from '@ngrx/store';

export enum AppActionsTypes {
  ToggleLoading = '[SQ App] Toggle Loading'
}

export class ToggleLoading implements Action {
  readonly  type = AppActionsTypes.ToggleLoading;
  constructor(public payload: boolean) {
  }
}

export type AppActions = ToggleLoading;
