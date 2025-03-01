'use client';
import React, { useState } from 'react';

interface CategorySelectorProps {
  categories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  setSelectedCategory,
}) => {
  const [selectedCategoryState, setSelectedCategoryState] = useState<
    number | null
  >(null);

  const handleCategorySelect = (index: number, category: string) => {
    setSelectedCategory(category);
    setSelectedCategoryState(index);
  };

  return (
    <div className='flex w-full items-center gap-16 overflow-y-auto overflow-auto sm:flex-wrap pb-4 sm:pb-0 !px-0 gap-x-[12px]'>
      {categories.map((category, index) => (
        <div key={index} className='flex items-center px-8 py-12 w-fit !p-0'>
          <button
            type='button'
            className={`max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[32px] px-12 py-8 text-title-sm-medium rounded-sm border-border-line bg-state-layer-primary-default text-text-secondary hover:bg-state-layer-secondary-hover hover:fill-text-invert hover:text-text-invert disabled:bg-state-layer-primary-disabled relative w-max border text-sm text-body-md-regular leading-[2px] transition-all duration-300
              ${
                selectedCategoryState === index
                  ? 'max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled h-[32px] px-12 py-8 text-title-sm-medium border-brand rounded-sm bg-state-layer-primary-default fill-text-brand text-text-brand hover:bg-state-layer-brand-hover hover:fill-text-invert hover:text-text-invert focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled relative w-max border text-sm text-body-md-regular leading-[2px] transition-all duration-300'
                  : ''
              }`}
            tabIndex={0}
            onClick={() => handleCategorySelect(index, category)}
          >
            <div className='flex items-center justify-center'>{category}</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
