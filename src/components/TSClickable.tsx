import React from 'react';
import clx from 'classnames';

export type TSClickableProps = React.ButtonHTMLAttributes<HTMLElement> & {};

const TSClickable: React.FC<TSClickableProps> = ({children, className, ...props}) => {
  return (
    <div className={clx('cursor-pointer', className)} {...props}>
      {children}
    </div>
  );
};

export default React.memo(TSClickable);
