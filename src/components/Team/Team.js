import React from "react";
import about1 from "../../assets/For_Signle_Image-removebg-preview.png";
const Team = () => {
  return (
    <div>
      <section class="w-full mx-auto py-10 bg-gradient-to-r from-[#017445] via-[#020629] to-[#EF932A] dark:text-white">
        {/* <div class="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">Services</div> */}
        <h2
          style={{ lineHeight: "120%" }}
          className="animated slide-text text-[25px] lg:text-[40px] font-bold   text-center   text-white "
        >
          {" "}
          OUR TEAM
        </h2>
       

        <section class=" ">
          <div class="max-w-7xl mx-auto   px-4 sm:px-6   lg:px-8">
           
            <div class="mt-16 lg:mt-20">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                   
                  <img
                    class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                    src={about1}
                    alt="billboard image"
                  />
                </div>
                <div>
                  <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                    <p class="text-2xl mt-4 text-white">
                      For over a generation, we've delighted food lovers
                      nationwide with our exceptional Bangla, Thai,
                      Chines,Desserts and Indian cuisine. Our mission has always
                      been to satisfy our customers' palates. Nestled in the
                      heart of Dhaka, our tranquil garden and serene interiors
                      offer an unmatched dining experience. Join us for a
                      memorable meal with your loved ones and savor the moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- col-2 --> */}
      </section>
    </div>
  );
};

export default Team;
