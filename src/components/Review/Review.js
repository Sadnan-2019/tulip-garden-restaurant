import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
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
        <div>
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
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white  ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
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
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
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
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
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
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
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
                    src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
                    alt="image"
                    class="h-64 lg:h-full object-cover object-center w-full"
                  />
                </div>

                <div class="w-full lg:w-2/3 p-4">
                  <div class="inline-grid">
                    <p class="work-sans font-semibold text-xl text-white">
                      Segoe cute
                    </p>
                    <p class="raleway text-sm my-4 text-white opacity-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem fuga odit repellendus vero iure alias
                      accusamus ex sed facilis magni aperiam dicta obcaecati,
                      possimus rerum, consequuntur deserunt aut dolor ipsa.
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