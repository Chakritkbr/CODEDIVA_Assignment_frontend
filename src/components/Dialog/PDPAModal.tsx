import Image from 'next/image';
import React from 'react';

const PDPAModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <>
      <div
        className='fixed inset-0 z-30 flex h-screen w-screen items-center justify-center visible'
        style={{ opacity: 1 }}
      >
        <section className=' size-full rounded-[10px] bg-white p-24 shadow-xs md:p-40 hide-scrollbar relative z-30 mx-40 h-fit overflow-hidden overflow-y-scroll shadow-xs !max-w-[520px] max-w-screen max-h-[90vh]  sm:max-w-[428px] md:max-w-[624px]'>
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
          <div className='text-title-lg-bold'>PDPA</div>
          <div className='space-y-16 whitespace-pre-wrap text-body-md-regular'>
            <Image
              alt='PDPA'
              loading='lazy'
              width={344}
              height={148}
              decoding='async'
              data-nimg={1}
              className='mx-auto'
              src='/assets/pdpa-banner.svg'
              style={{ color: 'transparent' }}
            />
            <p>
              นโยบายคุ้มครองข้อมูลส่วนบุคคลนี้ (“นโยบาย”) ใช้อธิบายว่า บริษัท
              สเวนเซ่นส์ (ไทย) จำกัด (“เรา” หรือ “บริษัท”) และบริษัทร่วม
              บริษัทย่อย (รวมเรียกว่า “กลุ่มบริษัท”) จัดเก็บรวบรวม ใช้ ประมวลผล
              และเปิดเผยข้อมูลส่วนบุคคลของท่าน
              ผ่านการใช้งานแอปพลิเคชันในโทรศัพท์เคลื่อนที่และเว็บไซต์และการให้บริการออนไลน์ของเรา
              รวมถึง www.swensens1112.com และเว็บไซต์ แอปพลิเคชั่น
              หรือการให้บริการออนไลน์อื่นๆ
              ที่บริษัทเป็นเจ้าของหรือเป็นผู้ดำเนินการ (รวมเรียกว่า “ไซต์”)
              หรือกิจกรรมการตลาดอื่นใด ดำเนินการโดยบริษัท, ผลิตภัณฑ์, ฟีเจอร์
              และบริการใดๆ ทั้งหมดทั่วโลก (รวมเรียกว่า “บริการ”)
              โดยนโยบายนี้ใช้กับลูกค้า พาร์ทเนอร์ เอเจนซี่ ผู้รับจ้าง
              และผู้ให้บริการ
            </p>
            <button
              type='button'
              className='relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] focus:border-brand rounded-3xl border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled w-full'
              tabIndex={0}
            >
              <div className='flex items-center justify-center'>ตกลง</div>
            </button>
          </div>
        </section>
        <button
          className='overlay absolute inset-0 z-20 size-full bg-surface-scrim/80'
          style={{ opacity: 1 }}
          onClick={onClose}
        />
      </div>
    </>
  );
};

export default PDPAModal;
