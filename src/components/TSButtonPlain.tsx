import React from 'react';

export type TSButtonPlainProps = React.ButtonHTMLAttributes<HTMLElement> & {};

const TSButtonPlain: React.FC<TSButtonPlainProps> = ({children, ...rest}) => {
  return (
    <button className='focus:outline-none' {...rest}>
      <span className='text-sm text-gray-600'>{children}</span>
    </button>
  );
};

export default React.memo(TSButtonPlain);
