import { LIST_CLIENT, FORM_CLIENT, EDIT_CLIENT, WELCOME } from "../types";

// Cada reducer tiene su propio state

const initialState = {
  formClient: false,
  listClient: false,
  editClient: false,
  welcome: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_CLIENT:
      return {
        ...state,
        formClient: false,
        listClient: true,
        editClient: false,
        welcome: false,
      };

    case FORM_CLIENT:
      return {
        ...state,
        formClient: true,
        listClient: false,
        editClient: false,
        welcome: false,
      };

    case EDIT_CLIENT:
      return {
        ...state,
        formClient: false,
        listClient: false,
        editClient: true,
        welcome: false,
      };

      case WELCOME:
      return {
        ...state,
        formClient: false,
        listClient: false,
        editClient: false,
        welcome: true,
      };

    default:
      return state;
  }
}
