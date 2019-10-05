import todosService from "../../services/todos.service";

export function retrieveTodos() {
  const todos = todosService.getMyTodos();
  return { type: "SET_TODOS", todos };
}

export function createTodo(todo) {
  return { type: "CREATE_TODO", todo };
}

export function updateTodo(todo) {
  return { type: "UPDATE_TODO", todo };
}

export function deleteTodo(todo) {
  return { type: "DELETE_TODO", todo };
}
