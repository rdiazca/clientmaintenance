import {
  GET_CLIENTS,
  CREATE_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  GET_CLIENT_EDIT,
} from "../types";

export const getClientsSuccess = (clients) => ({
  type: GET_CLIENTS,
  payload: clients,
});

export const getClientEditSuccess = (client) => ({
  type: GET_CLIENT_EDIT,
  payload: client,
});

export const createClientSuccess = () => ({
  type: CREATE_CLIENT,
});

export const updateClientSuccess = () => ({
  type: UPDATE_CLIENT,
});

export const deleteClientSuccess = (IdCliente) => ({
  type: DELETE_CLIENT,
  payload: IdCliente,
});
