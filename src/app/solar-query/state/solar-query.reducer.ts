import {SolarQueryActions, SolarQueryActionsTypes} from './solar-query.actions';

export interface SolarQueryState {
  hasResults: boolean;
  postCode: number | null;
  numberOfPeople: string;
  isModalOpen: boolean;
  modalContentId: string;
  modalTitle: string;
  stateName: string;
}
const initialState: SolarQueryState = {
  hasResults: false,
  postCode: null,
  numberOfPeople: '',
  isModalOpen: false,
  modalContentId: '',
  modalTitle: '',
  stateName: '',
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
        hasResults: true,
        numberOfPeople: action.payload.numberOfPeople,
        postCode: action.payload.postCode
      };
    case SolarQueryActionsTypes.SetModalContentId:
      return {
        ...state,
        modalContentId: action.payload
      };
    case SolarQueryActionsTypes.SetModalTitle:
      return {
        ...state,
        modalTitle: action.payload
      };
    case SolarQueryActionsTypes.ToggleModal:
      return {
        ...state,
        isModalOpen: action.payload
      };
    case SolarQueryActionsTypes.GetStateFromPostcodeSuccess:
      return {
        ...state,
        stateName: action.payload
      };
    default:
      return state;
  }
}
