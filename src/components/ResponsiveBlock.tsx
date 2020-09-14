import React from 'react';

export interface ResponsiveBlockProps {}

const ResponsiveBlock: React.FC<ResponsiveBlockProps> = ({children}) => {
  return (
    <div className='w-full p-4 justify-center lg:w-1/3 md:w-1/2' style={{maxWidth: '520px'}}>
      {children}
    </div>
  );
};

export default ResponsiveBlock;
