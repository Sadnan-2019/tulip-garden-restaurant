import React, { useEffect, useState } from "react";
import food from "../../assets/tulipfood.jpg";
import food1 from "../../assets/tulipfoodone.jpg";
import food2 from "../../assets/tulipfoodtwo.jpg";
import food3 from "../../assets/tulipfoodthree.jpg";
import food4 from "../../assets/tgr3.jpg";
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import useFetch from "../hooks/useFetch";
const FoodItem = () => {
  const [menuTab, setMenuTab] = useState("Wedding");
  const [loading, setLoading] = useState(false);
  const [foods] = useFetch();
  //   console.log(foods)
  //   const [foods, setFoods] = useState([]);

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //food menu tab
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] ">
        <h2
          style={{ lineHeight: "120%" }}
          className=" py-7 animated slide-text text-[25px] lg:text-[40px] font-bold   text-center   text-white "
        >
          {" "}
          OUR MENU
        </h2>
        <div class=" ">
          <div className="  rounded-lg flex items-center justify-center space-x-6">
             <p
              className={
                menuTab === "Bangla"
                  ? "active_menu_tab poppins cursor-pointer text-white rounded-full bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] font-bold    px-4 py-2   select-none"
                  : "menu_tab poppins cursor-pointer font-bold text-white"
              }
              onClick={() => handleMenuTabs("Bangla")}
            >
              BANGLA
            </p>
            <p
              className={
                menuTab === "Thai"
                  ? "active_menu_tab poppins cursor-pointer text-white  bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] font-bold  rounded-full px-4 py-2   select-none"
                  : "menu_tab poppins cursor-pointer font-bold text-white"
              }
              onClick={() => handleMenuTabs("Thai")}
            >
              THAI
            </p>
            <p
              className={
                menuTab === "Indian"
                  ? "active_menu_tab poppins cursor-pointer text-white  bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] font-bold rounded-full px-4 py-2 select-none"
                  : "menu_tab poppins cursor-pointer font-bold text-white"
              }
              onClick={() => handleMenuTabs("Indian")}
            >
              INDIAN
            </p>
            <p
              className={
                menuTab === "Chines"
                  ? "active_menu_tab poppins cursor-pointer   text-white  bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] font-bold  rounded-full px-4 py-2   select-none"
                  : "menu_tab poppins cursor-pointer font-bold text-white"
              }
              onClick={() => handleMenuTabs("Chines")}
            >
              CHINES
            </p>
            <p
              className={
                menuTab === "Desserts"
                  ? "active_menu_tab poppins cursor-pointer   text-white  bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A] font-bold  rounded-full px-4 py-2   select-none"
                  : "menu_tab poppins cursor-pointer font-bold text-white"
              }
              onClick={() => handleMenuTabs("Desserts")}
            >
              DESSERTS
            </p>
          </div>

          <div class=" ">
            <div class="py-10  grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3   items-center justify-items-center  ">
              <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img
                  class="w-full rounded-lg object-cover object-center"
                  src={food}
                  alt="product"
                />
                <div>
                  <div class="my-6 flex items-center justify-between px-4">
                    <p class="font-bold text-gray-500">Product Name</p>
                    <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                      $120
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img
                  class="w-full rounded-lg object-cover object-center"
                  src={food1}
                  alt="product"
                />
                <div>
                  <div class="my-6 flex items-center justify-between px-4">
                    <p class="font-bold text-gray-500">Product Name</p>
                    <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                      $120
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img
                  class="w-full rounded-lg object-cover object-center"
                  src={food2}
                  alt="product"
                />
                <div>
                  <div class="my-6 flex items-center justify-between px-4">
                    <p class="font-bold text-gray-500">Product Name</p>
                    <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                      $120
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img
                  class="w-full rounded-lg object-cover object-center"
                  src={food3}
                  alt="product"
                />
                <div>
                  <div class="my-6 flex items-center justify-between px-4">
                    <p class="font-bold text-gray-500">Product Name</p>
                    <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                      $120
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img
                  class="w-full rounded-lg object-cover object-center"
                  src={food4}
                  alt="product"
                />
                <div>
                  <div class="my-6 flex items-center justify-between px-4">
                    <p class="font-bold text-gray-500">Product Name</p>
                    <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                      $120
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
