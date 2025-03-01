import Link from 'next/link';
import React from 'react';

const AdminFooter = () => {
  return (
    <div className='flex w-full items-center justify-center space-x-4 md:hidden'>
      <span className='text-body-md-regular'>กลับสู่หน้าหลัก</span>
      <Link
        className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[32px] py-8 text-title-sm-medium leading-[18px] rounded-sm fill-text-link !px-4 text-text-link hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent'
        tabIndex={0}
        href='/'
      >
        <div className='flex items-center justify-center'>หน้าหลัก</div>
      </Link>
    </div>
  );
};

export default AdminFooter;
