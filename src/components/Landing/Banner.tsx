import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='relative w-full !rounded-md'>
      <div className='relative' role='region' aria-roledescription='carousel'>
        <div className='w-full overflow-hidden'>
          <div
            className='flex -ml-4'
            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
          >
            <div
              role='group'
              aria-roledescription='slide'
              className='min-w-0 shrink-0 grow-0 basis-full pl-4'
            >
              <Image
                alt='hero-banner-0'
                loading='lazy'
                width={1280}
                height={320}
                decoding='async'
                data-nimg={1}
                className='object-fit aspect-[3/1] w-full rounded-md sm:aspect-[4/1] 2xl:rounded-2xl'
                sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 1280px'
                src='/assets/banner.jpeg'
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 flex justify-center p-4'>
        <span className='transition-color mx-1 inline-block size-2 cursor-pointer rounded-full border duration-200 hover:opacity-75  md:size-[12px] border-border-brand bg-background-brand' />
      </div>
    </div>
  );
};

export default Banner;
