import React from 'react';
import clx from 'classnames';
import TSInputLabel from './TSInputLabel';
import TSInputContainer from './TSInputContainer';

export type TSInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  shadow?: boolean;
  border?: boolean;
  filled?: boolean;
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
  filled,
  onChange,
  onInputChange,
  ...props
}) => {
  const [text, setText] = React.useState('');

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!onInputChange) return;

      onInputChange(e.currentTarget.value);
    },
    [onInputChange]
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist();

      setText(e.target.value);

      if (!onChange) return;

      onChange(e);
    },
    [onChange]
  );

  React.useEffect(() => {
    setText(value || '');
  }, [value]);

  return (
    <TSInputContainer className={className}>
      <TSInputLabel>{label}</TSInputLabel>
      <input
        {...props}
        value={text}
        onBlur={handleBlur}
        onChange={handleChange}
        className={clx(
          `w-full p-2 outline-none text-gray-700 focus:bg-gray-100`,
          filled ? 'bg-gray-200' : '',
          {shadow, border}
        )}
      />
    </TSInputContainer>
  );
};

export default React.memo(TSInput);
