import React from 'react';

export interface AppbarProps {
  name?: string;
}

const Appbar: React.FC<AppbarProps> = ({name}) => {
  return (
    <div className='h-16 flex flex-row items-center px-4 shadow-lg bg-gray-800'>
      <span className='font-semibold text-xl text-white'>Hi {name}!</span>
    </div>
  );
};

export default Appbar;
