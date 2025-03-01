'use client';
import React, { useState } from 'react';
import AdminProductList from './AdminProductList';
import AdminCategoryList from './AdminCategoryList';
import AddminAddItem from './AddminAddItem';

const AdminBox: React.FC = () => {
  const [isAdminProductListOpen, setAdminProductListOpen] = useState(false);
  const [isAdminCategoryListOpen, setAdminCategoryListOpen] = useState(false);
  const [isAdminAddItemOpen, setAdminAddItemOpen] = useState(false);

  const handleCloseAddItem = () => {
    setAdminAddItemOpen(false);
  };

  return (
    <section
      id='admin-box'
      className='mx-auto size-full rounded-[10px] bg-white p-24 shadow-xs md:p-40 flex h-full flex-col space-y-16 overflow-x-hidden'
    >
      <button
        type='button'
        className='relative max-w-full cursor-pointer font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm fill-text-secondary !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent w-fit items-center space-x-8 bg-transparent text-text-primary block md:hidden'
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
      <div className='peer whitespace-pre-wrap text-display-small text-text-primary'>
        <h2 className='mb-6 mt-4 text-left text-title-md-bold sm:text-headline-medium 2xl:text-headline-large'>
          จัดการสินค้าและหมวดสินค้า
        </h2>
      </div>
      <div className='flex justify between'>
        <button
          onClick={() => {
            setAdminProductListOpen(true);
            setAdminCategoryListOpen(false);
            setAdminAddItemOpen(false);
          }}
          className={`truncate relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] border-brand rounded-3xl border bg-state-layer-primary-default fill-text-brand text-text-brand hover:bg-state-layer-brand-hover hover:fill-text-invert hover:text-text-invert focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled ${
            isAdminProductListOpen ? 'bg-state-layer-brand-hover' : ''
          }`}
        >
          จัดการสินค้า
        </button>
        <button
          onClick={() => {
            setAdminProductListOpen(false);
            setAdminCategoryListOpen(true);
            setAdminAddItemOpen(false);
          }}
          className={`truncate relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] border-brand rounded-3xl border bg-state-layer-primary-default fill-text-brand text-text-brand hover:bg-state-layer-brand-hover hover:fill-text-invert hover:text-text-invert focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled ${
            isAdminCategoryListOpen ? 'bg-state-layer-brand-hover' : ''
          }`}
        >
          จัดการหมวดสินค้า
        </button>
        <button
          onClick={() => {
            setAdminProductListOpen(false);
            setAdminCategoryListOpen(false);
            setAdminAddItemOpen(true);
          }}
          className={`truncate relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] border-brand rounded-3xl border bg-state-layer-primary-default fill-text-brand text-text-brand hover:bg-state-layer-brand-hover hover:fill-text-invert hover:text-text-invert focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled ${
            isAdminAddItemOpen ? 'bg-state-layer-brand-hover' : ''
          }`}
        >
          เพิ่มสินค้า
        </button>
      </div>
      <div className='flex w-full'>
        {isAdminProductListOpen && <AdminProductList />}
        {isAdminCategoryListOpen && <AdminCategoryList />}
        {isAdminAddItemOpen && <AddminAddItem onClose={handleCloseAddItem} />}
      </div>
    </section>
  );
};

export default AdminBox;
