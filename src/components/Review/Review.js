import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import reviewone from "../../assets/review1.jpg";
import reviewtwo from "../../assets/review2.jpg";
import reviewtthree from "../../assets/review3.jpg";
import reviewfour from "../../assets/review4.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
// import './Slider.css'
import "./Review.css";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
const Review = () => {
  return (
    <div className='gupter-regular '>

      <h2
        style={{ lineHeight: "120%" }}
        className="animated slide-text text-[25px] lg:text-[40px] font-bold   text-center mt-8   text-transparent bg-clip-text bg-gradient-to-r from-[#0b281c] to-[#e97f06] "
      >
        {" "}
        CUSTOMER REVIEW
      </h2>
      <div className="h-scren  mb-10    ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          navigation={true}
          EffectCoverflow={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-4 py-12 px-12 justify-items-center items-center md:px-12 lg:px-20 "
        >
          <div className=" ">
            <SwiperSlide>
              <div class="container mx-auto p-10  px-4">
                <div class="bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A]   inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex  rounded-lg border shadow-lg pb-6 lg:pb-0">
                  <div class="w-full lg:w-1/3 lg:p-4">
                    <img
                      src={reviewone}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                        Akm Karamat Hossen Akondo
                      </p>
                      <p class="raleway text-sm my-4 text-white  ">
                        Me & My Wife go there today ,& took a set menu fried rice, chicken fry, vegetable, Drinks really it was delicious food, & great taste. Behaviour also good.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="container mx-auto py-12 px-4">
                <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] rounded-lg border shadow-lg pb-6 lg:pb-0">
                  <div class="w-full lg:w-1/3 lg:p-4">
                    <img
                      src={reviewtthree}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                        HCAH Mahmud
                      </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        I think this cafe is best for set menu and coffee.Their behave also remarkable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="container mx-auto py-12 px-4">
                <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] rounded-lg border shadow-lg pb-6 lg:pb-0">
                  <div class="w-full lg:w-1/3 lg:p-4">
                    <img
                      src={reviewtwo}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                      Nahid Hasan
                      </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        One of best restaurant in Maymanshing .
                        Large menu
                        Great food
                        Healthy options
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="container mx-auto py-12 px-4">
                <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] rounded-lg border shadow-lg pb-6 lg:pb-0">
                  <div class="w-full lg:w-1/3 lg:p-4">
                    <img
                      src={reviewfour}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                      Biplob Nebil
                      </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                      Really Nice environment, very good food and service

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;