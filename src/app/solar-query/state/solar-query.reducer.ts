import {SolarQueryActions, SolarQueryActionsTypes} from './solar-query.actions';

export interface SolarQueryState {
  hasResults: boolean;
  postCode: string;
  numberOfPeople: number;
  isModalOpen: boolean;
  modalContent: string;
}
const initialState: SolarQueryState = {
  hasResults: false,
  postCode: '',
  numberOfPeople: null,
  isModalOpen: false,
  modalContent: ''
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
    case SolarQueryActionsTypes.SetModalContent:
      return {
        ...state,
        modalContent: action.payload
      };
    case SolarQueryActionsTypes.ToggleModal:
      return {
        ...state,
        isModalOpen: action.payload
      };
    default:
      return state;
  }
}
