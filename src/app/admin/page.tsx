import React from 'react';
import AdminBox from '@/components/AdminComponent/AdminBox';
import AdminHeader from '@/components/AdminComponent/AdminHeader';
import AdminSideBanner from '@/components/AdminComponent/AdminSidebar';
import AdminFooter from '@/components/AdminComponent/AdminFooter';

const AdminPage = () => {
  return (
    <section className='w-full overflow-x-hidden bg-surface-secondary'>
      <section className='relative mx-auto w-full p-24 pb-40 max-w-screen-2xl min-h-screen !py-0'>
        <section
          id='admin-container'
          className='relative w-full xl:min-h-screen grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-32 h-full py-40 lg:py-40'
        >
          <div className='col-span-1 hidden lg:block'></div>
          <div className='col-span-full lg:col-span-5'>
            <div className='flex flex-col space-y-24'>
              <AdminHeader />
              <AdminBox />
              <AdminFooter />
            </div>
          </div>
          <div className='col-span-1 hidden lg:block'></div>
          <AdminSideBanner />
        </section>
      </section>
    </section>
  );
};

export default AdminPage;
