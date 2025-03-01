'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Sidemenu from './Sidemenu';
import CartModalBottom from '../Dialog/CartModalBottom';
import Link from 'next/link';

const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <>
      <header
        id='header'
        className='site-header fixed top-0 z-20 h-[72px] w-screen bg-white [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:hidden'
      >
        <section className='relative mx-auto w-full p-24  max-w-screen-2xl space-y-8 px-24 py-16 !pb-16'>
          <div className='grid w-full grid-cols-[1fr,2fr,1fr] items-center justify-center'>
            <div className='flex shrink-0 justify-start'>
              <button
                className='flex size-[40px] items-center justify-center'
                onClick={() => setSideMenuOpen(true)}
              >
                <Image
                  alt='hamburger bar'
                  loading='lazy'
                  width={24}
                  height={24}
                  decoding='async'
                  data-nimg={1}
                  style={{ color: 'transparent' }}
                  src='/assets/hamburger_bar.svg'
                />
              </button>
            </div>
            <Link
              href='/'
              className='logo flex h-fit shrink-0 justify-center bg-none'
            >
              <Image
                alt='swensens-logo'
                loading='lazy'
                width={145}
                height={35}
                decoding='async'
                data-nimg={1}
                style={{ color: 'transparent' }}
                src='/assets/logo_color_small.svg'
              />
            </Link>
            <div className='flex flex-row justify-end space-x-8'>
              <button
                className='flex size-[40px] shrink-0 items-center justify-center'
                onClick={() => setCartOpen(true)}
              >
                <div className='relative flex items-center justify-center'>
                  <Image
                    alt='cart icon'
                    loading='lazy'
                    width={24}
                    height={24}
                    decoding='async'
                    data-nimg={1}
                    className='flex shrink-0 hover:drop-shadow-lg'
                    style={{ color: 'transparent' }}
                    src='/assets/cart.svg'
                  />
                </div>
              </button>
            </div>
          </div>
        </section>
        <Sidemenu
          isOpen={isSideMenuOpen}
          onClose={() => setSideMenuOpen(false)}
        />
      </header>
      <CartModalBottom isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
