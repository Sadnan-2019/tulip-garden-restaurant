import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
import Nav from "../Nav/Nav";
const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);
  const [currentSlideThree, setCurrentSlideThree] = useState(0);

  const sliderRef = useRef(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurrentSlideTwo(index);
      setCurrentSlideThree(index);
    },

    // afternewChange: (index) => {
    //   setCurrentSlideTwo(index);
    // },
    autoplay: "true",
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="full-width-slider">
        <Slider ref={sliderRef} {...settings} className="">
        <div className=" ">
            <section className="landingone  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 0 ? "animated" : ""
                        }`}
                      >
                 Experience Our Tempting New Lunch Specials 
                        <br class=" lg:block" />
                        at The Tulip Garden Resturent.
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`gupter-regular   bg-green-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 0 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`gupter-regular  slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-[#EE8D1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 0 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        <div className=" ">
            <section className="landingtwo  blog h-auto        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular   slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 1 ? "animated" : ""
                        }`}
                      >
                                   Indulge in the Delectable Food and Beverage Selection 
                        <br class=" lg:block" />
                        at The Tulip Garden Resturent..
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`gupter-regular    bg-green-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 1 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`gupter-regular    slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-[#EE8D1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 1 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        <div className=" ">
            <section className="landingthree  blog        ">
              <div class="  relative z-10 flex flex-col justify-center items-center h-full text-center  ">
                <div class=" ">
                  <div class="   ">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`gupter-regular  slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 2 ? "animated" : ""
                        }`}
                      >
                        Unleash Your Palate with the Steak and 
                        <br class=" lg:block" />
                        Thai Food King.
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`gupter-regular      bg-green-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 2 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`gupter-regular slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-[#EE8D1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 2 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
         
       
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
