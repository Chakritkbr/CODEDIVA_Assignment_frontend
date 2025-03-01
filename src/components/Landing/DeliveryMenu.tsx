'use client';
import React, { useState, useEffect } from 'react';
import CategorySelector from '../ProductComponent/CategorySelector';
import ProductCard from '../ProductComponent/ProductCard';
import {
  categories as mockCategories,
  allProducts as mockProducts,
} from '@/mockdata/MockData';
import axios from 'axios';
import { Product, Category } from '../../types/types';

const DeliveryMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const categoriesResponse = await axios.get(
        'http://localhost:3001/api/categories'
      );
      const productsResponse = await axios.get(
        'http://localhost:3001/api/products'
      );

      const combinedCategories = [
        ...categoriesResponse.data,
        ...mockCategories,
      ];
      setCategories(combinedCategories);

      const combinedProducts = [...productsResponse.data, ...mockProducts];
      setProducts(combinedProducts);
    } catch (error) {
      console.error('Error fetching data:', error);

      setCategories(mockCategories);
      setProducts(mockProducts);
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;

  return (
    <>
      <div className='flex w-full flex-col items-center gap-44'>
        <CategorySelector
          categories={categories.map((category) => category.name)}
          setSelectedCategory={(categoryName) =>
            setSelectedCategory(
              categories.find((category) => category.name === categoryName)
                ?.id || null
            )
          }
        />
        <div className='grid h-fit w-full grid-cols-2 gap-32 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              price={product.price}
              title={product.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DeliveryMenu;
