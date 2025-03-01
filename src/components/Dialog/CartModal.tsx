import React from 'react';

const CartModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div
      className='fixed bottom-24 right-0 top-[104px] z-50 my-auto hidden lg:flex lg:max-h-[90vh] 2xl:max-h-[75vh] items-center justify-center translate-x-0'
      style={{}}
    >
      <div className='h-full w-[352px] rounded-l-lg bg-surface-primary pb-16 shadow-md relative my-24 flex flex-col gap-y-4'>
        <button
          className='absolute -left-8 -top-8 z-10 flex size-[24px] shrink-0 cursor-pointer items-center rounded-full bg-background-white text-icon-primary'
          onClick={onClose}
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth={0}
            viewBox='0 0 16 16'
            className='size-[24px]'
            width='1em'
            height='1em'
            color='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            style={{ color: 'currentcolor' }}
          >
            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z' />
          </svg>
        </button>
        <div className='relative flex h-full flex-col  overflow-y-hidden'>
          <div className='flex size-full min-h-[400px] flex-col items-center justify-center gap-y-4 text-center text-body-md-regular text-text-disabled px-16'>
            <svg
              width={56}
              height={56}
              viewBox='0 0 56 56'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='text-[14px]'
            >
              <path
                d='M30.736 22.1667C32.0193 22.1667 33.0693 21.1167 33.0693 19.8333V15.1667H37.736C39.0193 15.1667 40.0693 14.1167 40.0693 12.8333C40.0693 11.55 39.0193 10.5 37.736 10.5H33.0693V5.83333C33.0693 4.55 32.0193 3.5 30.736 3.5C29.4527 3.5 28.4027 4.55 28.4027 5.83333V10.5H23.736C22.4527 10.5 21.4027 11.55 21.4027 12.8333C21.4027 14.1167 22.4527 15.1667 23.736 15.1667H28.4027V19.8333C28.4027 21.1167 29.4527 22.1667 30.736 22.1667ZM19.0693 43.1667C16.5027 43.1667 14.426 45.2667 14.426 47.8333C14.426 50.4 16.5027 52.5 19.0693 52.5C21.636 52.5 23.736 50.4 23.736 47.8333C23.736 45.2667 21.636 43.1667 19.0693 43.1667ZM42.4027 43.1667C39.836 43.1667 37.7593 45.2667 37.7593 47.8333C37.7593 50.4 39.836 52.5 42.4027 52.5C44.9693 52.5 47.0693 50.4 47.0693 47.8333C47.0693 45.2667 44.9693 43.1667 42.4027 43.1667ZM21.636 31.5H39.0193C40.7693 31.5 42.3093 30.5433 43.1027 29.0967L50.6627 14.77C51.246 13.65 50.8493 12.25 49.7293 11.6433C48.586 11.0133 47.1627 11.4567 46.556 12.6L39.0193 26.8333H22.6393L12.6993 5.83333H7.40267C6.11934 5.83333 5.06934 6.88333 5.06934 8.16667C5.06934 9.45 6.11934 10.5 7.40267 10.5H9.736L18.136 28.21L14.986 33.9033C13.2827 37.03 15.5227 40.8333 19.0693 40.8333H44.736C46.0193 40.8333 47.0693 39.7833 47.0693 38.5C47.0693 37.2167 46.0193 36.1667 44.736 36.1667H19.0693L21.636 31.5Z'
                fill='currentColor'
              />
            </svg>
            <div>เริ่มเพิ่มสินค้าลงในรถเข็นของคุณ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
