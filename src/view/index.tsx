import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import {RootState} from '../store/reducers';
import AddTodo from '../components/AddTodo';
import SimpleModal from '../components/Modal';
import todosService from '../services/todos.service';
import {initTodo, Todo} from '../store/reducers/types';
import {retrieveTodos} from '../store/actions/todoActions';
import {updateTodo, deleteTodo, createTodo} from '../store/actions/todoActions';

export interface TodoAppProps {}

const TodoApp: React.FC<TodoAppProps> = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState<Todo>();
  const todos = useSelector((state: RootState) => state.todos);

  React.useEffect(() => {
    dispatch(retrieveTodos());
  }, [dispatch]);

  const handleChange = (value: string | Date, field: keyof Todo) => {
    if (!todo) return;

    setTodo({...todo, [field]: value});
  };

  const handleSave = () => {
    if (!todo) return;

    const {error} = todosService.validate(todo);

    if (error) return;

    const command = todo._id ? updateTodo : createTodo;

    dispatch(command(todo));

    setTodo(undefined);
  };

  const handleDelete = () => {
    setTodo(undefined);

    if (!todo || !todo._id) return;

    dispatch(deleteTodo(todo));
  };

  return (
    <div className='flex flex-1 flex-col mt-4'>
      <div className='mb-4'>
        <AddTodo onClick={() => setTodo(() => initTodo())} />
      </div>
      <TodoList todos={todos} onTodoClick={(t: Todo) => setTodo(t)} />
      <SimpleModal open={!!todo} onClose={() => setTodo(undefined)}>
        <TodoItem todo={todo} onSave={handleSave} onDelete={handleDelete} onChange={handleChange} />
      </SimpleModal>
    </div>
  );
};

export default React.memo(TodoApp);
