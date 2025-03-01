'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LoginModal from '../Dialog/LoginModal';
import LanguageDropdown from '../Dropdown/LanguageDropdown';
import CartModal from '../Dialog/CartModal';
import UserDropdown from '../Dropdown/UserDropdown';
import { useRouter } from 'next/navigation';

const NavLarge = () => {
  const router = useRouter();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserName(parsedUser.firstName);
      setIsLoggedIn(true);
    } else {
      setUserName(null);
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUserName(null);
    setIsLoggedIn(false);
    setUserDropdownOpen(false);
    router.refresh();
  };

  return (
    <>
      <header className='site-header sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-background-white px-16 [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex'>
        <section className='relative mx-auto w-full  pb-[40px] max-w-screen-2xl !p-12'>
          <div className='felx-rows flex w-full items-center justify-center'>
            <div className='logo !my-0 !ml-0 !mr-24p flex h-full shrink-0 items-center bg-none'>
              <Link href='/'>
                <Image
                  alt='swensens-logo'
                  loading='lazy'
                  width={152}
                  height={40}
                  decoding='async'
                  data-nimg={1}
                  className='py-[4px] pl-[4px'
                  style={{ color: 'transparent' }}
                  src='/assets/logo_color.svg'
                />
              </Link>
            </div>
            <div className='header-right inline-flex w-full shrink items-center justify-end space-x-16'>
              <button
                type='button'
                className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled !p-0 h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] ml-2 size-[48px]'
                tabIndex={0}
                onClick={() => setCartOpen(true)}
              >
                <div className='flex items-center justify-center'>
                  <div className='relative flex items-center justify-center'>
                    <Image
                      alt='cart icon'
                      loading='lazy'
                      width={32}
                      height={32}
                      decoding='async'
                      data-nimg={1}
                      className='flex shrink-0 hover:drop-shadow-lg'
                      src='/assets/cart.svg'
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
              </button>
              <div
                className='fixed right-0 top-1/2 z-20 hidden h-fit -translate-y-1/2 lg:flex items-center justify-center'
                onClick={() => setCartOpen(true)}
              >
                <div className='relative flex h-[110px] w-[88px] flex-col items-center justify-center gap-1 rounded-l-lg px-8 py-16 bg-sw_brand-500 shadow-[0px_8px_16px_-4px_rgba(3,6,15,0.32)] cursor-pointer transition-all hover:w-[100px]'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-[14px]'
                  >
                    <path
                      d='M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z'
                      fill='white'
                    />
                  </svg>
                  <div className='text-center text-title-sm-bold text-text-invert'>
                    ตะกร้า
                  </div>
                </div>
              </div>
              <div className='py-4'>
                {isLoggedIn ? (
                  <button
                    type='button'
                    className='focus-visible:outline-none border-brand rounded-3xl border bg-state-layer-primary-default fill-text-brand text-text-brand hover:bg-state-layer-brand-hover hover:fill-text-invert hover:text-text-invert focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled h-[48px] px-16 py-12 text-title-md-medium leading-[22px]'
                    tabIndex={0}
                    onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
                  >
                    สวัสดี {userName}
                  </button>
                ) : (
                  <button
                    type='button'
                    className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled  px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] focus:border-brand rounded-3xl border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled h-[48px] shrink-0 pt-4'
                    tabIndex={0}
                    onClick={() => setLoginOpen(true)}
                  >
                    <div className='flex items-center justify-center'>
                      เข้าสู่ระบบ / ลงทะเบียน
                    </div>
                  </button>
                )}

                {isUserDropdownOpen && (
                  <UserDropdown userName={userName} onLogout={handleLogout} />
                )}
              </div>
              <div className='relative'>
                <button
                  type='button'
                  className='flex h-[48px] flex-row items-center space-x-8 uppercase'
                  onClick={() => setLangOpen(!isLangOpen)}
                >
                  <Image
                    alt='world icon'
                    loading='lazy'
                    width={16}
                    height={16}
                    decoding='async'
                    data-nimg={1}
                    className='icon shrink-0'
                    src='/assets/world.svg'
                    style={{ color: 'transparent' }}
                  />
                  <span className='text-title-md-medium text-text-primary'>
                    th
                  </span>
                </button>

                {isLangOpen && <LanguageDropdown />}
              </div>
            </div>
          </div>
        </section>
      </header>

      {isLoginOpen && (
        <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      )}

      <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default NavLarge;
