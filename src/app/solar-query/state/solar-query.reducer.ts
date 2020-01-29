import {SolarQueryActions, SolarQueryActionsTypes} from './solar-query.actions';

export interface SolarQueryState {
  hasResults: boolean;
  postCode: string;
  numberOfPeople: number;
}
const initialState: SolarQueryState = {
  hasResults: false,
  postCode: '',
  numberOfPeople: null
};


export function reducer(state: SolarQueryState = initialState, action: SolarQueryActions): SolarQueryState {
  switch (action.type) {
    case SolarQueryActionsTypes.SubmitInstallersQuery:
      // TODO go to SolarQuotes site
      return {
        ...state,
      };
    case SolarQueryActionsTypes.ChangeFormInput:
      // TODO calc results
      return {
        ...state,
        hasResults: true,
        numberOfPeople: action.payload.numberOfPeople,
        postCode: action.payload.postCode
      };
    default:
      return state;
  }
}
