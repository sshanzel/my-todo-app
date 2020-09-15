import _ from 'lodash';
import {errorToString} from '../../helpers/index';
import todosService from '../../services/todos.service';

const columns = ['title', 'description', 'due', 'completed', 'author'];

export const retrieveTodos = () => async dispatch => {
  const {data: todos} = await todosService.getMyTodos();
  return dispatch({type: 'SET_TODOS', todos});
};

export const createTodo = todo => async dispatch => {
  const newTodo = {...todo, _id: 1};

  dispatch({type: 'CREATE_TODO', todo: newTodo});
  const {data} = await todosService.postTodo(_.pick(todo, columns));
  dispatch({type: 'UPDATE_TODO', todo: data, _id: 1});
};

export const updateTodo = todo => async (dispatch, getState) => {
  const {todos} = getState();
  const tmpTodo = todos.find(t => t._id === todo._id);

  try {
    dispatch({type: 'UPDATE_TODO', todo});
    await todosService.patchTodo(todo._id, _.pick(todo, columns));
  } catch (ex) {
    dispatch({type: 'UPDATE_TODO', todo: tmpTodo});
    return {error: errorToString(ex.response.data)};
  }
};

export const deleteTodo = todo => async dispatch => {
  try {
    dispatch({type: 'DELETE_TODO', todo});
    await todosService.deleteTodo(todo._id, todo);
  } catch (ex) {
    dispatch({type: 'CREATE_TODO', todo});
  }
};
