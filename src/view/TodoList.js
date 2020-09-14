import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import TodoCard from './TodoCard';
import TodoAction from './TodoAction';

export const TodoList = ({todos, onClick}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
      {todos.map(todo => (
        <ButtonBase focusRipple onClick={() => onClick(todo)}>
          <div key={todo._id} className='flex flex-col w-full shadow p-2 items-start bg-white'>
            <TodoAction todo={todo} />
            <TodoCard
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
            ></TodoCard>
          </div>
        </ButtonBase>
      ))}
    </div>
  );
};

export default TodoList;
