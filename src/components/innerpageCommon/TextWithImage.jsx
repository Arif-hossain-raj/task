"use client";
import Image from "next/image";

export default function TextWithImage({
  textWithImage,
  textWithDes,
  pathanme,
}) {

  let isKole = "";
  if (pathanme === "/kolektyvas") {
    isKole = true;
  } else {
    isKole = false;
  }

  console.log(isKole);

  return (
    <div className="text-with-image grid grid-cols-2 gap-[75px]">
      {isKole ? (
        <div className="content ">
          <p className="">{textWithDes && textWithDes}</p>
          <div className="down   mt-[40px] flex items-center gap-[30px]">
            <div className="left-image ">
              <Image src={"/image/dynamic/12.jpg"} height={210} width={150} />
            </div>

            <div className="content">
              <h5 className="mb-[8px] leading-[26px]">
                Frančeska Skačkauskienė
              </h5>
              <p className="mb-[20px]">Direktorė</p>

              <div className="logotext mb-[12px] flex items-center gap-[13px] ">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0703 10.9637C16.7344 11.2625 17.0996 11.993 16.9336 12.6902L16.2363 15.8113C16.0703 16.5086 15.4727 16.9734 14.7422 16.9734C6.60742 16.9734 0 10.366 0 2.23125C0 1.50078 0.464844 0.903127 1.16211 0.770314L4.2832 0.0398454C4.98047 -0.12617 5.71094 0.239064 6.00977 0.903127L7.4375 4.28985C7.70312 4.8875 7.53711 5.61797 7.03906 6.04961L5.67773 7.14531C6.64062 8.87188 8.10156 10.3328 9.82812 11.2957L10.957 9.96758C11.3555 9.43633 12.0859 9.27031 12.6836 9.50274L16.0703 10.9637ZM15.1738 15.5789L15.9043 12.4578C15.9707 12.2254 15.8379 12.0262 15.6387 11.9266L12.2852 10.4988C12.0859 10.4324 11.8867 10.4656 11.7539 10.6316L10.3926 12.2918C10.2266 12.491 9.96094 12.5574 9.76172 12.4246C7.50391 11.3289 5.64453 9.46953 4.54883 7.24492C4.41602 7.0125 4.48242 6.74688 4.68164 6.58086L6.3418 5.21953C6.50781 5.08672 6.54102 4.8875 6.47461 4.68828L5.04688 1.33477C4.94727 1.16875 4.78125 1.03594 4.61523 1.03594C4.58203 1.03594 4.54883 1.06914 4.51562 1.06914L1.39453 1.79961C1.19531 1.83281 1.0625 1.99883 1.0625 2.23125C1.0625 9.76836 7.20508 15.9441 14.7422 15.9441C14.9746 15.9441 15.1406 15.7781 15.1738 15.5789Z"
                    fill="#2E3192"
                  />
                </svg>
                <h5>+370 600 06 076</h5>
              </div>
              <div className="logotext mb-[12px] flex items-center gap-[13px] ">
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.875 0C16.0371 0 17 0.962891 17 2.125V10.625C17 11.8203 16.0371 12.75 14.875 12.75H2.125C0.929688 12.75 0 11.8203 0 10.625V2.125C0 0.962891 0.929688 0 2.125 0H14.875ZM2.125 1.0625C1.52734 1.0625 1.0625 1.56055 1.0625 2.125V3.32031L7.53711 8.20117C8.10156 8.63281 8.86523 8.63281 9.42969 8.20117L15.9375 3.35352V2.125C15.9375 1.56055 15.4395 1.0625 14.875 1.0625H2.125ZM15.9375 10.625V4.64844L10.0938 9.03125C9.5957 9.39648 9.03125 9.5957 8.5 9.5957C7.93555 9.5957 7.37109 9.39648 6.90625 9.03125L1.0625 4.64844V10.625C1.0625 11.2227 1.52734 11.6875 2.125 11.6875H14.875C15.4395 11.6875 15.9375 11.2227 15.9375 10.625Z"
                    fill="#2E3192"
                  />
                </svg>
                <h5>franciskavas@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text my-auto">
          <p className="">{textWithDes && textWithDes}</p>
        </div>
      )}

      <div className="image">
        <Image src={textWithImage && textWithImage} height={456} width={456} />
      </div>
    </div>
  );
}
