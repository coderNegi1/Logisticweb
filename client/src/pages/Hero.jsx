import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Replace these with your actual images
import Bg1 from '../assets/bg-1.jpg';
import Bg2 from '../assets/bg-1.jpg';
import Bg3 from '../assets/bg-1.jpg';

const slides = [
  {
    id: 1,
    image: Bg1,
    heading: 'Transport & Logistics Solution',
    title: '#1 Place For Your Logistics Solution',
    description:
      'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
  },
  {
    id: 2,
    image: Bg2,
    heading: 'Reliable Freight Services',
    title: 'Delivering Trust, Building Logistics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan fermentum turpis.',
  },
  {
    id: 3,
    image: Bg3,
    heading: 'Global Coverage',
    title: 'Moving Your Business Everywhere',
    description:
      'We offer global logistics solutions with timely delivery and full support across the globe.',
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[85vh] mb-10"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-[85vh] bg-cover bg-center"
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
                  <p className="text-white text-lg mb-6">{slide.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="bg-primary text-white py-3 px-8  hover:bg-primary-dark transition"
                    >
                      Read More
                    </a>
                    <a
                      href="#"
                      className="bg-white text-gray-800 py-3 px-8  hover:bg-gray-200 transition"
                    >
                      Free Quote
                    </a>
                  </div>
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

