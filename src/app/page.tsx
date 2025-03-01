import Banner from '@/components/Landing/Banner';
import Delivery from '@/components/Landing/Delivery';
import DeliveryMenu from '@/components/Landing/DeliveryMenu';
import PromotionProduct from '@/components/Landing/PromotionProduct';

export default function Home() {
  return (
    <section className='h-max w-full md:min-h-[calc(100vh-110px-88px)]'>
      <section className='container m-auto max-w-[1200px] px-24 inner-container h-full space-y-24 py-40'>
        <Delivery />
        <Banner />
        <div className='flex flex-col gap-24'>
          <PromotionProduct />
          <div className='flex items-center justify-between  '>
            <div className='flex text-title-md-bold sm:text-headline-medium 2xl:text-headline-large p-10'>
              เมนูจัดส่ง
            </div>
          </div>
          <DeliveryMenu />
        </div>
      </section>
    </section>
  );
}
