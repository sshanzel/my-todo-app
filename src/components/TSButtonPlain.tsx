import React from 'react';

export type TSButtonPlainProps = React.ButtonHTMLAttributes<HTMLElement> & {
  label?: string;
};

const TSButtonPlain: React.FC<TSButtonPlainProps> = ({label}) => {
  return (
    <button className='focus:outline-none'>
      <span className='text-sm text-gray-600'>{label}</span>
    </button>
  );
};

export default TSButtonPlain;
