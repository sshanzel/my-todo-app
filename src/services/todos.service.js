import _ from "lodash";
import http from "./http.service";

function getMyTodos() {
  return http.get(`/todos/me`);
}

function postTodo(todo) {
  return http.post(`/todos`, todo);
}

function patchTodo(todo) {
  return http.patch(
    `/todos/${todo._id}`,
    _.pick(todo, ["title", "description", "due", "completed"])
  );
}

function deleteTodo(_id) {
  return http.delete(`/todos/${_id}`);
}

export default {
  getMyTodos,
  postTodo,
  patchTodo,
  deleteTodo
};
