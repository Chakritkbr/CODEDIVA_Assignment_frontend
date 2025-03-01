'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import DeliveryModal from '../Dialog/DeliveryModal';

const Delivery = () => {
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  return (
    <>
      <div
        id='delivery-address-selector'
        className='flex h-fit scroll-mt-[120px] flex-col items-start gap-16 md:h-[56px] md:flex-row md:items-center md:gap-24'
      >
        <div className='flex text-nowrap text-title-md-bold'>
          ไปส่งที่{/* */}:
        </div>
        <div className='w-full'>
          <div
            className='flex w-full items-center justify-between gap-8 rounded-sm border border-border-line p-12 bg-background-secondary cursor-pointer'
            onClick={() => setIsDeliveryModalOpen(true)}
          >
            <div className='flex max-w-full flex-nowrap items-center gap-x-8'>
              <Image
                alt='location-icon'
                loading='lazy'
                width={16}
                height={16}
                decoding='async'
                data-nimg={1}
                style={{ color: 'transparent' }}
                src='/assets/location_pin.svg'
              />
              <div className='relative line-clamp-1 flex grow text-left text-title-md-medium'>
                เลือกที่อยู่สำหรับจัดส่ง
              </div>
            </div>
            <svg
              width={20}
              height={20}
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='text-[14px]'
            >
              <g id='drop-down-triangle'>
                <path
                  id='Vector'
                  d='M5.83398 7.9165L10.0007 12.0832L14.1673 7.9165H5.83398Z'
                  fill='#787878'
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          id='tooltip'
          role='tooltip'
          style={{
            position: 'absolute',
            top: 222,
            left: '118.117px',
            visibility: 'hidden',
          }}
          className='z-10 flex h-fit min-h-[30px] items-center justify-center rounded-xs bg-surface-secondary  shadow-md bg-surface-onsurface-black pointer-events-none w-fit !rounded-sm !bg-surface-onsurface-black !px-16 !py-12 text-center !text-text-primary-invert'
          tabIndex={-1}
        >
          <span className='whitespace-nowrap text-label-large'>
            กรุณาเลือกที่อยู่สำหรับจัดส่ง
          </span>
          <div className='absolute size-[8px] rotate-45 bg-surface-secondary left-[50%] -top-[4px] -translate-x-[50%] bg-surface-onsurface-black !bg-surface-onsurface-black' />
        </div>
      </div>
      <DeliveryModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
      />
    </>
  );
};

export default Delivery;
