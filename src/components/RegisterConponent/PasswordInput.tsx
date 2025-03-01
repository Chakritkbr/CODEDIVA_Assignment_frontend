import React, { useState } from 'react';
import InputField from './InputField';
import { PasswordIcon } from './Icon';

interface PasswordInputProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordIconClick = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  return (
    <InputField
      id={id}
      label={label}
      type={showPassword ? 'text' : 'password'}
      placeholder='รหัสผ่าน'
      autoComplete='new-password'
      onChange={onChange}
      icon={<PasswordIcon onClick={handlePasswordIconClick} />}
    />
  );
};

export default PasswordInput;
