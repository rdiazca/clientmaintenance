import { GET_INTEREST } from "../types";

export const getInterestSuccess = (interest) => ({
  type: GET_INTEREST,
  payload: interest,
});