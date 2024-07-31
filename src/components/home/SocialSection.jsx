import Image from "next/image";
import Button from "../global/Button";

export default function SocialSection() {
  return (
    <section className="bg-white">
      <div className="social max-w-full px-10 md:px-20 pt-[120px]">
        <div className="header grid grid-cols-12 mb-[60px]">
          <div className="left flex flex-col justify-between gap-[22px] col-span-12 mb-[10px]   md:col-span-5 ">
            <h3 className="leading-none">Apie mus</h3>
            <Button bg="bg-[#2E3192]" svg text={"Daugiau"} />
          </div>
          <div className="right col-span-12 md:col-span-7">
            <p>
              Dabartinis Ignalinos rajono kultūros centras puoselėja, skleidžia
              įvairias kultūros sritis ir žanrus. Mūsų tikslas – puoselėti
              etninę kultūrą, mėgėjų meną, inicijuoti, rengti ir įgyvendinti
              kultūrinius, meninius, edukacinius projektus, plėtoti šviečiamąją
              (edukacinę), pramoginę veiklą, tenkinti bendruomenės kultūrinius
              poreikius, organizuoti profesionalaus meno sklaidą. 
            </p>
          </div>
        </div>
      </div>

      <div className="image relative">
        <Image src={"/image/dynamic/social.jpg"} height={550} width={1440} />

        <div className=" max-w-screen-xl mx-auto px-10">
          <div className="image-bottom w-[88vw] custom-gradient grid grid-cols-1 md:grid-cols-3 rounded-[10px]   ">
            <div className="single md:py-[62px] py-[20px] md:px-[87px] px-[20px]  border-right flex flex-col items-center">
              <div className="text">
                <h4>Sekite mūsų naujienas</h4>
              </div>
              <div className="icon pt-[27px] m-auto">
                <svg
                  width="21"
                  height="37"
                  viewBox="0 0 21 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9714 37H7.04629C6.05662 37 5.25155 36.1949 5.25155 35.2052V21.8406H1.79474C0.805065 21.8406 0 21.0352 0 20.0458V14.319C0 13.3293 0.805065 12.5243 1.79474 12.5243H5.25155V9.65649C5.25155 6.81301 6.14441 4.39381 7.83329 2.66084C9.5298 0.919975 11.9007 0 14.6896 0L19.2084 0.00733944C20.1963 0.0090332 21 0.814117 21 1.80212V7.11929C21 8.10899 20.1952 8.91408 19.2058 8.91408L16.1634 8.91521C15.2355 8.91521 14.9993 9.10123 14.9487 9.15826C14.8655 9.25282 14.7664 9.52015 14.7664 10.2583V12.524H18.9772C19.2942 12.524 19.6013 12.6022 19.8652 12.7495C20.4346 13.0677 20.7886 13.6692 20.7886 14.3193L20.7863 20.0461C20.7863 21.0352 19.9812 21.8403 18.9916 21.8403H14.7664V35.2052C14.7664 36.1949 13.961 37 12.9714 37ZM7.4206 34.8309H12.5971V20.8695C12.5971 20.2087 13.1348 19.6712 13.7953 19.6712H18.6173L18.6192 14.6934H13.7951C13.1345 14.6934 12.5971 14.1559 12.5971 13.495V10.2583C12.5971 9.4109 12.6832 8.44717 13.3228 7.72282C14.0957 6.84717 15.3137 6.74611 16.1628 6.74611L18.831 6.74498V2.17587L14.6879 2.1691C10.2059 2.1691 7.4206 5.03827 7.4206 9.65649V13.495C7.4206 14.1556 6.88314 14.6934 6.2226 14.6934H2.16905V19.6712H6.2226C6.88314 19.6712 7.4206 20.2087 7.4206 20.8695V34.8309Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="single md:py-[62px] py-[20px] md:px-[87px] px-[20px] border-right flex flex-col items-center">
              <div className="text">
                <h4>Bendraukime Instagram</h4>
              </div>
              <div className="icon pt-[27px] m-auto">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_69_329)">
                    <path
                      d="M27.7503 0H9.25075C4.16383 0 0.000976562 4.16285 0.000976562 9.24977V27.7502C0.000976562 32.8358 4.16383 37 9.25075 37H27.7503C32.8372 37 37.0001 32.8358 37.0001 27.7502V9.24977C37.0001 4.16285 32.8372 0 27.7503 0ZM33.9167 27.7502C33.9167 31.1495 31.1515 33.9166 27.7503 33.9166H9.25075C5.85101 33.9166 3.08438 31.1495 3.08438 27.7502V9.24977C3.08438 5.84958 5.85101 3.08341 9.25075 3.08341H27.7503C31.1515 3.08341 33.9167 5.84958 33.9167 9.24977V27.7502Z"
                      fill="white"
                    />
                    <path
                      d="M28.5219 10.7913C29.799 10.7913 30.8344 9.75595 30.8344 8.47883C30.8344 7.2017 29.799 6.16638 28.5219 6.16638C27.2448 6.16638 26.2095 7.2017 26.2095 8.47883C26.2095 9.75595 27.2448 10.7913 28.5219 10.7913Z"
                      fill="white"
                    />
                    <path
                      d="M18.4998 9.24976C13.3902 9.24976 9.25 13.3904 9.25 18.4995C9.25 23.6068 13.3902 27.7502 18.4998 27.7502C23.6079 27.7502 27.7495 23.6068 27.7495 18.4995C27.7495 13.3904 23.6079 9.24976 18.4998 9.24976ZM18.4998 24.6668C15.0944 24.6668 12.3334 21.9058 12.3334 18.4995C12.3334 15.0933 15.0944 12.3332 18.4998 12.3332C21.9051 12.3332 24.6661 15.0933 24.6661 18.4995C24.6661 21.9058 21.9051 24.6668 18.4998 24.6668Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_69_329">
                      <rect width="37" height="37" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="single md:py-[62px] py-[20px] md:px-[87px] px-[20px] border-right flex flex-col items-center">
              <div className="text">
                <h4>Video įrašai</h4>
              </div>
              <div className="icon pt-[27px] m-auto">
                <svg
                  width="46"
                  height="36"
                  viewBox="0 0 46 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.05 9.7811C18.0974 9.21185 16.8765 9.89993 16.8765 11.0154V24.4321C16.8765 25.5534 18.0993 26.2319 19.05 25.6684L30.2989 18.9696C31.2342 18.4118 31.2323 17.0587 30.3008 16.499L19.05 9.7811ZM19.7515 21.904V13.5474L26.7569 17.7314L19.7515 21.904Z"
                    fill="white"
                  />
                  <path
                    d="M38.1493 0.993312C29.2311 -0.331104 16.7728 -0.331104 7.85067 0.993312C4.28183 1.52231 1.47008 4.32448 0.85675 7.96231C-0.285583 14.7147 -0.285583 20.735 0.85675 27.4855C1.47008 31.1252 4.28183 33.9255 7.85067 34.4545C12.3203 35.1176 17.6717 35.4492 23.0211 35.4492C28.3609 35.4492 33.6988 35.1196 38.1512 34.4564C41.7163 33.9274 44.5261 31.1271 45.1432 27.4874C46.2856 20.735 46.2856 14.7128 45.1432 7.9604C44.5299 4.32448 41.7182 1.52231 38.1493 0.993312ZM42.3085 27.0082C41.9002 29.4156 40.0602 31.2671 37.7277 31.6121C29.0682 32.8981 16.9548 32.8981 8.27233 31.6101C5.93783 31.2632 4.09592 29.4136 3.68958 27.0063C2.58942 20.5011 2.58942 14.9486 3.68958 8.43956C4.09783 6.03223 5.93783 4.18456 8.27425 3.83573C12.6097 3.19365 17.8058 2.87165 22.9981 2.87165C28.1942 2.87165 33.3903 3.19365 37.7257 3.83573C40.0602 4.18265 41.9022 6.03223 42.3085 8.43956C43.4087 14.9486 43.4087 20.5011 42.3085 27.0082Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
