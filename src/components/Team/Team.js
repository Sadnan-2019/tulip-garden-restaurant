import React from 'react';
import about1 from "../../assets/For_Signle_Image-removebg-preview.png"
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
        <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto sm:flex md:flex lg:flex xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div class="lg:w-[50%] xs:w-full">
            <img
              class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
              src={about1}
              alt="billboard image"
            />
          </div>
          <div class="lg:w-[50%] sm:w-full xs:w-full   dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            {/* <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur
            </h2> */}
            <p class="text-2xl mt-4 text-white">
              Edu Solutions is renowned as a premier consultancy firm in Bangladesh,
              dedicated to facilitating study opportunities primarily in
               UK, USA, Canada,Dubai,Newzeland,Romania and Australia. Serving as a comprehensive
              platform, EduCare BD provides students with information on
              admissions, scholarships, and financial aid across 160+
              universities worldwide. Committed to maintaining exceptional
              quality, Edu Solutions  offers unwavering support to students,
              recognizing the significance of their future decisions. With a
              trusted reputation in Bangladesh, Edu Solutions  boasts a dedicated
              team providing round-the-clock assistance, with  in Dhaka.
           
            </p>
          </div>
        </div>
        {/* <!-- col-2 --> */}
       
      </section> 
        </div>
    );
};

export default Team;