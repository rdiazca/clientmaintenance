import { GET_INTEREST } from "../types";

// Cada reducer tiene su propio state

const initialState = {
  interest: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INTEREST:
      return {
        ...state,
        error: null,
        interest: action.payload,
      };
    default:
      return state;
  }
}
