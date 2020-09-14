import React from 'react';

export type TSInputProps = React.HTMLAttributes<HTMLInputElement> & {
  label?: string;
  value?: string;
};

const TSInput: React.FC<TSInputProps> = ({label, value, onChange}) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <div className='flex flex-col w-full relative'>
      <span className='text-xs text-gray-500 absolute -mt-2 ml-4'>{label}:</span>
      <input
        type='text'
        value={text}
        onBlur={onChange}
        className='w-full shadow p-2 outline-none'
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};

export default React.memo(TSInput);
