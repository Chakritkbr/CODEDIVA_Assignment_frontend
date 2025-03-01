import Image from 'next/image';
import React, { useState } from 'react';
import SidemenuLang from '../Dropdown/SidemenuLang';
import { useRouter } from 'next/navigation';

const Sidemenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isLangOpen, setLangOpen] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;
  return (
    <div className='xl:hidden'>
      <div
        aria-label='side menu backdrop'
        className={`bg-opacity/50 fixed left-0 top-0 z-30 size-full bg-surface-scrim/80 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        aria-label='side menu'
        className={`fixed left-0 top-0 z-30 flex h-full w-4/5 max-w-full flex-col gap-16 bg-surface-primary px-24 pb-16 pt-64 transition-all ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between'>
          <div className='hover:bg-primary break-words p-2 text-headline-small text-text-primary transition-all'>
            <div className='flex'>Login to begin your ice cream journey</div>
          </div>
          <button
            className='absolute right-8 top-8'
            type='button'
            onClick={onClose}
          >
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-icon-brand'
            >
              <g id='close'>
                <path
                  id='Vector'
                  d='M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z'
                />
              </g>
            </svg>
          </button>
        </div>
        <div className='hide-scrollbar m-0 flex flex-col gap-16 overflow-y-auto'>
          <div className='flex h-max min-h-[40px] w-full items-center gap-8  pr-4 text-title-md-medium !pl-4'>
            <a
              className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm bg-state-layer-primary-default fill-text-link !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-brand-focussed disabled:bg-transparent !h-fit w-full text-title-md-medium bg-state-layer-brand-focussed'
              tabIndex={0}
              href='/th/order'
            >
              <div className='flex items-center h-fit px-8 gap-8 w-full !justify-start'>
                <Image
                  alt='คำสั่งซื้อและสั่งอีกครั้ง'
                  loading='lazy'
                  width={24}
                  height={24}
                  decoding='async'
                  data-nimg={1}
                  src='/assets/order.svg'
                  style={{ color: 'transparent' }}
                />
                <span>คำสั่งซื้อและสั่งอีกครั้ง</span>
              </div>
            </a>
          </div>
          <button className='flex h-[40px] w-full items-center'>
            <div className='flex h-max min-h-[40px] w-full items-center gap-8  pr-4 text-title-md-medium !pl-4'>
              <a
                className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm bg-state-layer-primary-default fill-text-link !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-brand-focussed disabled:bg-transparent !h-fit w-full text-title-md-medium bg-state-layer-brand-focussed'
                tabIndex={0}
                href='/th/account/profile'
              >
                <div className='flex items-center h-fit px-8 gap-8 w-full !justify-start'>
                  <Image
                    alt='โปรไฟล์'
                    loading='lazy'
                    width={24}
                    height={24}
                    decoding='async'
                    data-nimg={1}
                    src='/assets/profile-circle.svg'
                    style={{ color: 'transparent' }}
                  />
                  <span>โปรไฟล์</span>
                </div>
              </a>
            </div>
          </button>
          <div className='flex w-full flex-col gap-16'>
            <div className='flex w-full flex-col gap-8 pl-32'>
              <div className='flex min-h-[48px] items-center text-title-md-medium'>
                <a
                  className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled  py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm bg-state-layer-primary-default fill-text-link !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-brand-focussed disabled:bg-transparent !h-fit w-full text-title-md-medium'
                  tabIndex={0}
                  href='/th/account/change-password'
                >
                  <div className='flex items-center  h-fit px-8 gap-8 w-full !justify-start'>
                    <div className='flex space-x-8'>
                      <span>เปลี่ยนรหัสผ่าน</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex min-h-[48px] items-center text-title-md-medium'>
                <a
                  className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled  py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm bg-state-layer-primary-default fill-text-link !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-brand-focussed disabled:bg-transparent !h-fit w-full text-title-md-medium'
                  tabIndex={0}
                  href='/th/account/credit-cards'
                >
                  <div className='flex items-center  h-fit px-8 gap-8 w-full !justify-start'>
                    <div className='flex space-x-8'>
                      <span>บัตรเครดิตของฉัน</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className='flex min-h-[48px] items-center text-title-md-medium'>
                <a
                  className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled  py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] rounded-sm bg-state-layer-primary-default fill-text-link !px-4 text-text-primary hover:bg-state-layer-primary-hovered focus:bg-state-layer-brand-focussed disabled:bg-transparent !h-fit w-full text-title-md-medium'
                  tabIndex={0}
                  href='/th/account/addresses'
                >
                  <div className='flex items-center  h-fit px-8 gap-8 w-full !justify-start'>
                    <div className='flex space-x-8'>
                      <span>สมุดที่อยู่</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex h-max min-h-[40px] w-full items-center gap-8 pl-16 pr-4 text-title-md-medium'>
            <div
              id='change-lang-button'
              className='relative flex h-auto w-full flex-col rounded-none border-none bg-transparent text-text-primary'
            >
              <button
                className='flex h-[40px] w-full items-center'
                onClick={() => setLangOpen(!isLangOpen)}
              >
                <div className='flex h-[40px] w-full items-center justify-between'>
                  <div className='flex items-center gap-8'>
                    <div className='flex'>
                      <label className='cursor-pointer'>ภาษา</label>
                      &nbsp;-&nbsp;
                      <label
                        id='lang-mobile-text'
                        className='font-black cursor-pointer pr-[15px] uppercase'
                      >
                        th
                      </label>
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
              </button>
              <div
                className={`transition-all duration-300 ${
                  isLangOpen
                    ? 'ease-in max-h-[500px] opacity-100'
                    : 'ease-out max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {isLangOpen && <SidemenuLang />}
              </div>
            </div>
          </div>
          <button
            type='button'
            className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] focus:border-brand rounded-3xl border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled flex items-center text-title-md-medium'
            tabIndex={0}
            onClick={() => {
              router.push('/login');
              onClose();
            }}
          >
            <div className='flex items-center gap-8 w-full justify-center'>
              <Image
                alt='login or register'
                loading='lazy'
                width={16}
                height={16}
                decoding='async'
                data-nimg={1}
                src='/assets/user.svg'
                style={{ color: 'transparent' }}
              />
              เข้าสู่ระบบ / ลงทะเบียน
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
