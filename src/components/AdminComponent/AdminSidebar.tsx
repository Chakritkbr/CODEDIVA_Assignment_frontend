import Image from 'next/image';
import React from 'react';

const AdminSideBanner = () => {
  return (
    <div className='absolute inset-y-0 right-0 hidden h-full min-h-screen w-2/5 shrink-0 grow md:col-span-5 lg:block'>
      <Image
        alt='bg-banner'
        loading='lazy'
        decoding='async'
        data-nimg='fill'
        className='object-cover'
        fill
        src='/assets/register-banner.jpg'
      />
    </div>
  );
};

export default AdminSideBanner;
