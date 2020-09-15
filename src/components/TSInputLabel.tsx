import React from 'react';

export interface TSInputLabelProps {}

const TSInputLabel: React.FC<TSInputLabelProps> = ({children}) => {
  return (
    <span className='text-xs text-gray-500 absolute -mt-2 ml-4 bg-white px-1'>{children}</span>
  );
};

export default React.memo(TSInputLabel);
