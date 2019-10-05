import authService from "../../services/auth.service";
import { errorToString } from "../../helpers/index";

export function login(credentials) {
  return async function(dispatch) {
    try {
      const { data } = await authService.login(credentials);
      return dispatch({ type: "SET_USER", user: { token: data } });
    } catch (ex) {
      const error = errorToString(ex.response.data);
      return dispatch({ type: "SET_USER", user: { error } });
    }
  };
}

export function logout() {
  return { type: "SET_USER", user: {} };
}

export function register(user) {
  return async function(dispatch) {
    try {
      const { data } = await authService.register(user);
      return dispatch({ type: "SET_USER", user: { token: data } });
    } catch (ex) {
      const error = errorToString(ex.response.data);
      return dispatch({ type: "SET_USER", user: { error } });
    }
  };
}
