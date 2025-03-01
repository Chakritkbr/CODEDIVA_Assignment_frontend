'use client';
import React, { useState, useEffect } from 'react';
import CategorySelector from '../ProductComponent/CategorySelector';
import ProductCard from '../ProductComponent/ProductCard';
import ProductModal from '../Dialog/ProductModal';
import { allProducts, categories as mockCategories } from '@/mockdata/MockData';
import { Product, Category } from '../../types/types';
import axios from 'axios';

const AdminProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    } else {
      setProducts(allProducts);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/categories');
      const combinedCategories = [...response.data, ...mockCategories];
      setCategories(combinedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories(mockCategories);
    }
  };

  const fetchProductsByCategory = async (categoryId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/categories/${categoryId}/products`
      );
      console.log('API response:', response.data);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = (product: Product) => {
    if (product.id) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    } else {
      console.error('ไม่มีสินค้านี้');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleEditProduct = (product: Product) => {
    console.log('แก้ไข product:', product);
    handleCloseModal();
  };

  const handleDeleteProduct = (productId: string) => {
    console.log('ลบ product:', productId);
    handleCloseModal();
  };

  return (
    <div className='w-full'>
      <CategorySelector
        categories={categories.map((category) => category.name)}
        setSelectedCategory={(categoryName) =>
          setSelectedCategory(
            categories.find((category) => category.name === categoryName)?.id ||
              null
          )
        }
      />
      {selectedCategory && (
        <p>
          หมวดสินค้าที่เลือก:{' '}
          {
            categories.find((category) => category.id === selectedCategory)
              ?.name
          }
        </p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              price={product.price}
              title={product.name}
              isAdminMode={true}
              onCardClick={handleCardClick}
              product={product}
            />
          ))}
        </div>
      )}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      )}
    </div>
  );
};

export default AdminProductList;
