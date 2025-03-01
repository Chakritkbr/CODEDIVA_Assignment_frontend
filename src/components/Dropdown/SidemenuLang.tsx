'use client';
import React from 'react';

const SidemenuLang = () => {
  return (
    <div className='flex w-full flex-col gap-16 max-h-screen opacity-100'>
      <div className='flex w-full flex-col gap-8 pl-32'>
        <div className='flex min-h-[48px] items-center text-title-md-medium'>
          <a
            hrefLang='en'
            aria-label='change-locale-button'
            className='flex h-fit w-full uppercase cursor-pointer gap-8'
            href='/en'
          >
            <div className='flex space-x-8'>
              <span>English</span>
            </div>
          </a>
        </div>
        <div className='flex min-h-[48px] items-center text-title-md-medium'>
          <a
            aria-label='change-locale-button'
            className='flex h-fit w-full uppercase cursor-pointer gap-8'
            href='/th'
          >
            <div className='flex space-x-8'>
              <div className='flex h-auto w-[4px] rounded-xs bg-border-brand' />
              <span>ภาษาไทย</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidemenuLang;
