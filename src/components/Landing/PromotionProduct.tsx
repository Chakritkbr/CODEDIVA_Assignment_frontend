import React from 'react';
import ProductCard from '../ProductComponent/ProductCard';

const mockProducts = [
  {
    imageUrl: '/assets/promotion_product_2.jpeg',
    price: 499,
    title: '1 ไอศกรีม ควอท 199 บาท สำหรับลูกค้าทุกท่าน',
  },
  {
    imageUrl: '/assets/promotion_product_3.jpeg',
    price: 379,
    title: '1 ไอศกรีม ควอท 199 บาท สำหรับลูกค้าทุกท่าน',
  },
];

const PromotionProduct = () => {
  return (
    <div className='flex w-full flex-col items-center gap-44'>
      <div className='w-full'>
        <h2 className='mb-6 mt-4 text-left text-title-md-bold sm:text-headline-medium 2xl:text-headline-large'>
          โปรโมชัน
        </h2>
        <div className='grid h-fit w-full grid-cols-2 gap-32 md:grid-cols-3 lg:grid-cols-4'>
          {mockProducts.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionProduct;
