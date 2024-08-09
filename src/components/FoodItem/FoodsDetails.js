import React from 'react';

const FoodsDetails = ({item}) => {

     const {image, title,  name, price, type} = item;
     return (
          <div>
               

        <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img
                  class="w-full rounded-lg object-cover object-center"
                  src={image}
                  alt="product"
                />
                <div>
                  <div class="my-6 flex items-center justify-between px-4">
                    <p class="font-bold text-gray-500">{title}</p>
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