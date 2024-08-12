import React from "react";
import res1 from "../../assets/resturent1.jpg";
import res2 from "../../assets/resturent2.jpg";
import res3 from "../../assets/resturent3.jpg";
import res4 from "../../assets/resturent4.jpg";
import res5 from "../../assets/resturent5.jpg";
import res6 from "../../assets/resturent6.jpg";
import res7 from "../../assets/resturent56.jpg";
import res8 from "../../assets/re.jpg";
// import res9 from "../../assets/resturent9.jpg"

const Resturent = () => {
  return (
    <div className="gupter-regular  bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A]">
      <h2 data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        style={{ lineHeight: "120%" }}
        className=" py-7 animated slide-text text-[25px] lg:text-[40px] font-bold   text-center   text-white "
      >
        {" "}
        OUR BEAUTIFUL RESTAURANT
      </h2>

      <div className="grid lg:grid-cols-4 gallery-item py-10 mx-10">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res1}
          class=" w-full h-64  "
          alt=""
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res2}
          class=" w-full h-64  "
          alt=""
        />

        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res3}
          class=" w-full h-64    "
          alt=""
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res4}
          class=" w-full h-64   "
          alt=""
        />

        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res5}
          class=" w-full h-64  "
          alt=""
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res6}
          class=" w-full h-64   "
          alt=""
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res7}
          class=" w-full h-64    "
          alt=""
        />

        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={res8}
          class=" w-full h-64    "
          alt=""
        />
      </div>
    </div>
  );
};

export default Resturent;
