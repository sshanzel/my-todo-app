import http from "./http.service";

function getMyTodos() {
  return http.get(`/todos/me`);
}

export default {
  getMyTodos
};
