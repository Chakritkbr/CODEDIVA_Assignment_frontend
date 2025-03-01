import React, { useState } from 'react';

const AddProductHover = ({
  price,
  selectedQuantity,
  setSelectedQuantity,
}: {
  price: number;
  selectedQuantity: number | null;
  setSelectedQuantity: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const calculatePrice = () => {
    if (selectedQuantity !== null) {
      return (selectedQuantity * price).toLocaleString();
    }
    return price.toLocaleString();
  };

  const handleSelectQuantity = (num: number) => {
    setSelectedQuantity(num);
    setIsExpanded(false);
  };

  return (
    <div
      className='absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent flex flex-col justify-end opacity-100 translate-y-0'
      aria-label='product-action'
    >
      <div
        aria-label='product-cta'
        className='flex h-12 w-full overflow-hidden shadow-white'
      >
        <div
          className={`hide-scrollbar absolute z-10 flex flex-col overflow-y-auto bg-white shadow-sm text-title-md-medium text-text-brand transition-all duration-300 ease-in-out ${
            isExpanded ? 'h-[150px]' : 'h-0'
          } bottom-48 max-h-[300px]`}
        >
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
            <button
              key={num}
              type='button'
              onClick={() => handleSelectQuantity(num)}
              className='relative block w-16 px-2 py-4 text-center after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-px after:w-3/4 after:border-b after:border-b-sw_gray-100 after:content-[""] last:after:border-0'
            >
              {num}
            </button>
          ))}
        </div>

        <button
          type='button'
          aria-label='qty-selector'
          tabIndex={0}
          onClick={toggleExpand}
          className='w-16 rounded-l-3xl border border-border-brand bg-white text-title-md-medium text-text-brand flex items-center justify-center gap-x-8 px-16 py-8 disabled:bg-state_layer-primary-disabled disabled:border-none disabled:text-text-disabled'
        >
          {selectedQuantity !== null ? selectedQuantity : 1}{' '}
          <div className='rotate-0'>
            <svg
              width={20}
              height={20}
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-icon-brand'
            >
              <g id='drop-down-triangle'>
                <path
                  id='Vector'
                  d='M5.83398 7.9165L10.0007 12.0832L14.1673 7.9165H5.83398Z'
                />
              </g>
            </svg>
          </div>
        </button>

        <button
          aria-label='add-to-cart'
          className='bg-sw_brand text-body-md-bold text-text-primary-invert 2xl:text-title-md-medium flex grow flex-wrap items-center justify-center gap-x-2 hover:bg-state-layer-brand-hover [&_.icon>*]:fill-text-invert focus:border focus:border-l-0 focus:border-border-brand focus:bg-state-layer-brand-focussed focus:text-text-brand [&_.icon>*]:focus:fill-text-brand disabled:bg-state-layer-primary-disabled disabled:text-text-disabled [&_.icon>*]:disabled:fill-text-disabled relative overflow-hidden transition-all duration-150 ease-in-out rounded-r-3xl'
        >
          <span className='icon' />
          <span>ใส่ตะกร้า&nbsp;</span>
          <div className='flex space-x-8'>
            <span className='inline-block shrink-0 whitespace-nowrap first-letter:mr-1'>
              ฿ {calculatePrice()}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddProductHover;
