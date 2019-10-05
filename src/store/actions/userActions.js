import http from "../../services/http.service";
import authService from "../../services/auth.service";
import { errorToString } from "../../helpers/index";

export function login(credentials) {
  return async function(dispatch) {
    try {
      const { data } = await authService.login(credentials);
      http.setJwtHeaderAuth(data);
      return dispatch({ type: "SET_USER", user: { token: data } });
    } catch (ex) {
      const error = errorToString(ex.response.data);
      return dispatch({ type: "SET_USER", user: { error } });
    }
  };
}

export function logout() {
  http.setJwtHeaderAuth();
  return { type: "SET_USER", user: {} };
}

export function register(user) {
  return async function(dispatch) {
    try {
      const { data } = await authService.register(user);
      http.setJwtHeaderAuth(data);
      return dispatch({ type: "SET_USER", user: { token: data } });
    } catch (ex) {
      const error = errorToString(ex.response.data);
      return dispatch({ type: "SET_USER", user: { error } });
    }
  };
}
