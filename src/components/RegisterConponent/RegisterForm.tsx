'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TermModal from '../Dialog/TermModal';
import PDPAModal from '../Dialog/PDPAModal';
import axios, { AxiosError } from 'axios'; // Import AxiosError
import InputField from './InputField';
import PasswordInput from './PasswordInput';
import DatePickerInput from './DatePickerInput';
import RadioGroup from './RadioGroup';
import TermsAndConditions from './TermsAndConditions';

const RegisterForm = () => {
  const router = useRouter();
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isPDPAOpen, setPDPAOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [gender, setGender] = useState('Other');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const isFormValid =
    firstName && lastName && email && password && phoneNumber && termsAccepted;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
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

    if (!termsAccepted) {
      setErrorMessage('กรุณายอมรับข้อตกลง');
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      dateOfBirth,
      gender,
    };

    try {
      setIsLoading(true);

      const response = await axios.post(
        'http://localhost:3001/auth/user',
        data
      );
      console.log('Response:', response.data);
      router.push('/login');
    } catch (error) {
      console.error('Error:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const errorMessage =
            (axiosError.response?.data as { message?: string })?.message ||
            'เกิดข้อผิดพลาดในการสมัคร';
          setErrorMessage(errorMessage);
        } else {
          setErrorMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ');
        }
      } else {
        setErrorMessage('เกิดข้อผิดพลาดในการสมัคร');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section onSubmit={handleSubmit} id='register-form'>
        <form className='flex flex-col space-y-16'>
          {/* name-surname */}
          <div className='flex flex-col justify-between gap-16 lg:flex-row'>
            <InputField
              id='firstName'
              label='ชื่อ'
              placeholder='ชื่อ'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
              id='lastName'
              label='นามสกุล'
              placeholder='นามสกุล'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* email-password */}
          <div className='flex flex-col justify-between gap-16 lg:flex-row'>
            <InputField
              id='email'
              label='อีเมล'
              type='email'
              placeholder='อีเมล'
              autoComplete='username'
              errorMessage={emailError}
              onChange={handleEmailChange}
            />
            <PasswordInput
              id='password'
              label='รหัสผ่าน'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* date-telnumber */}
          <div className='flex flex-col justify-between gap-16 lg:flex-row'>
            <DatePickerInput
              label='วันเกิด'
              date={dateOfBirth}
              setDate={setDateOfBirth}
            />

            <div className='w-full space-y-8 lg:max-w-[50%]'>
              <label
                htmlFor='phoneNumber'
                className='text-label-medium text-text-primary'
              >
                เบอร์โทรศัพท์
                <span className='text-text-error'>*</span>
              </label>
              <div className='relative'>
                <input
                  id='phoneNumber'
                  type='tel'
                  placeholder='เบอร์โทรศัพท์'
                  autoComplete='tel'
                  className='relative w-full rounded-sm border border-solid border-border-primary px-16 py-12 text-body-md-regular text-text-primary caret-text-primary placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-state-layer-primary-disabled disabled:text-text-disabled focus:outline focus:outline-1 focus:outline-border-primary lg:hover:bg-state-layer-primary-hovered'
                  onChange={(e) => setPhoneNumber(e.target.value)} // อัปเดต state
                />
              </div>
            </div>
          </div>

          {/* gender radio */}
          <RadioGroup
            label='เพศ'
            options={[
              { value: 'Male', label: 'ชาย' },
              { value: 'Female', label: 'หญิง' },
              { value: 'Other', label: 'ไม่ระบุ' },
            ]}
            selectedValue={gender}
            onChange={setGender}
          />
          {/* permission */}
          <TermsAndConditions
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}
            setTermsOpen={setTermsOpen}
            setPDPAOpen={setPDPAOpen}
          />
          {errorMessage && (
            <div className='text-text-error text-sm mt-5'>{errorMessage}</div>
          )}
          {/* submit button */}
          <button
            type='submit'
            className={`relative mt-6 w-full cursor-pointer space-x-8 font-semibold 
    disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled
    h-[48px] px-16 py-12 text-title-md-medium leading-[22px] lg:h-[64px] lg:px-24 lg:py-20 
    lg:text-title-lg-medium lg:leading-[28px] focus:border-brand rounded-3xl border-none 
    bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover 
    focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand 
    disabled:bg-state-layer-primary-disabled`}
            tabIndex={0}
            disabled={!isFormValid}
          >
            <div className='flex items-center justify-center'>
              {isLoading ? 'กำลังส่งข้อมูล...' : 'สร้างบัญชี'}
            </div>
          </button>
        </form>
        <TermModal isOpen={isTermsOpen} onClose={() => setTermsOpen(false)} />
        <PDPAModal isOpen={isPDPAOpen} onClose={() => setPDPAOpen(false)} />
      </section>
    </>
  );
};

export default RegisterForm;
