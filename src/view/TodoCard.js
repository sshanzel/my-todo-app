import React from 'react';

export const TodoCard = ({title, description, completed}) => {
  return (
    <div className={`${completed ? 'line-through' : ''} h-20 w-full justify-center truncate`}>
      <h2 className='text-3xl'>{title}</h2>
      <span className='text-xl'>{description}</span>
    </div>
  );
};

export default TodoCard;
