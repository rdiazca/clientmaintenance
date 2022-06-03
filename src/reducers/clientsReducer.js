import {
  CREATE_CLIENT,
  DELETE_CLIENT,
  GET_CLIENTS,
  GET_CLIENT_EDIT,
  UPDATE_CLIENT,
} from "../types";

// Cada reducer tiene su propio state

const initialState = {
  clients: [],
  error: null,
  loading: false,
  client: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        error: null,
        clients: action.payload,
      };

    case CREATE_CLIENT:
      return {
        ...state,
        error: null,
      };

    case UPDATE_CLIENT:
      return {
        ...state,
        error: null,
      };

    case DELETE_CLIENT:
      return {
        ...state,
        error: null,
        cients: state.clients.filter((client) => client.id !== action.payload),
      };

    case GET_CLIENT_EDIT:
      return {
        ...state,
        error: null,
        client: action.payload,
      };

    default:
      return state;
  }
}
