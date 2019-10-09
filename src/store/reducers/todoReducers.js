export default function todoReducer(state = [], action) {
  switch (action.type) {
    case "SET_TODOS":
      return [...action.todos];
    case "CREATE_TODO":
      return [...state, action.todo];
    case "UPDATE_TODO":
      const todos = [...state];
      const todoId = action._id || action.todo._id;
      const index = todos.findIndex(t => t._id === todoId);
      todos[index] = { ...action.todo };
      return [...todos];
    case "DELETE_TODO":
      return state.filter(t => t._id !== action.todo._id);
    default:
      return state;
  }
}
