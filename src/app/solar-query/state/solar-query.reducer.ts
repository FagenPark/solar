import {SolarQueryActions, SolarQueryActionsTypes} from './solar-query.actions';

export interface SolarQueryState {
  hasResults: boolean;
  postCode: number | null;
  numberOfPeople: string;
  isModalOpen: boolean;
  modalContentId: string;
  stateName: string;
  errorMessage: string;
  isQuerying: boolean;
}
const initialState: SolarQueryState = {
  hasResults: false,
  postCode: null,
  numberOfPeople: '',
  isModalOpen: false,
  modalContentId: '',
  stateName: '',
  errorMessage: '',
  isQuerying: false,
};


export function reducer(state: SolarQueryState = initialState, action: SolarQueryActions): SolarQueryState {
  switch (action.type) {
    case SolarQueryActionsTypes.SubmitInstallersQuery:
      // TODO go to SolarQuotes site
      return {
        ...state,
      };
    case SolarQueryActionsTypes.ChangeFormInput:
      return {
        ...state,
        numberOfPeople: action.payload.numberOfPeople,
        postCode: action.payload.postCode
      };
    case SolarQueryActionsTypes.SetModalContentId:
      return {
        ...state,
        modalContentId: action.payload
      };
    case SolarQueryActionsTypes.ToggleModal:
      return {
        ...state,
        isModalOpen: action.payload
      };
    case SolarQueryActionsTypes.GetStateFromPostcodeSuccess:
      return {
        ...state,
        hasResults: true,
        errorMessage: '',
        isQuerying: false,
        stateName: action.payload
      };
    case SolarQueryActionsTypes.GetStateFromPostcodeFail:
      return {
        ...state,
        errorMessage: action.payload,
        isQuerying: false,
      };
    case SolarQueryActionsTypes.ToggleQuerying:
      return {
        ...state,
        isQuerying: action.payload
      };
    default:
      return state;
  }
}
