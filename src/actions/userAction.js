import { LOGIN, LOGOUT, REGISTER } from "../types";

import connectionAxios from "../config/axios";
import Swal from "sweetalert2";

export function loginAction(data) {
  return (dispatch) => {
    //Consultar la API
    connectionAxios
      .post("api/Authenticate/login", data)
      .then((response) => {
        // setResults(response.data);
        /*  dispatch({
          type: actionTypes.LOGIN,
          user: results,
        });*/
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const loginSuccess = (user) => ({
  type: LOGIN,
  payload: user,
});

export const registerSuccess = () => ({
  type: REGISTER,
});

export const logoutSuccess = () => ({
  type: LOGOUT,
});
