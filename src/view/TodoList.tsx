import React from 'react';
import TodoCard from './TodoCard';
import {Todo} from '../store/reducers/types';
import TSClickable from '../components/TSClickable';

export interface TodoListProps {
  todos: Todo[];
  onComplete: (todo: Todo) => void;
  onTodoClick: (e: React.MouseEvent, todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, onComplete, onTodoClick}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
      {todos.map(todo => (
        <TSClickable
          key={todo._id}
          onClick={e => onTodoClick(e, todo)}
          className='flex justify-center'
        >
          <TodoCard key={todo._id} todo={todo} onComplete={onComplete} shadow />
        </TSClickable>
      ))}
    </div>
  );
};

export default React.memo(TodoList);
