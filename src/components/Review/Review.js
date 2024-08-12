import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import reviewone from "../../assets/review1.jpg";
import reviewtwo from "../../assets/review2.jpg";
import reviewtthree from "../../assets/review3.jpg";
import reviewfour from "../../assets/review4.jpg";
import reviewfive from "../../assets/review5.jpg";
import review6 from "../../assets/review6.jpg";
import review7 from "../../assets/review7.png";
import review8 from "../../assets/review8.jpg";
import review9 from "../../assets/review9.jpg";
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

      <h2 data-aos="zoom-out-up"
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
            <SwiperSlide>
              <div class="container mx-auto py-12 px-4">
                <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] rounded-lg border shadow-lg pb-6 lg:pb-0">
                  <div class="w-full lg:w-1/3 lg:p-4">
                    <img
                      src={reviewfive}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                        Zahiruddin Mahmud
                      </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        Food and Staff both were exceptional. Very delicious food and behavior decent. I would highly recommend all to dine at Tulip Garden Restaurant

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
                      src={review6}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                        Harun Shikder
                      </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        Very large space and arrangements
                        for family hangouts, Foods are very delicious & enough portions.

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
                      src={review7}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                        আজহারুল হক                      </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        They have great interior theme. And
                        their lood quality is soo good
                        Chill
                        out
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
                      src={review8}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                        Abara Zawad Sami                  </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        Foods are just yummy. Liked the place and service also, Stylish interior, Fine dining, Healthy options
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
                      src={review9}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                        Sporshomoi Riad                </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        Food was really very good! Alhamdulilah satisfied with their service!thanks!                      </p>
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
                      src={review7}
                      alt="image"
                      class="h-64 lg:h-full object-cover object-center w-full"
                    />
                  </div>

                  <div class="w-full lg:w-2/3 p-4">
                    <div class="inline-grid">
                      <p class="work-sans font-semibold text-xl text-white">
                      AR Rahman Buiya              </p>
                      <p class="raleway text-sm my-4 text-white opacity-75">
                        Alhamdulillah... at last Trishala Valo Kono khabar er restaurant peyesi.. Good qualhty and good quantity.Asha korsi Tulip Garden restaurant tader quality same rakhbe always.
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