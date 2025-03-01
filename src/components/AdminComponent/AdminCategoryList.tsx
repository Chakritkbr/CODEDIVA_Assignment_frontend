'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
}

const AdminCategoryList = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(
    null
  );
  const [editedCategoryName, setEditedCategoryName] = useState('');

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/categories');
      if (response.ok) {
        const data = await response.json();
        setCategoryList(data);
        setErrorMessage(null);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to fetch categories');
        console.error('Failed to fetch categories', errorData);
      }
    } catch (error) {
      setErrorMessage(
        'Error fetching categories: ' +
          (error instanceof Error ? error.message : 'Unknown error')
      );
      console.error('Error fetching categories:', error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (newCategoryName.trim() !== '') {
      try {
        const response = await fetch('http://localhost:3001/api/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newCategoryName }),
        });
        if (response.ok) {
          setNewCategoryName('');
          fetchCategories();
          setErrorMessage(null);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Failed to add category');
          console.error('Failed to add category', errorData);
        }
      } catch (error) {
        setErrorMessage(
          'Error adding category: ' +
            (error instanceof Error ? error.message : 'Unknown error')
        );
        console.error('Error adding category:', error);
      }
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategoryId(category.id);
    setEditedCategoryName(category.name);
  };

  const handleUpdateCategory = async (id: string) => {
    if (editedCategoryName.trim() !== '') {
      try {
        const response = await fetch(
          `http://localhost:3001/api/categories/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: editedCategoryName }),
          }
        );
        if (response.ok) {
          setEditingCategoryId(null);
          setEditedCategoryName('');
          fetchCategories();
          setErrorMessage(null);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Failed to update category');
          console.error('Failed to update category', errorData);
        }
      } catch (error) {
        setErrorMessage(
          'Error updating category: ' +
            (error instanceof Error ? error.message : 'Unknown error')
        );
        console.error('Error updating category:', error);
      }
    }
  };
  const handleDeleteCategory = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/categories/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        fetchCategories();
        setErrorMessage(null);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to delete category');
        console.error('Failed to delete category', errorData);
      }
    } catch (error) {
      setErrorMessage(
        'Error deleting category: ' +
          (error instanceof Error ? error.message : 'Unknown error')
      );
      console.error('Error deleting category:', error);
    }
  };
  return (
    <div className='p-8'>
      <h2 className='text-3xl font-bold mb-8 text-text-primary'>
        จัดการหมวดสินค้า
      </h2>

      {/* เพิ่มหมวดสินค้า */}
      <div className='mb-8 flex space-x-4'>
        <input
          type='text'
          placeholder='ชื่อหมวดสินค้าใหม่'
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          className='relative w-full rounded-sm border border-solid border-border-primary px-16 py-12 text-body-md-regular text-text-primary caret-text-primary placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-state-layer-primary-disabled disabled:text-text-disabled focus:outline focus:outline-1 focus:outline-border-primary lg:hover:bg-state-layer-primary-hovered'
        />
        <button
          onClick={handleAddCategory}
          className='bg-sw_brand-500 text-white p-3 rounded-md font-semibold hover:bg-brand-primary-hover transition duration-300'
        >
          เพิ่มหมวดสินค้า
        </button>
      </div>
      {errorMessage && (
        <div className='text-text-error text-sm mt-5'>{errorMessage}</div>
      )}
      {/* รายการหมวดสินค้า */}
      <div className='space-y-4'>
        {categoryList.map((category) => (
          <div
            key={category.id}
            className='flex items-center justify-between mb-2'
          >
            {editingCategoryId === category.id ? (
              <div className='flex items-center space-x-4 w-full'>
                <input
                  type='text'
                  value={editedCategoryName}
                  onChange={(e) => setEditedCategoryName(e.target.value)}
                  className='relative w-full rounded-sm border border-solid border-border-primary px-16 py-12 text-body-md-regular text-text-primary caret-text-primary placeholder:text-text-disabled disabled:cursor-not-allowed disabled:bg-state-layer-primary-disabled disabled:text-text-disabled focus:outline focus:outline-1 focus:outline-border-primary lg:hover:bg-state-layer-primary-hovered'
                />
                <div className='flex space-x-2'>
                  <button
                    onClick={() => handleUpdateCategory(category.id)}
                    className='bg-sw_brand-500 text-white p-3 rounded-md font-semibold hover:bg-green-600 transition duration-300'
                  >
                    บันทึก
                  </button>
                  <button
                    onClick={() => setEditingCategoryId(null)}
                    className='bg-sw_brand-500 text-white p-3 rounded-md font-semibold hover:bg-gray-400 transition duration-300'
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            ) : (
              <div className='flex items-center justify-between w-full'>
                <div
                  className='relative max-w-full space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[40px] px-16 py-8 text-title-md-medium leading-[22px] md:h-[48px] md:py-12 md:text-title-md-medium md:leading-[22px] border-brand rounded-3xl border bg-state-layer-primary-default fill-text-brand text-text-brand cursor-pointer'
                  onClick={() => handleEditCategory(category)}
                >
                  {category.name}
                </div>
                <div className='flex space-x-2'>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className='bg-sw_brand-500 text-white p-3 rounded-md font-semibold hover:bg-red-600 transition duration-300'
                  >
                    <Image
                      src='/assets/Trash.svg'
                      alt='Delete Icon'
                      width={20}
                      height={30}
                    />
                  </button>
                  <button
                    onClick={() => handleEditCategory(category)}
                    className='bg-sw_brand-500 text-white p-3 rounded-md font-semibold hover:bg-yellow-600 transition duration-300'
                  >
                    <Image
                      src='/assets/PencilSquare.svg'
                      alt='Edit Icon'
                      width={20}
                      height={30}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategoryList;
