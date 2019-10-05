import todosService from "../../services/todos.service";

export function retrieveTodos() {
  return async function(dispatch) {
    const todos = await todosService.getMyTodos();
    return dispatch({ type: "SET_TODOS", todos });
  };
}

export function createTodo(todo) {
  return async function(dispatch) {
    const { data } = await todosService.postTodo(todo);
    return dispatch({ type: "CREATE_TODO", data });
  };
}

export function updateTodo(todo) {
  return async function(dispatch) {
    const { data } = await todosService.postTodo(todo);
    return dispatch({ type: "UPDATE_TODO", todo: data });
  };
}

export function deleteTodo(todo) {
  return async function(dispatch) {
    await todosService.postTodo(todo);
    return dispatch({ type: "DELETE_TODO", todo });
  };
}
