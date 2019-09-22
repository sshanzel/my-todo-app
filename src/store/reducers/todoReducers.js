export default function todoReducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        [Object.keys(state).length + 1]: {
          ...action.todo,
          id: Object.keys(state).length + 1
        }
      };
    case "UPDATE_TODO":
      return { ...state, [action.todo.id]: { ...action.todo } };
    case "DELETE_TODO":
      const newState = { ...state };
      delete newState[action.todo.id];
      return { ...newState };
    default:
      return state;
  }
}
