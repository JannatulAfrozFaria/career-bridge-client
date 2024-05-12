import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../../src/styles.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

//images
import banner1 from '../../assets/banner2.jpg'
import banner2 from '../../assets/banner2a.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.png'
import banner5 from '../../assets/banner5a.png'
import banner6 from '../../assets/banner6.jpg'
import banner7 from '../../assets/banner7.jpg'
import banner8 from '../../assets/banner8.jpg'

const Banner = () => {
    return (
        <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'> Explore Job Openings Tailored Just for You!</h2>
                <p>Transform your career trajectory with our comprehensive job search platform.</p>
           </div>
            <img className='h-full' src={banner1} />
          </SwiperSlide>
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'> Your Next Career Move Starts Here!</h2>
                <p>Embark on a journey towards your dream career with our assistance.</p>
           </div>
            <img className='h-full' src={banner2} />
          </SwiperSlide>
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'>Navigate Your Career Path Here Now! </h2>
                <p>Unleash your potential and find the perfect job effortlessly with us.</p>
           </div>
            <img className='h-full' src={banner3} />
          </SwiperSlide>
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'> Our Dream Job Awaits. Start Searching!</h2>
                <p>Empower yourself with the tools you need to land your dream job.</p>
           </div>
            <img className='h-full' src={banner4} />
          </SwiperSlide>
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'> Your Ideal Job is Just a Click Away!</h2>
                <p>Navigate the job market successfully with our intuitive job-seeking platform.</p>
           </div>
            <img className='h-full' src={banner5}  />
          </SwiperSlide>
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'> Unlock Your Dream Career!</h2>
                <p>Discover exciting career opportunities tailored just for you, right here.</p>
           </div>
            <img className='h-full' src={banner6} />
          </SwiperSlide>
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'>Start Your Job Search Journey Here!</h2>
                <p>Join thousands of successful job seekers who found their dream jobs.</p>
           </div>
            <img className='h-full' src={banner7}  />
          </SwiperSlide>
          <SwiperSlide className='relative'>
           <div className='absolute top-20 px-10 text-white'>
                <h2 className=' text-2xl'>Jumpstart Your Career Search Today!</h2>
                <p>Find job satisfaction and fulfillment with our extensive job listings.</p>
           </div>
            <img className='h-full' src={banner8}  />
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Banner;