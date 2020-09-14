import React from 'react';
import clx from 'classnames';

export type TSInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  shadow?: boolean;
  border?: boolean;
  label?: string;
  value?: string;
  onInputChange?: (value: string) => void;
};

const TSInput: React.FC<TSInputProps> = ({
  label,
  value,
  className,
  shadow,
  border,
  onInputChange,
  ...props
}) => {
  const [text, setText] = React.useState('');

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!onInputChange) return;

      onInputChange(e.currentTarget.value);
    },
    [value]
  );

  React.useEffect(() => {
    setText(value || '');
  }, [value]);

  return (
    <div className={clx(`flex flex-col w-full relative`, className)}>
      <span className='text-xs text-gray-500 absolute -mt-2 ml-4'>{label}:</span>
      <input
        {...props}
        value={text}
        onBlur={handleBlur}
        className={clx(`w-full p-2 outline-none text-gray-700`, {shadow, border})}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};

export default React.memo(TSInput);
