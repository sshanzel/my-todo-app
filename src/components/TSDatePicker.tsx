import React from 'react';
import TSInputLabel from './TSInputLabel';
import TSInputContainer from './TSInputContainer';

export type TSDatePickerProps = React.HTMLAttributes<HTMLDataElement> & {
  value?: Date;
  label?: string;
  format?: Intl.DateTimeFormat;
  onDateChange?: (value: Date) => void;
};

const defaultFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const getFormattedValue = (value?: Date, format?: Intl.DateTimeFormat): string => {
  const newFormat = format || defaultFormat;
  const date = (value && new Date(Date.parse(value.toString()))) || new Date();
  const [{value: month}, , {value: day}, , {value: year}] = newFormat.formatToParts(date);

  return `${year}-${month.padStart(2, '0')}-${day}`;
};

const TSDatePicker: React.FC<TSDatePickerProps> = ({
  value,
  format,
  label,
  className,
  onDateChange,
}) => {
  const [date, setDate] = React.useState(() => new Date());

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = new Date(e.target.value);

      setDate(date);

      if (!onDateChange) return;

      onDateChange(new Date(getFormattedValue(date)));
    },
    [value]
  );

  return (
    <TSInputContainer className={className}>
      <TSInputLabel>{label}</TSInputLabel>
      <input
        type='date'
        style={{paddingTop: '12px'}}
        className='w-full p-2 outline-none text-gray-700 focus:bg-gray-100'
        onChange={handleChange}
        value={getFormattedValue(date, format)}
      />
    </TSInputContainer>
  );
};

export default TSDatePicker;
