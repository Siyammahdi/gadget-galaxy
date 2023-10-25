
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../../App.css';

// import required modules
import { Scrollbar } from 'swiper/modules';



export default function Slider() {

    AOS.init({
        duration: 800
    });


    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <img className='w-full  h-full' src="https://i.ibb.co/JjNMnb1/New-Project-1.jpg" alt="nai" />
                    <div className='absolute bottom-24 left-56 bg-black bg-opacity-50 p-4 w-3/6 rounded-lg text-white'>
                        <h2 data-aos="fade-down" className='text-5xl mb-5 text-orange-500'>20% Off <span className='text-3xl text-white'>On Xiaomi Products</span></h2>
                        <p data-aos="fade-up" className=''>Save big on Xiaomi products! Enjoy a 20% discount for a limited time. Explore smartphones, laptops, earphones, and more. Shop now with promo code "XIAOMI20" before this incredible offer ends. Don't miss out!</p>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full opacity-40 h-full' src="https://i.ibb.co/6XhKjNQ/50c451fd60a33ae80e8475bf9d051f6e73dc580e.jpg" alt="nai" />
                    <div className='absolute top-56 left-56'>
                        <h2 className='text-5xl mb-5'>Hackenton</h2>
                        <p className=' bg-white bg-opacity-10 p-4 w-3/6 text-gray-300 rounded-lg'>A hackathon is a collaborative and intensive event where individuals or teams of participants, often including programmers, developers, designers, and other tech enthusiasts,often within a limited timeframe, which can range from a few hours to several days.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full opacity-40 h-full' src="https://i.ibb.co/tKz0BRH/Gear-Google-Pixel-6-top.jpg" alt="nai" />
                    <div className='absolute top-56 left-56'>
                        <h2 className='text-5xl mb-5'>Hackathon</h2>
                        <p className=' bg-white bg-opacity-10 p-4 w-3/6 text-gray-300 rounded-lg'>A hackathon is a collaborative and intensive event where individuals or teams of participants, often including programmers, developers, designers, and other tech enthusiasts,often within a limited timeframe, which can range from a few hours to several days.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full opacity-40 h-full' src="https://i.ibb.co/t4bcDMq/Apple-September-2022-launch-hero-geo-jpg-landing-big-2x.jpg" alt="nai" />
                    <div className='absolute top-56 left-56'>
                        <h2 className='text-5xl mb-5'>Hackathon</h2>
                        <p className=' bg-white bg-opacity-10 p-4 w-3/6 text-gray-300 rounded-lg'>A hackathon is a collaborative and intensive event where individuals or teams of participants, often including programmers, developers, designers, and other tech enthusiasts,often within a limited timeframe, which can range from a few hours to several days.</p>
                    </div>
                </SwiperSlide>


                
                
                




            </Swiper>
        </>
    );
}
