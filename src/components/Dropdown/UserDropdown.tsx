import Image from 'next/image';
import React from 'react';

interface UserDropdownProps {
  userName: string | null;
  onLogout: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ userName, onLogout }) => {
  return (
    <div
      data-radix-popper-content-wrapper
      dir='ltr'
      style={{
        position: 'fixed',
        left: -100,
        top: 0,
        transform: 'translate(1411px, 68px)',
        minWidth: 'max-content',
        zIndex: 50,
      }}
    >
      <div
        data-side='bottom'
        data-align='center'
        role='menu'
        aria-orientation='vertical'
        className='z-50 min-w-[128px] overflow-hidden rounded-sm bg-state-layer-primary-default px-4 py-8 text-text-primary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 !p-16'
        tabIndex={-1}
      >
        <div role='group' className='flex flex-col gap-16'>
          {userName && <div className='text-sm p-2'>สวัสดี, {userName}</div>}
          <div
            role='menuitem'
            className='relative flex  cursor-default select-none items-center px-8 py-4 text-label-medium text-text-primary outline-none transition-colors focus:bg-state-layer-primary-hovered focus:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 !h-max !min-h-[40px] !w-full !p-0'
            tabIndex={-1}
          >
            <a className='flex w-full items-center space-x-8' href='/order'>
              <Image
                alt='คำสั่งซื้อและสั่งอีกครั้ง'
                loading='lazy'
                width='24'
                height='24'
                decoding='async'
                src='/assets/order.svg'
                style={{ color: 'transparent' }}
              />
              <span>คำสั่งซื้อและสั่งอีกครั้ง</span>
            </a>
          </div>

          <div
            role='menuitem'
            className='relative flex  cursor-default select-none items-center px-8 py-4 text-label-medium text-text-primary outline-none transition-colors focus:bg-state-layer-primary-hovered focus:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 !h-max !min-h-[40px] !w-full !p-0'
            tabIndex={-1}
          >
            <a
              className='flex w-full items-center space-x-8'
              href='/account/profile'
            >
              <Image
                alt='โปรไฟล์'
                loading='lazy'
                width='24'
                height='24'
                decoding='async'
                src='/assets/profile-circle.svg'
                style={{ color: 'transparent' }}
              />
              <span>โปรไฟล์</span>
            </a>
          </div>

          <div
            role='separator'
            aria-orientation='horizontal'
            className='-mx-1 my-1 h-px bg-border-line'
          ></div>

          <div
            role='menuitem'
            className='relative flex  cursor-default select-none items-center px-8 py-4 text-label-medium text-text-primary outline-none transition-colors focus:bg-state-layer-primary-hovered focus:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 !h-max !min-h-[40px] !w-full !p-0'
            tabIndex={-1}
          >
            <button
              className='flex w-full items-center space-x-8'
              onClick={onLogout}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-text-error'
              >
                <g id='log-out'>
                  <path d='M15.3333 8.66667L14.3933 9.60667L16.1133 11.3333H9.33325V12.6667H16.1133L14.3933 14.3867L15.3333 15.3333L18.6666 12L15.3333 8.66667ZM6.66659 7.33333H11.9999V6H6.66659C5.93325 6 5.33325 6.6 5.33325 7.33333V16.6667C5.33325 17.4 5.93325 18 6.66659 18H11.9999V16.6667H6.66659V7.33333Z'></path>
                </g>
              </svg>
              <span className='text-text-error'>ออกจากระบบ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
