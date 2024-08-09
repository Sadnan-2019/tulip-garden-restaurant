import React, { useEffect, useState } from "react";
import food from "../../assets/food11.png";
import food1 from "../../assets/food3.png";
import food2 from "../../assets/tgrone.png";
import food3 from "../../assets/food4.png";
// import food4 from "../../assets/food4.png"
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import food7 from "../../assets/food9.png";
import food8 from "../../assets/food10.png";
import food9 from "../../assets/food12.png";
import "./Foods.css";
import useFetch from "../hooks/useFetch";
const Foods = () => {
  return (
    <div>
      <div className=" ">
        <div class="main bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A]    ">
          {/* food Menu tab  */}
          <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form method="post">
                  <div className="flex gap-3">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your email"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="your name"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required
                      placeholder="your phone"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      placeholder="your subject"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      required
                      placeholder="your message"
                      className="input input-bordered w-full max-w-xs h-32"
                    ></textarea>
                  </div>

                  <div className="py-5">
                    <input
                      type="submit"
                      className="btn  w-full max-w-x "
                      value="Send message"
                      style={{ backgroundColor: "#453364", color: "white" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="partners-intro--thumb aos-init aos-animate    ">
            <div class="partners-intro--partners">
              <div class="partners-intro--partners-item -pos-1">
                <img
                  class="lazy loaded "
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-1.png"
                  alt=""
                  src={food2}
                  data-was-processed="true"
                />
              </div>
              <div class="partners-intro--partners-item -pos-2">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-2.png"
                  alt=""
                  src={food3}
                  data-was-processed="true"
                />
              </div>
              <div class="partners-intro--partners-item -pos-3">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-3.png"
                  alt=""
                  src={food9}
                  data-was-processed="true"
                />
              </div>
              <div class="partners-intro--partners-item -pos-4">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-4.png"
                  alt=""
                  src={food5}
                  data-was-processed="true"
                />
              </div>
              <div class="partners-intro--partners-item -pos-5">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-5.png"
                  alt=""
                  src={food6}
                  data-was-processed="true"
                />
              </div>
              <div class="partners-intro--partners-item -pos-6">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-6.png"
                  alt=""
                  src={food}
                  data-was-processed="true"
                />
              </div>
              <div class="partners-intro--partners-item -pos-7">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-7.png"
                  alt=""
                  src={food7}
                  data-was-processed="true"
                />
              </div>
              <div class="partners-intro--partners-item -pos-8">
                <img
                  class="lazy loaded"
                  data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-8.png"
                  alt=""
                  src={food8}
                  data-was-processed="true"
                />
              </div>
            </div>
            <div class="partners-intro--logo">
              <img
                class="lazy loaded"
                data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/logo-vector.svg"
                alt=""
                src={food1}
                data-was-processed="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
