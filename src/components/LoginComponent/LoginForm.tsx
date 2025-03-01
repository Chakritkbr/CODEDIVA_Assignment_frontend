'use client';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import InputField from './InputField';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const isFormValid = email && password;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      setEmailError('กรุณากรอกอีเมลให้ถูกต้อง');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      setIsLoading(true);

      console.log('Sending data to backend:', data);
      const response = await axios.post(
        'http://localhost:3001/auth/login',
        data
      );

      console.log('Response from backend:', response.data);

      if (response?.data?.token) {
        console.log('Login successful:', response.data);

        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        router.push('/');
      } else {
        setErrorMessage('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (error) {
      console.error('Error:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          setErrorMessage(
            (axiosError.response.data as { message: string }).message ||
              'เกิดข้อผิดพลาดในการเข้าสู่ระบบ'
          );
        } else {
          setErrorMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ');
        }
      } else {
        setErrorMessage('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex w-full flex-col'>
      <form className='flex flex-col space-y-16' onSubmit={handleSubmit}>
        <InputField
          id='email'
          label='อีเมล'
          placeholder='อีเมล'
          autoComplete='username'
          type='text'
          value={email}
          required
          errorMessage={emailError}
          onChange={handleEmailChange}
        />
        <PasswordInput
          id='password'
          label='รหัสผ่าน'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <a
          className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[32px] py-8 text-title-sm-medium leading-[18px] sm:text-title-sm-medium sm:leading-[18px] rounded-sm fill-text-link !px-4 text-text-link hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent w-fit'
          tabIndex={0}
          href='/reset-password'
        >
          <div className='flex items-center justify-center'>ลืมรหัสผ่าน?</div>
        </a>
        {errorMessage && (
          <p className='text-text-error text-sm'>{errorMessage}</p>
        )}
        <button
          type='submit'
          className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] focus:border-brand rounded-3xl border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled w-full'
          disabled={!isFormValid || isLoading}
          tabIndex={3}
        >
          <div className='flex items-center justify-center'>
            {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </div>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
