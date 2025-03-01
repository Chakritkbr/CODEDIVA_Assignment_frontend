import React from 'react';

interface RadioGroupProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className='flex w-full flex-col gap-16'>
      <section id='input-label'>
        <label className='text-label-medium text-text-primary'>{label}</label>
        <span className='text-text-error'>*</span>
      </section>
      <div className='w-full'>
        <div className='flex space-x-32 md:space-x-36'>
          <div>
            {options.map((option) => (
              <label
                key={option.value}
                className='flex w-fit cursor-pointer items-center space-x-8'
              >
                <input
                  type='radio'
                  className="border-1 relative size-[16px] cursor-pointer appearance-none rounded-full border border-border-primary hover:bg-state-layer-primary-focussed focus:border-none focus:bg-state-layer-primary-focussed disabled:cursor-not-allowed disabled:border-none disabled:bg-state-layer-primary-disabled before:content[''] before:absolute before:left-1/2 before:top-1/2 before:size-full before:-translate-y-1/2 before:block before:-translate-x-1/2 before:rounded-full before:opacity-0 before:transition-opacity hover:before:[box-shadow:0px_0px_0px_2px_rgba(234,236,240,1)] focus:before:bg-state-layer-primary-focussed hover:before:bg-state-layer-brand-hover hover:before:shadow-3xl checked:!border-none checked:hover:checked:bg-transparent checked:focus:bg-transparent checked:before:bg-background-brand checked:before:opacity-100 checked:focus:before:border checked:focus:before:border-border-brand checked:focus:before:bg-state-layer-brand-focussed checked:disabled:before:bg-state-layer-primary-disabled after:content[''] after:absolute after:left-1/2 after:top-1/2 after:size-[6px] after:-translate-y-1/2 after:block after:-translate-x-1/2 after:rounded-full after:opacity-0 after:transition-opacity disabled:after:bg-icon-secondary checked:after:bg-icon-invert checked:after:opacity-100 checked:focus:after:bg-icon-brand"
                  name={label}
                  value={option.value}
                  checked={selectedValue === option.value}
                  onChange={() => onChange(option.value)}
                />
                <span className='text-label-medium text-text-primary'>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;
