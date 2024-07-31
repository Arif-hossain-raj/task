"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ImgBox from "../ImgBox";
import Button from "../global/Button";

SwiperCore.use([Navigation, Pagination]);

const SwiperSlider = () => {

  return (
    <section className="pt-[100px] pb-[100px] bg-white">
      <div className="wrapper max-w-full px-10 md:px-20">
        <div className="header flex justify-between items-center mb-25px">
          <div className="text">
            <h3>Naujienos</h3>
          </div>
          <div className="button">
            <Button text={"Visos naujienos"} bg="bg-[#2E3192]" svg />
          </div>
        </div>
        <div className="relative ">
          <div className="nav-button absolute top-1/2 z-10 w-full">
            <ul className="flex justify-between w-full">
              <li className="translate-x-[-30px] cursor-pointer" id="parenting-prev" >
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
              <li className="translate-x-[25px] cursor-pointer"  id="parenting-next">
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
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation={{
                prevEl: '#parenting-prev',
                nextEl: '#parenting-next',
              }}
            pagination={{ clickable: true }}
            breakpoints={{
              414: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {  // Changed to 768px for common breakpoints
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="my-6"
          >
            <SwiperSlide>
              <ImgBox
                image={"/image/dynamic/2.jpg"}
                text={"Dokumentinio filmo „Nugalėti Galijotą” peržiūra"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <ImgBox
                image={"/image/dynamic/3.jpg"}
                text={"Dokumentinio filmo „Nugalėti Galijotą” peržiūra"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImgBox
                image={"/image/dynamic/4.jpg"}
                text={"Dokumentinio filmo „Nugalėti Galijotą” peržiūra"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImgBox
                image={"/image/dynamic/2.jpg"}
                text={"Dokumentinio filmo „Nugalėti Galijotą” peržiūra"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwiperSlider;
