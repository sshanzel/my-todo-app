import _ from "lodash";
import http from "./http.service";

function getMyTodos() {
  return http.get(`/todos/me`);
}

function postTodo(todo) {
  return http.post(`/todos`, todo);
}

function patchTodo(_id, todo) {
  return http.patch(`/todos/${_id}`, todo);
}

function deleteTodo(_id, todo) {
  return http.delete(`/todos/${_id}`, todo);
}

export default {
  getMyTodos,
  postTodo,
  patchTodo,
  deleteTodo
};
