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
            <section className="landingtwo  blog h-auto            ">
              <div class="  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                <div class="flex w-full mx-auto text-left">
                  <div class="  inline-flex items-center mx-auto align-middle">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter  md:text-5xl lg:text-[40px] lg:max-w-7xl    text-transparent  text-white ${
                          currentSlide === 0 ? "animated" : ""
                        }`}
                      >
                        Map your route to success with us{" "}
                        {/* <br class="hidden lg:block" /> */}
                        {/* the assistance of our services. */}
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`bg-green-900 slide-text items-center block px-5 lg:px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 0 ? "animatedtext" : ""
                            }`}
                          >
                            Explore More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-[#EE8D1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 0 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get opportunities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div>
          <div className=" ">
            <section className="landingthree  blog h-auto        ">
              <div class="  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl  ">
                <div class="flex w-full mx-auto text-left">
                  <div class="  inline-flex items-center mx-auto align-middle">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 1 ? "animated" : ""
                        }`}
                      >
                        Offering comprehensive solutions
                        <br class=" lg:block" />
                        for international & national education needs.
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`bg-green-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 1 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-[#EE8D1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 1 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Opportunities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div>
          <div className=" ">
            <section className="landingthree  blog h-auto        ">
              <div class="  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl  ">
                <div class="flex w-full mx-auto text-left">
                  <div class="  inline-flex items-center mx-auto align-middle">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 2 ? "animated" : ""
                        }`}
                      >
                        Eligibility,Admissions, Visa Processing,
                        <br class=" lg:block" />
                        Interview Prep, accommodation, all in one place.
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`bg-green-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 2 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-[#EE8D1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 2 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Opportunities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div>
          {/* <div className=" ">
            <section className="landingone  blog h-auto        ">
              <div class="  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl  ">
                <div class="flex w-full mx-auto text-left">
                  <div class="  inline-flex items-center mx-auto align-middle">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 2 ? "animated" : ""
                        }`}
                      >
                        Eligibility,Admissions, Visa Processing,
                        <br class=" lg:block" />
                        Interview Prep, accommodation, all in one place.
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`bg-green-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 2 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl  hover:bg-[#EE8D1C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 2 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Opportunities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div> */}

         
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
