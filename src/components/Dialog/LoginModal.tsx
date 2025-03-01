'use client';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import InputField from '../LoginComponent/InputField';
import PasswordInput from '../LoginComponent/PasswordInput';

const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
        onClose();
        window.location.reload();
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

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-30 flex h-screen w-screen items-center justify-center visible'
      style={{ opacity: 1 }}
    >
      <section className='size-full rounded-[10px] bg-white p-24 shadow-xs md:p-40 hide-scrollbar relative z-30 mx-40 h-fit overflow-hidden overflow-y-scroll shadow-xs md:!max-w-[406px] py-40 max-w-screen max-h-[90vh] max-w-[calc(100vw-20px)] sm:max-w-[428px] '>
        <button
          className='absolute right-16 top-16 flex size-[40px] items-center justify-center'
          onClick={onClose}
        >
          <svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-icon-primary'
          >
            <g id='close'>
              <path
                id='Vector'
                d='M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z'
              />
            </g>
          </svg>
        </button>
        <div className='space-y-16'>
          <div className='whitespace-pre-wrap text-display-small text-text-primary'>
            ยินดีต้อนรับสมาชิก Swensen&apos;s
            เข้าสู่ระบบแล้วเริ่มสั่งไอศกรีมกันเลย!
          </div>
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
                className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[32px]  py-8 text-title-sm-medium leading-[18px] sm:text-title-sm-medium sm:leading-[18px] rounded-sm fill-text-link !px-4 text-text-link hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent w-fit'
                tabIndex={0}
                href='/th/reset-password'
              >
                <div className='flex items-center justify-center'>
                  ลืมรหัสผ่าน?
                </div>
              </a>
              {errorMessage && (
                <p className='text-text-error text-sm mt-5'>{errorMessage}</p>
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
          <div className='flex w-full items-center justify-center space-x-4'>
            <span className='text-body-md-regular'>
              ยังไม่มีบัญชีใช่หรือไม่
            </span>
            <a
              className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[32px]  py-8 text-title-sm-medium leading-[18px] rounded-sm fill-text-link !px-4 text-text-link hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent'
              tabIndex={4}
              href='/register'
            >
              <div className='flex items-center justify-center'>สร้างบัญชี</div>
            </a>
          </div>
        </div>
      </section>
      <button
        className='overlay absolute inset-0 z-20 size-full bg-surface-scrim/80'
        style={{ opacity: 1 }}
        onClick={onClose}
      />
    </div>
  );
};

export default LoginModal;
