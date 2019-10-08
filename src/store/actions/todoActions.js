import todosService from "../../services/todos.service";
import _ from "lodash";

const columns = ["title", "description", "due", "completed", "author"];

export function retrieveTodos() {
  return async function(dispatch) {
    const { data: todos } = await todosService.getMyTodos();
    return dispatch({ type: "SET_TODOS", todos });
  };
}

export function createTodo(todo) {
  return async function(dispatch) {
    const { data } = await todosService.postTodo(_.pick(todo, columns));
    dispatch({ type: "CREATE_TODO", todo: data });
  };
}

export function updateTodo(todo) {
  return async function(dispatch, getState) {
    const { todos } = getState();
    const tmpTodo = todos.find(t => t._id === todo._id);

    try {
      dispatch({ type: "UPDATE_TODO", todo });
      await todosService.patchTodo(todo._id, _.pick(todo, columns));
    } catch (ex) {
      dispatch({ type: "UPDATE_TODO", tmpTodo });
    }
  };
}

export function deleteTodo(todo) {
  return async function(dispatch) {
    try {
      await todosService.deleteTodo(todo._id, todo);
      dispatch({ type: "DELETE_TODO", todo });
    } catch (ex) {
      dispatch({ type: "CREATE_TODO", todo });
    }
  };
}
