import React from 'react';

export interface SimpleModalProps {
  open: boolean;
  error?: string;
  children?: React.ReactNode | React.ReactNode[];
  onClose: () => void;
}

const WRAPPER_CLASS = 'drawer__wrapper';

const SimpleModal: React.FC<SimpleModalProps> = ({onClose, open, children}) => {
  const handleClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;

    if (el.classList.contains(WRAPPER_CLASS)) onClose();
  };

  return (
    <div
      onClick={handleClick}
      style={{backgroundColor: '#00000080'}}
      className={`${WRAPPER_CLASS} ${
        open ? 'flex' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen z-10 items-center justify-center p-4`}
    >
      <div className='bg-white w-full p-4 justify-center lg:w-1/3 md:w-1/2'>{children}</div>
    </div>
  );
};

export default React.memo(SimpleModal);
