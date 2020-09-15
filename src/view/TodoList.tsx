import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import TodoCard from './TodoCard';
import TodoAction from './TodoAction';
import {Todo} from '../store/reducers/types';
import TSButtonPlain from '../components/TSButtonPlain';

export interface TodoListProps {
  todos: Todo[];
  onTodoClick: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, onTodoClick}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
      {todos.map(todo => (
        <TSButtonPlain onClick={() => onTodoClick(todo)} contentClassName='text-gray-700'>
          <div key={todo._id} className='flex flex-col w-full shadow p-2 items-start bg-white'>
            <TodoAction todo={todo} />
            <TodoCard todo={todo} />
          </div>
        </TSButtonPlain>
      ))}
    </div>
  );
};

export default React.memo(TodoList);
