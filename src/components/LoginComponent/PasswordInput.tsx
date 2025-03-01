import React from 'react';
import InputField from './InputField';

interface PasswordInputProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  onChange,
  value,
  required,
}) => {
  return (
    <InputField
      id={id}
      label={label}
      type='password'
      placeholder='รหัสผ่าน'
      autoComplete='current-password'
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};

export default PasswordInput;
