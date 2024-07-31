"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ImgBox from "../ImgBox";
import Button from "../global/Button";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination]);

const NextSlider = () => {

  // useEffect(() => {
  //   const swiper = document.querySelector('.swiper').swiper;
  //   swiper.navigation.init();
  //   swiper.navigation.update();
  // }, []);
  
  return (
    <section className="pt-[100px] pb-[100px] bg-white relative">
      <div className="wrapper max-w-screen-xl mx-auto px-10">
        <div className="header flex justify-between items-center mb-[25px]">
          <div className="text">
            <h3>Mūsų draugai ir partneriai</h3>
          </div>
          <div className="nav-button">
            <ul className="flex justify-between items-center gap-6 w-full">
              <li className="cursor-pointer" id="parenting-prev">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_69_473)">
                    <path
                      d="M5.98286 13.3923L17.2252 24.631C17.7186 25.123 18.5178 25.123 19.0123 24.631C19.5057 24.1389 19.5057 23.3397 19.0123 22.8476L8.66169 12.5007L19.0111 2.15376C19.5044 1.6617 19.5044 0.862459 19.0111 0.36915C18.5178 -0.122912 17.7173 -0.122912 17.224 0.36915L5.98161 11.6078C5.49578 12.0948 5.49578 12.9066 5.98286 13.3923Z"
                      fill="#2E3192"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_69_473">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(25 25) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li className=" cursor-pointer" id="parenting-next">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0171 11.6077L7.77476 0.369047C7.28145 -0.123016 6.48221 -0.123016 5.98766 0.369047C5.49435 0.86111 5.49435 1.66035 5.98766 2.15241L16.3383 12.4993L5.9889 22.8462C5.49559 23.3383 5.49559 24.1375 5.9889 24.6308C6.48221 25.1229 7.2827 25.1229 7.776 24.6308L19.0184 13.3922C19.5042 12.9052 19.5042 12.0934 19.0171 11.6077Z"
                    fill="#2E3192"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className=" relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            navigation={{
              prevEl: "#parenting-prev",
              nextEl: "#parenting-next",
            }}
            breakpoints={{
              414: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {  // Changed to 768px for common breakpoints
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            pagination={{ clickable: true }}
            
            className="my-6"
          >
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="div">
                <div className="logo flex items-center gap-2">
                  <Image
                    src={"/image/dynamic/site_logo.jpg"}
                    height={52}
                    width={44}
                  />
                  <p>Ignalinos rajono savivaldybė</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="icon absolute right-0 top-[-40px]">
        <svg
          width="287"
          height="648"
          viewBox="0 0 287 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" clip-path="url(#clip0_69_109)">
            <path
              d="M205.119 466.536L206.176 467.622L468.378 205.75L467.29 204.663L205.119 466.536Z"
              fill="#AAB3DB"
            />
            <path
              d="M252.622 568.316L253.71 569.372L515.881 307.5L514.823 306.413L252.622 568.316Z"
              fill="#AAB3DB"
            />
            <path
              d="M131.751 6.17576L132.839 5.11933L395.01 266.992L393.953 268.048L131.751 6.17576Z"
              fill="#AAB3DB"
            />
            <path
              d="M0.000724798 124.196L1.08852 123.139L263.26 385.012L262.202 386.068L0.000724798 124.196Z"
              fill="#AAB3DB"
            />
            <path
              d="M150.486 109.193L151.574 108.106L413.745 370.009L412.687 371.065L150.486 109.193Z"
              fill="#AAB3DB"
            />
            <path
              d="M32.3337 528.232L33.4215 529.288L295.593 267.416L294.535 266.359L32.3337 528.232Z"
              fill="#AAB3DB"
            />
            <path
              d="M88.5383 135.935L89.6261 134.878L351.797 396.751L350.74 397.837L88.5383 135.935Z"
              fill="#AAB3DB"
            />
          </g>
          <defs>
            <clipPath id="clip0_69_109">
              <rect
                width="425"
                height="648"
                fill="white"
                transform="translate(425 648) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default NextSlider;
