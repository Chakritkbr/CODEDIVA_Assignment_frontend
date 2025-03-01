import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from './Icon';
interface DatePickerInputProps {
  label: string;
  date: Date | null;
  setDate: (date: Date | null) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  date,
  setDate,
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleCalendarIconClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
    <div className='w-full space-y-8 lg:max-w-[50%]'>
      <label
        htmlFor='dateOfBirth'
        className='text-label-medium text-text-primary'
      >
        {label}
        <span className='text-text-error'>*</span>
      </label>
      <div className='relative w-full'>
        <DatePicker
          selected={date}
          onChange={setDate}
          dateFormat='dd/MM/yyyy'
          placeholderText='dd/mm/yyyy'
          wrapperClassName='w-full'
          className='relative w-full rounded-sm border border-solid border-border-primary px-16 py-12 text-body-md-regular text-text-primary caret-text-primary placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-state-layer-primary-disabled disabled:text-text-disabled focus:outline focus:outline-1 focus:outline-border-primary lg:hover:bg-state-layer-primary-hovered'
          open={isDatePickerOpen}
          onClickOutside={() => setIsDatePickerOpen(false)}
          popperClassName='w-full z-50'
        />
        <span
          className='input-icon absolute right-16 top-1/2 flex size-[24px] -translate-y-1/2 cursor-pointer items-center justify-center'
          onClick={handleCalendarIconClick}
        >
          <CalendarIcon />
        </span>
      </div>
    </div>
  );
};

export default DatePickerInput;
