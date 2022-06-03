import { LOGIN, LOGOUT, REGISTER } from "../types";

// Cada reducer tiene su propio state

const initialState = {
  user: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        error: null,
        user:   action.payload,
      };

      case REGISTER:
      return {
        ...state,
        error: null,
      };

      case LOGOUT:
      return {
        ...state,
        error: null,
        user: {}
      };

    default:
      return state;
  }
}
