import React from 'react';

const LanguageDropdown = () => {
  return (
    <>
      <div
        data-radix-popper-content-wrapper
        dir='ltr'
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          transform: 'translate(1411px, 68px)',
          minWidth: 'max-content',
          zIndex: 50,
        }}
      >
        <div
          data-side='bottom'
          data-align='center'
          role='menu'
          aria-orientation='vertical'
          data-state='open'
          data-radix-menu-content
          dir='ltr'
          id='radix-:r1:'
          aria-labelledby='radix-:r0:'
          className='z-50 min-w-[128px] overflow-hidden rounded-sm bg-state-layer-primary-default px-4 py-8 text-text-primary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
          tabIndex={-1}
          data-orientation='vertical'
          style={{ outline: 'none', pointerEvents: 'auto' }}
        >
          <div role='group'>
            <a
              hrefLang='en'
              aria-label='change-locale-button'
              className=' h-[40px] select-none  px-8 py-4 text-label-medium text-text-primary outline-none transition-colors focus:bg-state-layer-primary-hovered focus:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 flex w-full items-center justify-center text-label-medium uppercase relative cursor-pointer p-2'
              role='menuitem'
              tabIndex={-1}
              data-orientation='vertical'
              data-radix-collection-item
              href='/en'
            >
              en
            </a>
            <a
              aria-label='change-locale-button'
              className=' h-[40px]  select-none  px-8 py-4 text-label-medium text-text-primary outline-none transition-colors focus:bg-state-layer-primary-hovered focus:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 flex w-full items-center justify-center text-label-medium uppercase relative cursor-pointer p-2 bg-state-layer-brand-enabled focus:bg-state-layer-brand-enabled'
              role='menuitem'
              tabIndex={-1}
              data-orientation='vertical'
              data-radix-collection-item
              href='/th'
            >
              th
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageDropdown;
