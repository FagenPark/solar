import {AppActions, AppActionsTypes} from './app.actions';

export interface AppState {
  isLoading: boolean;
}
const initialState: AppState = {
  isLoading: false,
};

export function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionsTypes.ToggleLoading:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}
