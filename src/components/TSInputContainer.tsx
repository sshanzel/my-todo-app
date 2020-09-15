import React from 'react';
import clx from 'classnames';

export type TSInputContainerProps = React.HTMLAttributes<HTMLDivElement> & {};

const TSInputContainer: React.FC<TSInputContainerProps> = ({children, className}) => {
  return <div className={clx(`flex flex-col w-full relative`, className)}>{children}</div>;
};

export default React.memo(TSInputContainer);
