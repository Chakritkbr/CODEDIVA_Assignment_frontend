import React, { ReactNode } from 'react';

interface InputFieldProps {
  id: string;
  name?: string;
  label: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  icon?: ReactNode;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  errorMessage,
  onChange,
  value,
  required,
}) => (
  <div className='w-full space-y-8'>
    <section id='input-label'>
      <label htmlFor={id} className='text-label-medium text-text-primary'>
        {label}
      </label>
      <span className='text-text-error'>*</span>
    </section>
    <section className='space-y-8' id='input-field'>
      <div className='relative'>
        <input
          tabIndex={1}
          className='relative w-full rounded-sm border border-solid border-border-primary px-16 py-12 text-body-md-regular text-text-primary caret-text-primary placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-state-layer-primary-disabled disabled:text-text-disabled focus:outline focus:outline-1 focus:outline-border-primary lg:hover:bg-state-layer-primary-hovered'
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          autoCapitalize='none'
          type={type}
          value={value}
          required={required}
          onChange={onChange} // ตรวจสอบ onChange prop
        />
        {errorMessage && (
          <p className='text-text-error text-sm'>{errorMessage}</p>
        )}
      </div>
    </section>
  </div>
);

export default InputField;
