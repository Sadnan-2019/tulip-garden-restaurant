import React from 'react';
import res1 from "../../assets/resturent1.jpg"
import res2 from "../../assets/resturent2.jpg"
import res3 from "../../assets/resturent3.jpg"
import res4 from "../../assets/resturent4.jpg"
import res5 from "../../assets/resturent5.jpg"
import res6 from "../../assets/resturent6.jpg"
import res7 from "../../assets/resturent56.jpg"
import res8 from "../../assets/resturent8.jpg"
// import res9 from "../../assets/resturent9.jpg"
 
const Resturent = () => {
    return (
        <div className='bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A]'>
            
            <h2
          style={{ lineHeight: "120%" }}
          className=" py-7 animated slide-text text-[25px] lg:text-[40px] font-bold   text-center   text-white "
        >
          {" "}
          OUR BEAUTIFUL RESTAURANT
        </h2>

            <div className="grid lg:grid-cols-4 gallery-item py-10 mx-10">
         
         <img src={res1} class=" w-full h-96  " alt="" />
         <img src={res2} class=" w-full h-96   " alt="" />
       
         <img src={res3} class=" w-full h-96  " alt="" />
         <img src={res4} class=" w-full h-96  " alt="" />
        
         <img src={res5} class=" w-full h-96 " alt="" />
         <img src={res6} class=" w-full h-96 " alt="" />
         <img src={res7} class=" w-full h-96  " alt="" />
        
         <img src={res8} class=" w-full h-96  " alt="" />
     </div>
        </div>
    );
};

export default Resturent;