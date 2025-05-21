import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Replace these with your actual images
import Air from '../assets/Air2.avif';
import Sea from '../assets/Sea1.avif';
import Bg3 from '../assets/cargo3.jpg';

const slides = [
  {
    id: 1,
    image: Air,
    heading: 'Transport & Logistics Solution',
    title: '#1 Place For Your Logistics Solution',
    description: `Trusted by businesses worldwide to move freight with care.
Expert freight management across air, sea, and land`

  },
  {
    id: 2,
    image: Sea,
    heading: 'Reliable Freight Services',
    title: 'Delivering Trust, Building Logistics',
    description: `Real-time tracking. Seamless communication. Smarter freight.
Digital tools. Human expertise. Superior results.`,

  },
  {
    id: 3,
    image: Bg3,
    heading: 'Global Coverage',
    title: 'Moving Your Business Everywhere',
    description: `Connecting continents through seamless cargo solutions.
Shipping made simple — anywhere in the world.`,
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-[85vh] mb-10"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-full bg-cover bg-top"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/60 flex items-center lg:p-30 md:p-10 ">
              <div className="container mx-auto px-6 mt-40 lg:mt-0">
                <div className="max-w-3xl">
                  <h5 className="text-white uppercase text-lg mb-3">
                    {slide.heading}
                  </h5>
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {slide.title.split(' ').map((word, i) =>
                      word === 'Logistics' ? (
                        <span key={i} className="text-primary">{word} </span>
                      ) : (
                        word + ' '
                      )
                    )}
                  </h1>
                  <p className="text-white text-lg mb-6 whitespace-pre-line">
                    {slide.description}
                  </p>

                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

