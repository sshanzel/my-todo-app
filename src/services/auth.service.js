import http from "./http.service";

export function login(credentials) {
  return http.post(`/auth`, { ...credentials });
}

export function register(user) {
  return http.post(`/users`, { ...user });
}

export default {
  login,
  register
};
