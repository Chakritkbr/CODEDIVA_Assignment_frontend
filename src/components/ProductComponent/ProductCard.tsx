'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import AddProductHover from './AddProductHover';
import { Product } from '../../types/types';

interface ProductProps {
  imageUrl: string;
  price: number;
  title: string;
  isAdminMode?: boolean;
  product?: Product;
  onCardClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductProps> = ({
  imageUrl,
  price,
  title,
  isAdminMode = false,
  product,
  onCardClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null);

  const handleMouseEnter = () => {
    if (!isAdminMode) {
      setIsHovered(true);
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isAdminMode) {
      setIsHovered(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  };
  const cardStyle = isAdminMode
    ? 'relative flex h-auto w-full flex-col justify-between gap-8 overflow-hidden rounded-lg border border-solid border-border-line invisible animate-grow opacity-0 cursor-pointer'
    : 'relative flex h-auto w-full flex-col justify-between gap-8 overflow-hidden rounded-lg border border-solid border-border-line invisible animate-grow opacity-0';

  return (
    <div
      className={cardStyle}
      tabIndex={0}
      style={{ animationDelay: '0ms' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onCardClick && product && onCardClick(product)} // เพิ่ม product &&
    >
      <div className='flex flex-col gap-4'>
        <div className='flex w-full items-center justify-center rounded-lg'>
          <Image
            alt='Product image'
            loading='lazy'
            width={296}
            height={240}
            decoding='async'
            src={imageUrl}
            style={{ color: 'transparent' }}
          />
        </div>
        <div className='flex h-fit flex-col gap-4 p-12'>
          <span className='flex w-full text-body-md-bold text-text-brand lg:text-label-large'>
            <div className='flex space-x-8'>
              <span className='inline-block shrink-0 whitespace-nowrap first-letter:mr-1'>
                ฿ {price}
              </span>
            </div>
          </span>
          <h3 className='line-clamp-2 w-full text-start text-title-sm-bold text-text-primary lg:text-title-md-bold'>
            {title}
          </h3>
        </div>

        <div
          className={`hidden lg:block ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } transition-all duration-300 ease-in-out absolute inset-0 flex items-center justify-center`}
        >
          {isVisible && (
            <AddProductHover
              price={price}
              selectedQuantity={selectedQuantity}
              setSelectedQuantity={setSelectedQuantity}
            />
          )}
        </div>
      </div>

      <button
        className='absolute right-16 top-1/2 flex w-[32px] items-center justify-center rounded-3xl bg-background-brand p-[6px] shadow-[0px_8px_16px_-4px_rgba(3,6,15,0.32)] lg:hidden'
        type='button'
      >
        <svg
          width={20}
          height={20}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-[14px]'
        >
          <path
            d='M15.8334 10.8333H10.8334V15.8333H9.16669V10.8333H4.16669V9.16663H9.16669V4.16663H10.8334V9.16663H15.8334V10.8333Z'
            fill='#FFFFFF'
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
