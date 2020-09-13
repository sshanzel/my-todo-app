import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SimpleModal from '../components/Modal';
import AddIconMui from '../components/AddIconMui';
import {retrieveTodos} from '../store/actions/todoActions';

export const ToDoApp = ({todos, getMyTodos}) => {
  const [todo, setTodo] = React.useState();

  React.useEffect(() => {
    getMyTodos();
  }, [getMyTodos]);

  return (
    <div className='flex flex-1 flex-col mt-4'>
      <AddIconMui onClick={() => setTodo({})} />
      <TodoList todos={todos} onClick={t => setTodo(t)} />
      <SimpleModal open={!!todo} onOpen={() => setTodo({})} onClose={() => setTodo(null)}>
        <TodoForm todo={todo} sideEffect={() => setTodo(null)} />
      </SimpleModal>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  getMyTodos: () => dispatch(retrieveTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
