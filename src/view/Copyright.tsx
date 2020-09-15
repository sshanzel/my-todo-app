import React from 'react';

export interface CopyrightProps {}

const Copyright: React.FC<CopyrightProps> = () => {
  return (
    <div className='mt-4 justify-center w-full flex text-sm text-gray-600'>
      Copyright © The Solevilla
    </div>
  );
};

export default Copyright;
