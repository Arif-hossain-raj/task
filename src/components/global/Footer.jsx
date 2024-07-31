import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <section className="footer max-w-full px-10 md:px-20 pt-[80px] pb-[25px]  bg-[#F8F9FE] ">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-[54px]">
        <div className="left md:block flex flex-col justify-center items-center">
          <div className="logo mb-[28px] ">
            <Image
              src={"/image/static/footerlogo.png"}
              width={162}
              height={162}
            />
          </div>
          <div className="social flex gap-[20px] items-center">
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.45074 7.04288H1.85464C1.35475 7.04288 0.95 7.45794 0.95 7.96602V10.752C0.95 11.2599 1.35474 11.6752 1.85464 11.6752H3.45074V18.1269C3.45074 18.6349 3.85549 19.05 4.35538 19.05H7.17684C7.67673 19.05 8.08162 18.6349 8.08162 18.1269V11.675H10.0436C10.5435 11.675 10.9482 11.26 10.9482 10.7522C10.9482 10.7522 10.9482 10.7522 10.9482 10.7522L10.9493 7.96618V7.96616C10.9493 7.63222 10.7714 7.32285 10.4844 7.15905L10.4844 7.15904C10.3509 7.08287 10.196 7.04274 10.0368 7.04274H8.08162V5.99054C8.08162 5.81282 8.09332 5.69413 8.10918 5.61541C8.12522 5.53581 8.14464 5.50156 8.15632 5.48801L8.11845 5.45537C8.14251 5.42763 8.25502 5.33713 8.69686 5.33713L3.45074 7.04288ZM3.45074 7.04288V5.69775C3.45074 4.30415 3.87923 3.11402 4.69396 2.25995C5.51257 1.40178 6.65534 0.95 7.99505 0.95H7.99514L10.1469 0.953571L10.1468 1.00357L10.1469 0.953571C10.646 0.954445 11.05 1.36949 11.05 1.87671V4.46344C11.05 4.97149 10.6454 5.38657 10.1456 5.38658L3.45074 7.04288ZM6.9486 17.8948V11.1527C6.9486 10.8046 7.22606 10.5198 7.56921 10.5198H9.81538L9.81629 8.19812H7.56908C7.22591 8.19812 6.9486 7.91323 6.9486 7.56516V5.99054C6.9486 5.5774 6.98885 5.09169 7.30637 4.72435M6.9486 17.8948L7.34419 4.75705M6.9486 17.8948H4.58362M6.9486 17.8948H4.58362M7.30637 4.72435L7.34419 4.75705M7.30637 4.72435C7.30636 4.72436 7.30636 4.72436 7.30636 4.72436L7.34419 4.75705M7.30637 4.72435C7.69032 4.27994 8.29185 4.23189 8.69657 4.23189L8.69659 4.28189M7.34419 4.75705C7.71223 4.33105 8.29225 4.28189 8.69659 4.28189M8.69659 4.28189V4.23189M8.69659 4.28189V4.23189M8.69659 4.23189L9.91712 4.23136V2.10845L7.99425 2.10524C7.99422 2.10524 7.99419 2.10524 7.99416 2.10524C6.93828 2.10525 6.08715 2.45024 5.49981 3.06842C4.91218 3.68691 4.58362 4.58416 4.58362 5.69775V7.56516C4.58362 7.91309 4.30632 8.19812 3.96314 8.19812H2.08288V10.5198H3.96314C4.30631 10.5198 4.58362 10.8047 4.58362 11.1527V17.8948M8.69659 4.23189L4.58362 17.8948M9.86631 8.14812H9.81631L9.86629 8.19812L9.86631 8.14812Z"
                fill="#2E3192"
                stroke="#2E3192"
                stroke-width="0.1"
              />
            </svg>

            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_69_343)">
                <path
                  d="M12.7502 0H4.25038C1.91315 0 0.000488281 1.91266 0.000488281 4.2499V12.7501C0.000488281 15.0867 1.91315 17 4.25038 17H12.7502C15.0874 17 17.0001 15.0867 17.0001 12.7501V4.2499C17.0001 1.91266 15.0874 0 12.7502 0ZM15.5834 12.7501C15.5834 14.3119 14.3129 15.5833 12.7502 15.5833H4.25038C2.68834 15.5833 1.41719 14.3119 1.41719 12.7501V4.2499C1.41719 2.68764 2.68834 1.4167 4.25038 1.4167H12.7502C14.3129 1.4167 15.5834 2.68764 15.5834 4.2499V12.7501Z"
                  fill="#2E3192"
                />
                <path
                  d="M13.105 4.9582C13.6917 4.9582 14.1674 4.48251 14.1674 3.89573C14.1674 3.30894 13.6917 2.83325 13.105 2.83325C12.5182 2.83325 12.0425 3.30894 12.0425 3.89573C12.0425 4.48251 12.5182 4.9582 13.105 4.9582Z"
                  fill="#2E3192"
                />
                <path
                  d="M8.4999 4.24988C6.15224 4.24988 4.25 6.15233 4.25 8.49977C4.25 10.8463 6.15224 12.7501 8.4999 12.7501C10.8469 12.7501 12.7498 10.8463 12.7498 8.49977C12.7498 6.15233 10.8469 4.24988 8.4999 4.24988ZM8.4999 11.3334C6.93528 11.3334 5.6667 10.0648 5.6667 8.49977C5.6667 6.93474 6.93528 5.66658 8.4999 5.66658C10.0645 5.66658 11.3331 6.93474 11.3331 8.49977C11.3331 10.0648 10.0645 11.3334 8.4999 11.3334Z"
                  fill="#2E3192"
                />
              </g>
              <defs>
                <clipPath id="clip0_69_343">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.73434 4.38911C8.29758 4.13367 7.73779 4.44244 7.73779 4.943V10.9635C7.73779 11.4667 8.29846 11.7711 8.73434 11.5183L13.892 8.51231C14.3208 8.26203 14.3199 7.65481 13.8928 7.40367L8.73434 4.38911ZM9.05598 9.82908V6.07916L12.268 7.9567L9.05598 9.82908Z"
                fill="#2E3192"
              />
              <path
                d="M17.4914 0.445733C13.4024 -0.148578 7.69029 -0.148578 3.59952 0.445733C1.96322 0.683113 0.674031 1.94054 0.392819 3.57296C-0.13094 6.603 -0.13094 9.30449 0.392819 12.3337C0.674031 13.9669 1.96322 15.2235 3.59952 15.4609C5.64886 15.7585 8.10244 15.9073 10.5551 15.9073C13.0034 15.9073 15.4509 15.7593 17.4923 15.4618C19.1268 15.2244 20.4152 13.9678 20.6981 12.3345C21.2219 9.30449 21.2219 6.60214 20.6981 3.5721C20.4169 1.94054 19.1277 0.683113 17.4914 0.445733ZM19.3984 12.1195C19.2112 13.1998 18.3676 14.0306 17.2981 14.1854C13.3277 14.7625 7.77377 14.7625 3.79285 14.1845C2.72249 14.0289 1.87797 13.1989 1.69167 12.1186C1.18724 9.19956 1.18724 6.70793 1.69167 3.78712C1.87885 2.70687 2.72249 1.87776 3.79373 1.72122C5.78155 1.4331 8.16395 1.2886 10.5446 1.2886C12.927 1.2886 15.3094 1.4331 17.2972 1.72122C18.3676 1.8769 19.2121 2.70687 19.3984 3.78712C19.9028 6.70793 19.9028 9.19956 19.3984 12.1195Z"
                fill="#2E3192"
              />
            </svg>
          </div>
        </div>

        <div className="address  md:block flex flex-col justify-center items-center">
          <h6 className="pb-[35px] font-[600] ">
            Ignalinos rajono kultūros centras
          </h6>

          <div className="content-wrapper">
            <div className="single mb-[14px] flex gap-[10px] items-center ">
              <div className="logo">
                <svg
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.625 7.511C10.625 9.27139 9.21875 10.6406 7.5 10.6406C5.74219 10.6406 4.375 9.27139 4.375 7.511C4.375 5.78973 5.74219 4.38142 7.5 4.38142C9.21875 4.38142 10.625 5.78973 10.625 7.511ZM7.5 9.38875C8.51562 9.38875 9.375 8.56724 9.375 7.511C9.375 6.49389 8.51562 5.63325 7.5 5.63325C6.44531 5.63325 5.625 6.49389 5.625 7.511C5.625 8.56724 6.44531 9.38875 7.5 9.38875ZM15 7.511C15 10.9535 10.4297 17.0171 8.39844 19.5599C7.92969 20.1467 7.03125 20.1467 6.5625 19.5599C4.53125 17.0171 0 10.9535 0 7.511C0 3.3643 3.32031 0 7.5 0C11.6406 0 15 3.3643 15 7.511ZM7.5 1.25183C4.02344 1.25183 1.25 4.06846 1.25 7.511C1.25 8.13692 1.44531 8.95844 1.875 10.0147C2.30469 11.0318 2.89063 12.1271 3.59375 13.2225C4.92188 15.3741 6.48438 17.4474 7.5 18.6993C8.47656 17.4474 10.0391 15.3741 11.3672 13.2225C12.0703 12.1271 12.6563 11.0318 13.0859 10.0147C13.5156 8.95844 13.75 8.13692 13.75 7.511C13.75 4.06846 10.9375 1.25183 7.5 1.25183Z"
                    fill="#2E3192"
                  />
                </svg>
              </div>
              <div className="text">
                <p className="font-[400]">
                  Ateities g. 43, LT-30119, Ignalina <br /> Įmonės kodas:
                  305616878
                </p>
              </div>
            </div>

            <div className="single mb-[14px] flex gap-[10px] items-center">
              <div className="logo mt-[20px]">
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
              </div>
              <div className="text">
                <h6 className="font-[400] text-[12px] ">ilietų kasa</h6>
                <p className="font-[500]">+370 615 91323</p>
              </div>
            </div>

            <div className="single mb-[14px] flex gap-[10px] items-center">
              <div className="logo mt-[20px]">
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
              </div>
              <div className="text">
                <h6 className="font-[400] text-[12px] ">Direktorius</h6>
                <p className="font-[500]">+370 686 95225</p>
              </div>
            </div>

            <div className="single mb-[14px] flex gap-[10px] items-center">
              <div className="logo">
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
              </div>
              <div className="text">
                <p className="font-[500]">info@irkc.lt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Inform md:block flex flex-col justify-center items-center">
          <h6 className="pb-[35px] font-[600] ">
            Ignalinos rajono kultūros centras
          </h6>
          <div className="wrapper">
            <div className="single flex items-center gap-[7px]">
              <div className="logo">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89104 12.2894L11.2126 5.96777L11.1826 11.1989L12.2929 11.1923L12.3296 4.63603L12.3203 4.09385L11.7781 4.08455L5.22182 4.12127L5.21561 5.23045L10.4456 5.20076L4.12403 11.5223L4.89104 12.2894Z"
                    fill="#2E3192"
                  />
                </svg>
              </div>
              <div className="text">
                <Link
                  href={"/"}
                  className="mb-[11px] font-[400] text-[#14133B] text-[15px] leading-[18px] font-[400] text-[]"
                >
                  {" "}
                  Administracinė informacija{" "}
                </Link>
              </div>
            </div>
            <div className="single flex items-center gap-[7px]">
              <div className="logo">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89104 12.2894L11.2126 5.96777L11.1826 11.1989L12.2929 11.1923L12.3296 4.63603L12.3203 4.09385L11.7781 4.08455L5.22182 4.12127L5.21561 5.23045L10.4456 5.20076L4.12403 11.5223L4.89104 12.2894Z"
                    fill="#2E3192"
                  />
                </svg>
              </div>
              <div className="text">
                <Link
                  href={"/"}
                  className="mb-[11px] font-[400] text-[#14133B] text-[15px] leading-[18px] "
                >
                  {" "}
                  Korupcijos prevencija{" "}
                </Link>
              </div>
            </div>
            <div className="single flex items-center gap-[7px]">
              <div className="logo">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89104 12.2894L11.2126 5.96777L11.1826 11.1989L12.2929 11.1923L12.3296 4.63603L12.3203 4.09385L11.7781 4.08455L5.22182 4.12127L5.21561 5.23045L10.4456 5.20076L4.12403 11.5223L4.89104 12.2894Z"
                    fill="#2E3192"
                  />
                </svg>
              </div>
              <div className="text">
                <Link
                  href={"/"}
                  className="mb-[11px] font-[400] text-[#14133B] text-[15px] leading-[18px] font-[400] text-[]"
                >
                  {" "}
                  Asmens duomenų apsauga{" "}
                </Link>
              </div>
            </div>
            <div className="single flex items-center gap-[7px]">
              <div className="logo">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89104 12.2894L11.2126 5.96777L11.1826 11.1989L12.2929 11.1923L12.3296 4.63603L12.3203 4.09385L11.7781 4.08455L5.22182 4.12127L5.21561 5.23045L10.4456 5.20076L4.12403 11.5223L4.89104 12.2894Z"
                    fill="#2E3192"
                  />
                </svg>
              </div>
              <div className="text">
                <Link
                  href={"/"}
                  className="mb-[11px] font-[400] text-[#14133B] text-[15px] leading-[18px] font-[400] text-[]"
                >
                  {" "}
                  Teisinė informacija{" "}
                </Link>
              </div>
            </div>
            <div className="single flex items-center gap-[7px]">
              <div className="logo">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89104 12.2894L11.2126 5.96777L11.1826 11.1989L12.2929 11.1923L12.3296 4.63603L12.3203 4.09385L11.7781 4.08455L5.22182 4.12127L5.21561 5.23045L10.4456 5.20076L4.12403 11.5223L4.89104 12.2894Z"
                    fill="#2E3192"
                  />
                </svg>
              </div>
              <div className="text">
                <Link
                  href={"/"}
                  className="mb-[11px] font-[400] text-[#14133B] text-[15px] leading-[18px] font-[400] text-[]"
                >
                  {" "}
                  Veiklos sritys{" "}
                </Link>
              </div>
            </div>
            <div className="single flex items-center gap-[7px]">
              <div className="logo">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.89104 12.2894L11.2126 5.96777L11.1826 11.1989L12.2929 11.1923L12.3296 4.63603L12.3203 4.09385L11.7781 4.08455L5.22182 4.12127L5.21561 5.23045L10.4456 5.20076L4.12403 11.5223L4.89104 12.2894Z"
                    fill="#2E3192"
                  />
                </svg>
              </div>
              <div className="text">
                <Link
                  href={"/"}
                  className="mb-[11px] font-[400] text-[#14133B] text-[15px] leading-[18px] font-[400] text-[]"
                >
                  {" "}
                  Kontaktai{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex  justify-center items-center">
          <h6 className="pb-[35px] font-[600] ">Apklausa</h6>
          <div className="wrapper">
            <p className="mb-[35px]">
              Kviečiame <strong>įvertinti Všį</strong> Ignalinos rajono kultūros
              centro paslaugų kokybę
            </p>
            <Button text={"Vertinti"} svg bg={"bg-[#2E3192]"} />
          </div>
        </div>
      </div>
      <div className="small ">
        <div className="left flex gap-[45px] items-center">
          <h6 className="footer-font">Ignalinos rajono kultūros centras . Visos teisės saugomos</h6>
          <h6 className="footer-font">Slapukų parinktys</h6>
          <h6 className="footer-font">Duomenų apsauga</h6>
        </div>
        <div className="right">
          <h6 className="footer-font">Sukurta: TEXUS</h6>
        </div>
      </div>
    </section>
  );
}
