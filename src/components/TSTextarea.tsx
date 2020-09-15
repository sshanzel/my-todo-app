import React from 'react';
import clx from 'classnames';
import TSInputLabel from './TSInputLabel';
import TSInputContainer from './TSInputContainer';

export type TSTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  shadow?: boolean;
  border?: boolean;
  label?: string;
  value?: string;
  onInputChange?: (value: string) => void;
};

const TSTextarea: React.FC<TSTextareaProps> = ({
  rows,
  label,
  value,
  className,
  shadow,
  border,
  onChange,
  onInputChange,
  ...props
}) => {
  const [text, setText] = React.useState('');

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (!onInputChange) return;

      onInputChange(e.currentTarget.value);
    },
    [onInputChange]
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        {...props}
        rows={rows || 5}
        value={text}
        onBlur={handleBlur}
        onChange={handleChange}
        className={clx(`w-full p-2 outline-none text-gray-700 focus:bg-gray-100`, {
          shadow,
          border,
        })}
      />
    </TSInputContainer>
  );
};

export default TSTextarea;
