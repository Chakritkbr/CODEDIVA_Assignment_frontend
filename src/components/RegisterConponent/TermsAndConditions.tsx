import React from 'react';

interface TermsAndConditionsProps {
  termsAccepted: boolean;
  setTermsAccepted: (value: boolean) => void;
  setTermsOpen: (value: boolean) => void;
  setPDPAOpen: (value: boolean) => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  termsAccepted,
  setTermsAccepted,
  setTermsOpen,
  setPDPAOpen,
}) => {
  return (
    <div className='flex w-full flex-col space-y-16 border-t border-t-border-primary pt-16 text-body-md-regular'>
      <div className='inline-flex items-center space-x-8'>
        <label
          className='relative flex cursor-pointer items-center'
          htmlFor='terms-and-conditions-checkbox'
        >
          <input
            type='checkbox'
            className='peer relative size-[20px] cursor-pointer appearance-none rounded-xs border border-border-primary transition-colors hover:bg-background-secondary focus:border-border-invert focus:bg-state-layer-primary-focussed disabled:cursor-not-allowed disabled:border-0 disabled:bg-state-layer-primary-disabled checked:border-none checked:bg-background-brand checked:hover:bg-background-brand checked:hover:outline checked:hover:outline-1 checked:hover:outline-border-primary checked:focus:border-solid checked:focus:border-border-brand checked:focus:bg-state-layer-brand-focussed checked:disabled:border-none checked:disabled:bg-state-layer-primary-disabled checked:disabled:outline-none flex flex-row'
            id='terms-and-conditions-checkbox'
            required
            defaultChecked
            defaultValue='true'
          />
          <span className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity text-icon-invert peer-checked:text-icon-invert peer-checked:opacity-100 peer-checked:peer-focus:text-icon-brand peer-checked:peer-disabled:text-icon-disabled'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-[14px]'
              viewBox='0 0 20 20'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth={1}
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </label>
        <label
          className='cursor-pointer leading-[22px]'
          htmlFor='terms-and-conditions-checkbox'
        >
          <span className='w-full'>
            ฉันได้อ่านและยอมรับ{' '}
            <span
              className='privacy text-text-link underline underline-offset-[3px]'
              onClick={() => setTermsOpen(true)}
            >
              ข้อกำหนดการใช้งาน
            </span>{' '}
            และ{' '}
            <span
              className='privacy text-text-link underline underline-offset-[3px]'
              onClick={() => setTermsOpen(true)}
            >
              นโยบายความเป็นส่วนตัว
            </span>{' '}
            ของสเวนเซ่นส์
          </span>
        </label>
      </div>
      <div className='inline-flex items-center space-x-8'>
        <label
          className='relative flex cursor-pointer items-center'
          htmlFor='received-news-checkbox'
        >
          <input
            type='checkbox'
            className='peer relative size-[20px] cursor-pointer appearance-none rounded-xs border border-border-primary transition-colors hover:bg-background-secondary focus:border-border-invert focus:bg-state-layer-primary-focussed disabled:cursor-not-allowed disabled:border-0 disabled:bg-state-layer-primary-disabled checked:border-none checked:bg-background-brand checked:hover:bg-background-brand checked:hover:outline checked:hover:outline-1 checked:hover:outline-border-primary checked:focus:border-solid checked:focus:border-border-brand checked:focus:bg-state-layer-brand-focussed checked:disabled:border-none checked:disabled:bg-state-layer-primary-disabled checked:disabled:outline-none flex flex-row'
            id='received-news-checkbox'
            defaultValue='false'
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <span className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity text-icon-invert peer-checked:text-icon-invert peer-checked:opacity-100 peer-checked:peer-focus:text-icon-brand peer-checked:peer-disabled:text-icon-disabled'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-[14px]'
              viewBox='0 0 20 20'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth={1}
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </label>
        <label
          className='cursor-pointer leading-[22px]'
          htmlFor='received-news-checkbox'
        >
          ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และ
          <span
            className='privacy text-text-link underline underline-offset-[3px]'
            onClick={() => setPDPAOpen(true)}
          >
            บริษัทในเครือ
          </span>{' '}
          โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง{' '}
          <span
            className='privacy text-text-link underline underline-offset-[3px]'
            onClick={() => setTermsOpen(true)}
          >
            นโยบายความเป็นส่วนตัว
          </span>{' '}
          เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
        </label>
      </div>
    </div>
  );
};

export default TermsAndConditions;
