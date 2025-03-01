import Link from 'next/link';
import React from 'react';

const AdminHeader = () => {
  return (
    <div className='text-text_primary min-h-[40px] items-center justify-between hidden md:flex'>
      <button
        type='button'
        className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm fill-text-secondary !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent flex w-fit items-center bg-transparent text-text-primary'
        tabIndex={0}
      >
        <div className='flex items-center justify-center w-fit gap-8 '>
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
          กลับสู่หน้าหลัก
        </span>{' '}
        <Link href='/'>
          <button
            type='button'
            className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] border-brand rounded-3xl border bg-state-layer-primary-default fill-text-brand text-text-brand hover:bg-state-layer-brand-hover hover:fill-text-invert hover:text-text-invert focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled'
            tabIndex={0}
          >
            <div className='flex items-center justify-center'>หน้าหลัก</div>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AdminHeader;
