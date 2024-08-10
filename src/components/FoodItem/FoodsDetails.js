import React from 'react';
import FaWhatsapp from "../../assets/whatsapp (1).png";
const FoodsDetails = ({ item }) => {

  const { image, title, name, price, type } = item;
  return (
    <div>


      <div class=" cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img
          class="w-full h-56 rounded-lg object-cover object-center"
          src={image}
          alt="product"
        />
        <div>
          <div class="my-6 flex items-center justify-between px-4">
            <p class="font-bold text-gray-500">{title}</p>
            <a className="" target="_blank" href="https://wa.me/+8801633077777">
              <img
                src={FaWhatsapp}
                // onClick={gotoBtn}
                className=" float-right w-6 h-5   cursor-pointer"
              />
            </a>
            <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
              {name}
            </p>
           
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodsDetails;