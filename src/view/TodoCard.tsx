import React from 'react';
import clx from 'classnames';
import {Todo} from '../store/reducers/types';
import TSButtonPlain from '../components/TSButtonPlain';
import ClipboardCheckIcon from '../components/Icons/ClipboardCheckIcon';

export interface TodoCardProps {
  todo: Todo;
  shadow?: boolean;
  onComplete: (todo: Todo) => void;
}

export const TODO_ACTION = 'todo__action';

const TodoCard: React.FC<TodoCardProps> = ({todo, shadow, onComplete}) => {
  const {title, description, completed} = todo;

  return (
    <div className={clx('relative flex flex-col w-full p-2 items-start bg-white', {shadow})}>
      <TSButtonPlain onClick={() => onComplete(todo)} className='w-6 h-6 absolute left-0 ml-2'>
        <ClipboardCheckIcon filled={todo.completed} className={TODO_ACTION} />
      </TSButtonPlain>
      <div className={`h-20 w-full flex flex-col justify-center items-center truncate`}>
        <h2 className={clx('text-3xl', {'line-through': completed})}>{title}</h2>
        <span className='text-xl'>{description}</span>
      </div>
    </div>
  );
};
export default React.memo(TodoCard);
