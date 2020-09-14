import React from 'react';

export type TSInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  value?: string;
  onInputChange?: (value: string) => void;
};

const TSInput: React.FC<TSInputProps> = ({label, value, className, onInputChange, ...props}) => {
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
    <div className={`flex flex-col w-full relative ${className}`}>
      <span className='text-xs text-gray-500 absolute -mt-2 ml-4'>{label}:</span>
      <input
        {...props}
        value={text}
        onBlur={handleBlur}
        className='w-full shadow p-2 outline-none'
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};

export default React.memo(TSInput);
