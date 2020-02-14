import {AppActions, AppActionsTypes} from './app.actions';

export interface AppState {
  placeHolder: boolean;
}
const initialState: AppState = {
  placeHolder: false,
};

export function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionsTypes.ToggleLoading:
      return {
        ...state,
        placeHolder: action.payload
      };
    default:
      return state;
  }
}
