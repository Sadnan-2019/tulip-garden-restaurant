import React from 'react';
import teacher from "../../assets/landingfour.jpg";
import "./Video.css"
const Video = () => {
    return (
        <div>
            <div className="py-10 gupter-regular ">
      <div className="py-10  ">
        <div class="  flex   flex-col md:flex-row  justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16    px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div data-aos="fade-right" class="sm:w-1/2 relative">
            <div class="bg-[#08513D] rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
            <h1 class="font-bold text-3xl relative text-justify  text-[#08513D]  ">
              Everything you can do in a Tulip Garden Resturent,{" "}
              <span class="  text-[#08513D] ">
                you can do with your family,seminar,party.
              </span>
            </h1>
            <br></br>
      
            <p class=" text-[#08513D] text-2xl">
              Tulip Garden Resturent is a fully equipped and modern Resturent
               that you might be thinking about. It was established in 2019.
               Tulip Garden Resturent has three large hall rooms, in total
              11,500 sqft, where you can decorate as you dream of your program.
              You can arrange a 1200+ people program at a time.
            </p>
            {/* <a href="" class="underline text-[#08513D] ">
              Learn More
            </a> */}
          </div>
          <div data-aos="  " class="sm:w-1/2 relative mt-10 sm:mt-0">
            <div class="floating bg-[#08513D] w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
            <img data-aos="zoom-out-up" class="rounded-xl z-40 relative" src={teacher} alt="" />
            <button class="bg-[#08513D]  w-14 h-14 animate-pulse rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none   transition hover:scale-110 duration-300 ease-in-out z-50">
              <svg
                class="w-5 h-5 ml-1"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                  fill="#23BDEE"
                />
              </svg>
            </button>
            <div class="bg-[#EE8D1C] w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Video;