import Image from 'next/image';
import React from 'react';

const DeliveryModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div
      className='fixed inset-0 z-30 flex h-screen w-screen items-center justify-center !mt-0 visible'
      style={{ opacity: 1 }}
    >
      <section className=' size-full rounded-[10px] bg-white p-24 shadow-xs md:p-40 hide-scrollbar relative z-30 mx-40 h-fit overflow-hidden overflow-y-scroll shadow-xs max-w-screen max-h-[90vh] max-w-[calc(100vw-20px)] sm:max-w-[428px] md:max-w-[624px]'>
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
        <div className='grid grid-cols-1 gap-y-16'>
          <div className='flex items-center gap-x-16'>
            <div className='text-title-md-bold lg:text-headline-small'>
              เลือกที่อยู่สำหรับจัดส่ง
            </div>
          </div>
          <div className='relative w-full text-center'>
            <button
              type='button'
              className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px]  py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm fill-text-link !px-4 text-text-link hover:bg-state-layer-primary-hovered focus:bg-state-layer-primary-focussed disabled:bg-transparent lg:absolute lg:right-0 lg:top-4'
              tabIndex={0}
            >
              <div className='flex items-center justify-center gap-x-8 px-8'>
                <svg
                  width={17}
                  height={16}
                  viewBox='0 0 17 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.1667 2L14.06 2.02L10.5 3.4L6.5 2L2.74 3.26667C2.6 3.31333 2.5 3.43333 2.5 3.58667V13.6667C2.5 13.8533 2.64667 14 2.83333 14L2.94 13.98L6.5 12.6L10.5 14L14.26 12.7333C14.4 12.6867 14.5 12.5667 14.5 12.4133V2.33333C14.5 2.14667 14.3533 2 14.1667 2ZM7.16667 3.64667L9.83333 4.58V12.3533L7.16667 11.42V3.64667ZM3.83333 4.30667L5.83333 3.63333V11.4333L3.83333 12.2067V4.30667ZM13.1667 11.6933L11.1667 12.3667V4.57333L13.1667 3.8V11.6933Z'
                    fill='#2578E5'
                  />
                </svg>
                เลือกจากแผนที่
              </div>
            </button>
          </div>
          <div className='flex flex-col gap-y-16 lg:h-[300px]'>
            <div className='shrink-0 text-title-sm-medium text-text-primary lg:text-title-md-medium'>
              ที่อยู่ที่บันทึกไว้
            </div>
            <div className='flex flex-col items-center gap-y-24'>
              <Image
                alt='empty-address'
                loading='lazy'
                width={120}
                height={120}
                decoding='async'
                data-nimg={1}
                src='/assets/empty-address-list.png'
                style={{ color: 'transparent' }}
              />
              <div className='text-title-md-medium text-text-secondary '>
                ไม่มีที่อยู่ที่บันทึกไว้
              </div>
            </div>
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

export default DeliveryModal;
