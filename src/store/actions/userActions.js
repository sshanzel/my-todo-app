import http from '../../services/http.service';
import authService from '../../services/auth.service';
import {errorToString} from '../../helpers/index';

export const login = credentials => async dispatch => {
  try {
    const {data} = await authService.login(credentials);
    http.setJwtHeaderAuth(data);
    const name = credentials.username.split('@');

    return dispatch({type: 'SET_USER', user: {name: name[0], token: data}});
  } catch (ex) {
    return errorToString(ex && ex.response && ex.response.data);
  }
};

export function logout() {
  http.setJwtHeaderAuth();
  return {type: 'SET_USER', user: {}};
}

export const registerUser = user => async dispatch => {
  try {
    const {data} = await authService.register(user);
    http.setJwtHeaderAuth(data.token);
    return dispatch({type: 'SET_USER', user: {token: data}});
  } catch (ex) {
    return errorToString(ex && ex.response && ex.response.data);
  }
};
