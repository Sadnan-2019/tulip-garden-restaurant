import React from 'react';
import Marquee from 'react-fast-marquee';
import food1 from "../../assets/tmc.png";
import food2 from "../../assets/rose.png";
import food3 from "../../assets/client1.jpg";
// import food4 from "../../assets/food4.png"
import food5 from "../../assets/clients2.png";
import food6 from "../../assets/clients3.png";
import food7 from "../../assets/clients4.jpg";
import food8 from "../../assets/clients5.png";
import food9 from "../../assets/clients6.jpg";
import food10 from "../../assets/clients7.png";
const Clients = () => {
    return (
        <div className='gupter-regular  '>
            <h2
        style={{ lineHeight: "120%" }}
        className="py-8 animated slide-text text-[25px] lg:text-[40px] font-bold   text-center mt-8   text-transparent bg-clip-text bg-gradient-to-r from-[#0b281c] to-[#e97f06] "
      >
        {" "}
       OUR HAPPY  CLIENTS
      </h2>
            <Marquee
                gradientColor={false}
                speed={80}
                gradient={false}

            >
                <div class=" ">
                    {/* <Marquee   gradientColor={false} speed={80} gradient={false} play={true}> */}
                    <div class="   ">
                        <div class="   py-5    gap-5 flex     align-center justify-center    rounded-xl">
                            <img
                                alt=""
                                class="h-24 w-44   p-2   rounded  "
                                src={food1}
                            />

                            <img
                                alt=""
                                class="h-24 w-44  p-2   rounded  "
                                src={food2}
                            />
                            <img
                                alt=""
                                class="h-24 w-44  p-2   rounded  "
                                src={food3}
                            />

                            <img
                                alt=""
                                class="h-24 w-44  p-2   rounded   "
                                src={food9}
                            />
                            <img
                                alt=""
                                class="h-24 w-44   p-2  rounded  "
                                src={food5}
                            />
                            <img
                                alt=""
                                class="h-24 w-44   p-2  rounded  "
                                src={food6}
                            />

                            <img
                                alt=""
                                class="h-24 w-44   p-2  rounded  "
                                src={food7}
                            />
                            <img alt="" class="h-24 w-44   p-2  rounded  " src={food8} />
                            <img alt="" class="h-24 w-44   p-2  rounded  " src={food10} />
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Clients;