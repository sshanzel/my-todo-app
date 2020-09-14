import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {RootState} from '../store/reducers';
import SimpleModal from '../components/Modal';
import AddIconMui from '../components/AddIconMui';
import {initTodo, Todo} from '../store/reducers/types';
import {retrieveTodos} from '../store/actions/todoActions';

export interface TodoAppProps {}

const TodoApp: React.FC<TodoAppProps> = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState<Todo>();
  const todos = useSelector((state: RootState) => state.todos);

  React.useEffect(() => {
    dispatch(retrieveTodos());
  }, [dispatch]);

  return (
    <div className='flex flex-1 flex-col mt-4'>
      <div className='mb-4'>
        <button
          onClick={() => setTodo(() => initTodo())}
          className='px-4 bg-gray-700 hover:bg-gray-800 flex flex-shrink items-center justify-center rounded-full shadow focus:outline-none'
        >
          <span className='text-lg text-white'>+ Add Todo</span>
        </button>
      </div>
      <TodoList todos={todos} onClick={(t: Todo) => setTodo(t)} />
      <SimpleModal open={!!todo} onClose={() => setTodo(undefined)}>
        <TodoForm todo={todo} sideEffect={() => setTodo(undefined)} />
      </SimpleModal>
    </div>
  );
};

export default React.memo(TodoApp);
