import React from 'react';
import {Todo} from '../store/reducers/types';

export interface TodoCardProps {
  todo: Todo;
  shadow?: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({todo, shadow}) => {
  const {title, description, completed} = todo;

  return (
    <div className={`${completed ? 'line-through' : ''} h-20 w-full justify-center truncate`}>
      <h2 className='text-3xl'>{title}</h2>
      <span className='text-xl'>{description}</span>
    </div>
  );
};
export default React.memo(TodoCard);
