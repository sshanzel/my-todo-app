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

function validate(todo) {
  // implement Joi Validation
  if (!todo.title) return { error: "Title can't be empty" };

  // Joi always return an object
  return {};
}

export default {
  getMyTodos,
  postTodo,
  patchTodo,
  deleteTodo,
  validate
};
