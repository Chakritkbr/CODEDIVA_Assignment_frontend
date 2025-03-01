'use client';
import React, { useState, useEffect } from 'react';
import InputField from '../LoginComponent/InputField';
import axios, { AxiosError } from 'axios'; // Import AxiosError
import { useRouter } from 'next/navigation';
import { Product, Category } from '../../types/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onEdit,
  onDelete,
}) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  });

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError.response?.data as { message: string })
          ?.message;
        setErrorMessage(errorMessage || 'Failed to fetch categories.');
      } else {
        setErrorMessage('An unexpected error occurred');
      }
    }
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmitEdit = async () => {
    try {
      setErrorMessage(null);
      if (product.id) {
        await axios.put(`http://localhost:3001/api/products/${product.id}`, {
          ...editedProduct,
          price: parseFloat(editedProduct.price.toString()),
        });
        console.log('Product updated successfully');
        onEdit(editedProduct);
        onClose();
        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error('Error updating product:', axiosError.response?.data);
        setErrorMessage(
          (axiosError.response?.data as { message: string }).message ||
            'Failed to update product'
        );
      } else {
        console.error('Error updating product:', error);
        setErrorMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <div className='fixed inset-0 z-30 flex h-screen w-screen items-center justify-center visible'>
      <section className='size-full rounded-[10px] bg-white p-24 shadow-xs md:p-40 hide-scrollbar relative z-30 mx-40 h-fit overflow-hidden overflow-y-scroll shadow-xs md:!max-w-[406px] py-40 max-h-[90vh] max-w-[calc(100vw-20px)] sm:max-w-[428px] '>
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
        <div className='space-y-16'>
          <div className='whitespace-pre-wrap text-display-small text-text-primary'>
            แก้ไขสินค้า
          </div>
          <div className='flex w-full flex-col'>
            <form className='flex flex-col space-y-16'>
              <InputField
                id='name'
                name='name'
                label='ชื่อสินค้า'
                placeholder='ชื่อสินค้า'
                value={editedProduct.name}
                onChange={handleInputChange}
              />
              <InputField
                id='price'
                name='price'
                label='ราคา'
                placeholder='ราคา'
                type='number'
                value={editedProduct.price.toString()}
                onChange={handleInputChange}
              />
              <InputField
                id='imageUrl'
                name='imageUrl'
                label='URL รูปภาพ'
                placeholder='URL รูปภาพ'
                value={editedProduct.imageUrl}
                onChange={handleInputChange}
              />
              <div>
                <label className='text-label-medium text-text-primary'>
                  หมวดสินค้า
                </label>
                <select
                  name='categoryId'
                  value={editedProduct.categoryId}
                  onChange={handleInputChange}
                  className='relative w-full rounded-sm border border-solid border-border-primary px-16 py-12 text-body-md-regular text-text-primary caret-text-primary placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-state-layer-primary-disabled disabled:text-text-disabled focus:outline focus:outline-1 focus:outline-border-primary lg:hover:bg-state-layer-primary-hovered'
                >
                  <option value=''>เลือกหมวดหมู่</option>
                  {categories &&
                    categories.map((category: Category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </form>
            {errorMessage && (
              <div className='text-text-error text-sm mt-5'>{errorMessage}</div>
            )}
            <div className='flex gap-10 mt-5'>
              <button
                type='button'
                onClick={handleSubmitEdit}
                className='flex-1 relative cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] focus:border-brand rounded-3xl border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled h-[48px] shrink-0 pt-4'
              >
                แก้ไข
              </button>
              <button
                type='button'
                onClick={() => {
                  if (product.id) {
                    onDelete(product.id);
                  } else {
                    setErrorMessage('ไม่มีสินค้านี้');
                  }
                }}
                className='flex-1 relative cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] focus:border-brand rounded-3xl border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled h-[48px] shrink-0 pt-4'
              >
                ลบ
              </button>
            </div>
          </div>
        </div>
      </section>
      <button
        className='overlay absolute inset-0 z-20 size-full bg-surface-scrim/80'
        onClick={onClose}
      />
    </div>
  );
};

export default ProductModal;
