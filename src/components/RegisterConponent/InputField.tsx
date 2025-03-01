import { ReactNode } from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  icon?: ReactNode;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  icon,
  errorMessage,
  onChange,
}) => (
  <div className='w-full space-y-8 lg:max-w-[50%]'>
    <label htmlFor={id} className='text-label-medium text-text-primary'>
      {label}
      <span className='text-text-error'>*</span>
    </label>
    <div className='relative'>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        className='relative w-full rounded-sm border border-solid border-border-primary px-16 py-12 text-body-md-regular text-text-primary caret-text-primary placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-state-layer-primary-disabled disabled:text-text-disabled focus:outline focus:outline-1 focus:outline-border-primary lg:hover:bg-state-layer-primary-hovered'
      />
      {icon && (
        <span className='input-icon absolute right-16 top-1/2 flex size-[24px] -translate-y-1/2 cursor-pointer items-center justify-center'>
          {icon}
        </span>
      )}
    </div>
    {errorMessage && (
      <span className='text-text-error text-sm'>{errorMessage}</span>
    )}
  </div>
);

export default InputField;
