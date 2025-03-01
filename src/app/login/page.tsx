import LoginForm from '@/components/LoginComponent/LoginForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <section className='w-full overflow-x-hidden bg-surface-secondary'>
      <section className='relative mx-auto w-full p-24 pb-40 max-w-screen-2xl min-h-screen !py-0'>
        <section
          id='register-container'
          className='relative w-full xl:min-h-screen grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-32 h-full py-40 lg:py-40'
        >
          <div className='col-span-1 hidden lg:block' />
          <div className='col-span-full lg:col-span-5'>
            <div className='w-full lg:space-y-24'>
              <div className='text-text_primary  min-h-[40px] items-center justify-between hidden lg:flex'>
                <button
                  type='button'
                  className='relative max-w-full cursor-pointer  font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px]  py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm fill-text-secondary !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent flex w-fit items-center space-x-8 bg-transparent text-text-primary'
                  tabIndex={0}
                >
                  <div className='flex items-center justify-center  w-fit gap-8 '>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth={0}
                      viewBox='0 0 320 512'
                      height='16px'
                      width='16px'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
                    </svg>
                    <span
                      id='heading-action-bar-back-button'
                      className='text-title-sm-medium text-text-primary md:text-title-md-medium'
                    >
                      กลับ
                    </span>
                  </div>
                </button>
                <section
                  className='flex items-center space-x-8'
                  id='heading-action-bar-register-button'
                >
                  <span
                    id='login-noaccount-text'
                    className='text-text_primary text-right text-title-md-medium'
                  >
                    ยังไม่มีบัญชีใช่หรือไม่
                  </span>{' '}
                  <Link href='/register'>
                    <button
                      type='button'
                      className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] border-brand rounded-3xl border bg-state-layer-primary-default fill-text-brand text-text-brand hover:bg-state-layer-brand-hover hover:fill-text-invert hover:text-text-invert focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled'
                      tabIndex={0}
                    >
                      <div className='flex items-center justify-center'>
                        สร้างบัญชี
                      </div>
                    </button>
                  </Link>
                </section>
              </div>
              <section
                id='register-box'
                className='mx-auto size-full rounded-[10px] bg-white p-24 shadow-xs md:p-40 flex h-full flex-col space-y-16'
              >
                <button
                  type='button'
                  className='relative max-w-full cursor-pointer font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px]  py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm fill-text-secondary !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent  w-fit items-center space-x-8 bg-transparent text-text-primary block lg:hidden'
                  tabIndex={0}
                >
                  <div className='flex items-center justify-center  w-fit gap-8 '>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth={0}
                      viewBox='0 0 320 512'
                      height='16px'
                      width='16px'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
                    </svg>
                    <span
                      id='heading-action-bar-back-button'
                      className='text-title-sm-medium text-text-primary md:text-title-md-medium'
                    >
                      กลับ
                    </span>
                  </div>
                </button>
                <div className='whitespace-pre-wrap text-display-small text-text-primary'>
                  ยินดีต้อนรับสมาชิก Swensen&apos;s
                  เข้าสู่ระบบแล้วเริ่มสั่งไอศกรีมกันเลย!
                </div>
                <LoginForm />
                <div className='flex w-full items-center justify-center space-x-4 lg:hidden'>
                  <span className='text-body-md-regular'>
                    ยังไม่มีบัญชีใช่หรือไม่
                  </span>
                  <a
                    className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[32px]  py-8 text-title-sm-medium leading-[18px] rounded-sm fill-text-link !px-4 text-text-link hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent'
                    tabIndex={0}
                    href='/register'
                  >
                    <div className='flex items-center justify-center'>
                      สร้างบัญชี
                    </div>
                  </a>
                </div>
              </section>
            </div>
          </div>
          <div className='col-span-1 hidden lg:block' />
          <div className='absolute inset-y-0 right-0 hidden h-full min-h-screen w-2/5 shrink-0 grow md:col-span-5 lg:block'>
            <Image
              alt='bg-banner'
              loading='lazy'
              decoding='async'
              data-nimg='fill'
              className='object-cover'
              fill
              src='/assets/register-banner.jpg'
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default page;
