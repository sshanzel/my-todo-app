import React from 'react';

export interface AddTodoProps {
  onClick: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className='px-4 bg-gray-700 hover:bg-gray-800 flex items-center justify-center rounded-full shadow focus:outline-none'
    >
      <span className='text-lg text-white'>+ Add Todo</span>
    </button>
  );
};

export default AddTodo;
