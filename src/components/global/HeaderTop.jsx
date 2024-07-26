"use client";

import Link from "next/link";

export default function HeaderTop() {
  return (
    <section className="headerTop bg-[#2E3192] py-[10px]">
      <div className="contain-wrapper max-w-screen-xl mx-auto px-4 flex justify-between items-center m-auto">
      <div className="left flex items-center gap-[50px] ">
        <div className="single flex items-center gap-[8px]">
          <div className="icon">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0703 10.9637C16.7344 11.2625 17.0996 11.993 16.9336 12.6902L16.2363 15.8113C16.0703 16.5086 15.4727 16.9734 14.7422 16.9734C6.60742 16.9734 0 10.366 0 2.23125C0 1.50078 0.464844 0.903127 1.16211 0.770314L4.2832 0.0398454C4.98047 -0.12617 5.71094 0.239064 6.00977 0.903127L7.4375 4.28985C7.70312 4.8875 7.53711 5.61797 7.03906 6.04961L5.67773 7.14531C6.64062 8.87188 8.10156 10.3328 9.82812 11.2957L10.957 9.96758C11.3555 9.43633 12.0859 9.27031 12.6836 9.50274L16.0703 10.9637ZM15.1738 15.5789L15.9043 12.4578C15.9707 12.2254 15.8379 12.0262 15.6387 11.9266L12.2852 10.4988C12.0859 10.4324 11.8867 10.4656 11.7539 10.6316L10.3926 12.2918C10.2266 12.491 9.96094 12.5574 9.76172 12.4246C7.50391 11.3289 5.64453 9.46953 4.54883 7.24492C4.41602 7.0125 4.48242 6.74688 4.68164 6.58086L6.3418 5.21953C6.50781 5.08672 6.54102 4.8875 6.47461 4.68828L5.04688 1.33477C4.94727 1.16875 4.78125 1.03594 4.61523 1.03594C4.58203 1.03594 4.54883 1.06914 4.51562 1.06914L1.39453 1.79961C1.19531 1.83281 1.0625 1.99883 1.0625 2.23125C1.0625 9.76836 7.20508 15.9441 14.7422 15.9441C14.9746 15.9441 15.1406 15.7781 15.1738 15.5789Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text">
            <Link href="tel:+37038652992">+370 386 52992</Link>
          </div>
        </div>
        <div className="single flex items-center gap-[8px]">
          <div className="icon">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.875 0C16.0371 0 17 0.962891 17 2.125V10.625C17 11.8203 16.0371 12.75 14.875 12.75H2.125C0.929688 12.75 0 11.8203 0 10.625V2.125C0 0.962891 0.929688 0 2.125 0H14.875ZM2.125 1.0625C1.52734 1.0625 1.0625 1.56055 1.0625 2.125V3.32031L7.53711 8.20117C8.10156 8.63281 8.86523 8.63281 9.42969 8.20117L15.9375 3.35352V2.125C15.9375 1.56055 15.4395 1.0625 14.875 1.0625H2.125ZM15.9375 10.625V4.64844L10.0938 9.03125C9.5957 9.39648 9.03125 9.5957 8.5 9.5957C7.93555 9.5957 7.37109 9.39648 6.90625 9.03125L1.0625 4.64844V10.625C1.0625 11.2227 1.52734 11.6875 2.125 11.6875H14.875C15.4395 11.6875 15.9375 11.2227 15.9375 10.625Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text">
            <Link href="mailto:example@example.com">info@irkc.lt</Link>
          </div>
        </div>
      </div>
      <div className="right flex items-center gap-[20px]">
        <div className="single-icon">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_69_147)">
              <path
                d="M9.22797 0.000976563C8.92324 0.000976563 8.61873 0.0173579 8.31575 0.0500143C8.03805 0.0783803 7.76375 0.124901 7.49314 0.181349C7.44076 0.192305 7.38836 0.203864 7.33599 0.215955C5.74157 0.57897 4.28568 1.39417 3.14292 2.56381C3.03666 2.67274 2.93263 2.78489 2.8309 2.90023C-0.256033 6.44414 0.114427 11.8195 3.65837 14.9064C7.05123 17.8618 12.1584 17.6651 15.3139 14.4577C15.4204 14.3488 15.5244 14.2366 15.626 14.1213C16.9883 12.5699 17.739 10.5754 17.7378 8.51075C17.7378 3.81089 13.9278 0.000941105 9.22797 0.000976563ZM3.52104 2.9893C3.56586 2.94278 3.61238 2.89825 3.65805 2.85314C3.71081 2.80123 3.76329 2.74904 3.81718 2.69883C3.86456 2.65458 3.91335 2.61203 3.96185 2.56892C4.0166 2.52041 4.07106 2.4719 4.12722 2.4251C4.17658 2.3834 4.22736 2.34341 4.27785 2.30313C4.33458 2.25774 4.39131 2.21236 4.44975 2.16867C4.50137 2.12981 4.55385 2.09208 4.60661 2.05521C4.66533 2.01323 4.72433 1.97011 4.78418 1.93096C4.83779 1.89466 4.89197 1.85948 4.94643 1.82459C5.00714 1.78573 5.06813 1.74744 5.12968 1.71113C5.1851 1.67805 5.24087 1.6455 5.29704 1.61355C5.35983 1.57781 5.42288 1.54292 5.48624 1.50888C5.54297 1.47863 5.5997 1.44903 5.65644 1.42009C5.72111 1.38747 5.78635 1.35599 5.85188 1.32507C5.90861 1.29812 5.96761 1.27117 6.02605 1.24564C6.09271 1.21728 6.16022 1.18891 6.22773 1.16054C6.28645 1.13643 6.34488 1.11289 6.40416 1.0902C6.47281 1.0641 6.54231 1.0397 6.6118 1.01531C6.67109 0.994603 6.73037 0.973895 6.79051 0.954323C6.86114 0.93163 6.93234 0.910639 7.00382 0.889932C7.06367 0.872629 7.12296 0.854758 7.18309 0.83859C7.20607 0.832633 7.22905 0.82781 7.25202 0.821854C6.41239 1.63713 5.7893 2.64894 5.43915 3.76568C4.76589 3.58811 4.11411 3.33728 3.49551 3.01767C3.50487 3.00774 3.51282 2.99781 3.52104 2.9893ZM3.11314 3.44599C3.79453 3.81518 4.51708 4.10274 5.26584 4.30265C4.89878 5.57898 4.7061 6.89909 4.69313 8.22709H1.29204C1.35384 6.47587 1.99424 4.79455 3.11314 3.44599ZM3.11314 13.5755C1.99431 12.2269 1.35392 10.5456 1.29204 8.7944H4.69313C4.7061 10.1224 4.89875 11.4425 5.26584 12.7188C4.51712 12.9188 3.79456 13.2063 3.11314 13.5755ZM7.18139 16.184C7.12409 16.1696 7.06481 16.1508 7.00581 16.1335C6.93404 16.1126 6.86199 16.0916 6.79108 16.0686C6.73122 16.0493 6.67222 16.0286 6.61322 16.0079C6.54344 15.9838 6.47366 15.9591 6.40473 15.9327C6.34573 15.9103 6.28758 15.8868 6.22915 15.8629C6.16135 15.8346 6.09356 15.8062 6.02633 15.7778C5.96846 15.7523 5.91088 15.726 5.85358 15.699C5.78749 15.6678 5.72168 15.636 5.65502 15.6031C5.59829 15.5747 5.54155 15.5464 5.48482 15.5154C5.42071 15.4811 5.35717 15.446 5.29363 15.4096C5.2369 15.3782 5.18301 15.3458 5.12826 15.3129C5.06586 15.2755 5.00459 15.2369 4.94332 15.1975C4.88942 15.1631 4.83552 15.1283 4.78248 15.0925C4.72206 15.0517 4.66221 15.0091 4.60292 14.9666C4.55101 14.9294 4.4991 14.8922 4.44804 14.8531C4.38933 14.8089 4.33174 14.7632 4.27444 14.7172C4.22424 14.6772 4.17431 14.6375 4.12524 14.5964C4.06851 14.5493 4.01376 14.5002 3.95873 14.4514C3.91051 14.4086 3.862 14.3663 3.81491 14.3227C3.76074 14.2722 3.70826 14.2197 3.6555 14.1678C3.60983 14.1227 3.56331 14.0781 3.51849 14.0319C3.51026 14.0231 3.50232 14.014 3.4941 14.0055C4.11265 13.6858 4.76443 13.4348 5.43773 13.2572C5.78795 14.3739 6.41101 15.3857 7.25061 16.2011C7.22763 16.1951 7.20437 16.1903 7.18139 16.184ZM8.94434 16.4308C7.73056 16.2584 6.66655 14.9915 5.99711 13.1208C6.96496 12.9041 7.95263 12.7878 8.94434 12.7739V16.4308ZM8.94434 12.2066C7.89232 12.2204 6.84472 12.3453 5.81897 12.5793C5.4628 11.3487 5.27491 10.0754 5.26045 8.7944H8.94434V12.2066ZM8.94434 8.22709H5.26045C5.27488 6.94604 5.46277 5.67283 5.81897 4.44221C6.84472 4.67612 7.89235 4.80107 8.94434 4.81494V8.22709ZM8.94434 4.24762C7.95259 4.23379 6.96496 4.11752 5.99711 3.9007C6.66655 2.02996 7.73056 0.763136 8.94434 0.590671V4.24762ZM15.3429 3.44599C16.4617 4.79458 17.1021 6.47591 17.164 8.22709H13.7629C13.7499 6.89909 13.5573 5.57898 13.1902 4.30265C13.9389 4.10263 14.6614 3.81511 15.3429 3.44599ZM11.2723 0.837171C11.3319 0.851922 11.3912 0.870643 11.4502 0.887946C11.522 0.908937 11.594 0.929928 11.6649 0.952905C11.7248 0.972193 11.7838 0.992901 11.8428 1.01361C11.9126 1.03772 11.9823 1.0624 12.0513 1.08878C12.1103 1.11119 12.1684 1.13473 12.2269 1.15856C12.2947 1.18692 12.3624 1.21529 12.4297 1.24366C12.4875 1.26919 12.5451 1.29546 12.6024 1.32251C12.6685 1.35372 12.7343 1.38549 12.801 1.41839C12.8577 1.44676 12.9144 1.47512 12.9712 1.50604C13.0353 1.54036 13.0988 1.57554 13.1624 1.61185C13.2191 1.64333 13.273 1.67567 13.3277 1.70858C13.3901 1.74602 13.4514 1.7846 13.5127 1.82402C13.5666 1.85835 13.6205 1.89324 13.6735 1.92898C13.7339 1.96983 13.7935 2.01209 13.8528 2.05464C13.905 2.0918 13.9569 2.12924 14.0082 2.1681C14.0667 2.21207 14.124 2.25774 14.1816 2.30369C14.2315 2.34341 14.2817 2.38312 14.3308 2.42453C14.3875 2.47162 14.4422 2.52069 14.4973 2.56948C14.5455 2.61232 14.594 2.65458 14.6411 2.69827C14.6953 2.74876 14.7477 2.80123 14.8005 2.85314C14.8462 2.89825 14.8927 2.94278 14.9375 2.98902C14.9457 2.99781 14.9537 3.00689 14.9619 3.0154C14.3434 3.33515 13.6916 3.58609 13.0183 3.76369C12.6674 2.64685 12.0435 1.63514 11.2031 0.820152C11.2261 0.826108 11.2494 0.830931 11.2723 0.837171ZM9.51166 0.590671C10.7254 0.763136 11.7895 2.02996 12.4589 3.9007C11.491 4.11742 10.5034 4.23368 9.51166 4.24762V0.590671ZM9.51166 4.81494C10.5637 4.80111 11.6113 4.67616 12.637 4.44221C12.9932 5.67283 13.1811 6.94604 13.1956 8.22709H9.51166V4.81494ZM9.51166 8.7944H13.1956C13.1811 10.0754 12.9932 11.3487 12.637 12.5793C11.6113 12.3454 10.5637 12.2204 9.51166 12.2066V8.7944ZM9.51166 16.4308V12.7739C10.5034 12.7877 11.491 12.904 12.4589 13.1208C11.7895 14.9915 10.7254 16.2584 9.51166 16.4308ZM14.935 14.0322C14.8901 14.0784 14.8439 14.123 14.7982 14.1681C14.7455 14.22 14.6927 14.2725 14.6385 14.3229C14.5914 14.3669 14.5429 14.408 14.4947 14.452C14.4397 14.5008 14.3849 14.5496 14.3288 14.5967C14.2791 14.6381 14.2286 14.6781 14.1782 14.7184C14.1214 14.7637 14.0647 14.8091 14.0063 14.8528C13.9546 14.8917 13.9022 14.9294 13.8494 14.9663C13.7907 15.0083 13.7317 15.0514 13.6718 15.0905C13.6182 15.1268 13.564 15.162 13.5096 15.1966C13.4489 15.2358 13.3877 15.2736 13.326 15.3101C13.2693 15.3433 13.2151 15.3756 13.1592 15.4077C13.0965 15.4434 13.0333 15.4783 12.9698 15.5123C12.913 15.5426 12.8563 15.5722 12.7996 15.6011C12.7349 15.6337 12.6696 15.6652 12.6041 15.6961C12.5474 15.7231 12.4884 15.75 12.43 15.7756C12.3633 15.8039 12.2958 15.8323 12.2283 15.8607C12.1696 15.8845 12.1111 15.9083 12.0521 15.9307C11.9829 15.9571 11.9134 15.9818 11.8436 16.0059C11.7846 16.0266 11.7256 16.0473 11.6658 16.0666C11.5949 16.0896 11.5239 16.1106 11.4516 16.1313C11.3923 16.1489 11.3328 16.1664 11.2729 16.1826C11.2499 16.1886 11.227 16.1934 11.204 16.1994C12.0436 15.3841 12.6667 14.3723 13.0168 13.2555C13.6901 13.4331 14.3419 13.6839 14.9605 14.0035C14.9511 14.0138 14.9432 14.0237 14.935 14.0322ZM15.3429 13.5755C14.6615 13.2063 13.9389 12.9188 13.1902 12.7188C13.5572 11.4425 13.7499 10.1224 13.7629 8.7944H17.164C17.1022 10.5456 16.4618 12.2269 15.3429 13.5755Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_69_147">
                <rect
                  width="17"
                  height="17"
                  fill="white"
                  transform="translate(0.737793)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="single-icon">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.42708 17H4.32785C3.64522 17 3.08987 16.4501 3.08987 15.7742C3.08987 15.4664 3.213 15.1818 3.41806 14.9636H2.56539C2.22496 14.9636 1.89579 14.8235 1.6623 14.5792C1.42681 14.3328 1.30761 14.0108 1.32662 13.6725C1.35341 13.2222 1.63132 12.8398 2.02554 12.6467L1.84369 12.6246C1.50489 12.5869 1.20403 12.4198 0.996329 12.1538C0.789007 11.8883 0.701979 11.5577 0.751245 11.223L0.752405 11.2157C0.852418 10.6237 1.38677 10.194 2.02299 10.194H2.13622L2.61478 10.253C2.55711 10.2001 2.50423 10.1424 2.45674 10.0803C2.25475 9.81629 2.17102 9.49751 2.221 9.18273L2.22157 9.17932C2.32251 8.58188 2.83771 8.14826 3.44664 8.14826C3.52578 8.14826 3.59187 8.15744 3.65018 8.16554L3.69152 8.17117L7.06061 8.88563L4.96987 6.60736C4.93917 6.57576 4.91901 6.54552 4.90639 6.52544L4.89752 6.5138C4.49112 5.98074 4.59991 5.21382 5.13982 4.80366C5.38685 4.61404 5.68994 4.53771 5.98939 4.56819L5.47725 3.89534C5.26996 3.62244 5.18707 3.28876 5.24363 2.95549C5.29988 2.62403 5.48701 2.33688 5.77064 2.14664C6.03962 1.96172 6.36894 1.89702 6.69832 1.96447C6.81291 1.98798 6.92381 2.02659 7.02804 2.07925L6.93279 1.91552C6.75996 1.62677 6.71291 1.27713 6.80372 0.955825C6.89528 0.631889 7.11184 0.366135 7.41354 0.207512L7.41577 0.206347C7.9991 -0.0951178 8.74716 0.129401 9.0833 0.706876L9.31102 1.09937C9.35218 0.693831 9.57624 0.332101 9.94042 0.143346C10.2436 -0.0156828 10.5892 -0.0434321 10.9135 0.0653056C11.235 0.173072 11.5007 0.410371 11.6427 0.716478L13.4124 4.4824L14.2097 6.01273L14.1138 4.25663C14.0957 3.91799 14.2137 3.59586 14.4461 3.34918C14.6785 3.10244 14.9949 2.96334 15.3371 2.9575L15.3433 2.95745C15.6678 2.95745 15.976 3.08647 16.211 3.32071C16.4373 3.54624 16.5722 3.84612 16.59 4.1635L16.7279 6.58041C16.7573 7.04697 16.7212 7.52755 16.6207 8.00877L16.6198 8.01306L16.1782 10.0025C16.0833 10.4527 15.7991 10.8186 15.3779 11.0332L14.251 11.6015L13.6178 15.195C13.5143 15.7313 13.0764 16.1343 12.528 16.1977L12.5243 16.1981L7.67748 16.7076L4.42708 17ZM1.45675 11.3286C1.43679 11.4708 1.47371 11.6104 1.5609 11.722C1.64966 11.8357 1.77873 11.9071 1.92433 11.923L1.92854 11.9235L6.71503 12.5054L6.67236 13.2088L2.61174 13.2181C2.31178 13.2181 2.05517 13.44 2.03894 13.7128C2.03098 13.8543 2.08128 13.99 2.18062 14.094C2.28142 14.1994 2.41805 14.2575 2.56537 14.2575H6.67955L6.72318 14.9609L4.33529 15.2518C4.03648 15.2872 3.80338 15.5166 3.80338 15.7742C3.80338 16.0608 4.03866 16.2939 4.32787 16.2939H4.39474L7.61027 16.0047L12.4469 15.4962C12.6827 15.4682 12.871 15.2953 12.9165 15.065L13.5782 11.31C13.6218 11.0754 13.5522 10.8251 13.3919 10.6405L12.05 9.09516C11.7723 8.77636 11.4574 8.50125 11.1146 8.27791L9.07348 6.93172C8.96809 6.86233 8.85208 6.82715 8.72868 6.82715C8.56313 6.82715 8.41066 6.90115 8.32083 7.02512L8.31609 7.03149C8.23022 7.14455 8.19579 7.28296 8.21916 7.4212C8.24337 7.56431 8.32549 7.68916 8.45038 7.77274L10.1584 8.90797C10.3498 9.03445 10.4535 9.23796 10.4461 9.45473L11.371 10.0699L10.2688 9.88465C10.1488 10.0137 9.9794 10.0909 9.79473 10.0909C9.75131 10.0909 9.71573 10.0841 9.69288 10.0788L7.67091 9.73712L3.56814 8.86709L3.55106 8.86474C3.50748 8.85869 3.476 8.85431 3.44664 8.85431C3.18833 8.85431 2.96947 9.03915 2.92559 9.29403C2.88084 9.58326 3.13045 9.82698 3.3983 9.89576L3.40101 9.89646L6.62593 10.7513L6.4895 11.4427L2.09193 10.9H2.02303C1.73822 10.9 1.50071 11.08 1.45675 11.3286ZM14.1523 9.98912C14.33 10.1914 14.4564 10.4212 14.5282 10.6692L15.0527 10.4047C15.2779 10.29 15.4302 10.0953 15.4801 9.85706L15.4809 9.85299L15.9224 7.86383C16.0098 7.44438 16.0412 7.02706 16.0157 6.62342L16.0156 6.62129L15.8776 4.20316C15.8609 3.90662 15.6228 3.6653 15.3462 3.66357C15.2007 3.66687 15.0664 3.72613 14.9679 3.83068C14.8688 3.93591 14.8185 4.07379 14.8263 4.21894L14.9374 6.25499C14.9546 6.55866 14.7572 6.82766 14.4574 6.90856C14.1563 6.98981 13.8461 6.8552 13.7031 6.58118L12.7715 4.79326L10.9944 1.01148C10.9331 0.879038 10.8231 0.780521 10.6846 0.734078C10.548 0.688288 10.4022 0.700132 10.2741 0.767458L10.2719 0.768623C10.014 0.90188 9.96739 1.2485 10.0712 1.50663L11.3202 4.56936L10.6799 4.87725L8.4648 1.0589C8.32008 0.810265 7.99165 0.706222 7.74726 0.831624C7.6202 0.898755 7.52916 1.01037 7.49083 1.14603C7.45153 1.28504 7.47158 1.4309 7.54728 1.55671L7.54991 1.56115L9.95655 5.69762L9.47822 6.01103C9.52917 6.03772 9.57855 6.06724 9.62613 6.09945L11.6631 7.44355C12.0798 7.71479 12.4659 8.05084 12.8105 8.44238L12.8122 8.4443L14.1523 9.98912ZM7.93451 8.77629L8.21843 8.82399L7.88352 8.60123C7.53949 8.36686 7.30115 8.00153 7.22957 7.59894C7.1686 7.24584 7.22942 6.89368 7.40093 6.58819L6.3107 5.47103C6.12819 5.28025 5.80371 5.18729 5.57669 5.36191L5.57469 5.36343C5.34736 5.53578 5.29715 5.85403 5.45959 6.07845C5.47578 6.09747 5.49053 6.11765 5.50372 6.13882L7.67639 8.50633L7.93451 8.77629ZM6.44596 2.64595C6.34999 2.64595 6.25636 2.67219 6.17672 2.72723L6.17198 2.73046C6.05077 2.81137 5.97097 2.93282 5.94728 3.07245C5.92343 3.21296 5.95898 3.35446 6.04738 3.47082L7.99118 6.02454C8.21555 5.89693 8.46986 5.82991 8.72865 5.83019C8.90012 5.83019 9.067 5.8558 9.22447 5.90554L6.91864 2.88655C6.79922 2.73113 6.61884 2.64595 6.44596 2.64595Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="single-icon">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.78943 10.7722L5.44814 10.8077V14.4308H1.78943V10.7722ZM8.54788 10.7722L12.2066 10.8077V14.4308H8.54788V10.7722ZM8.54814 14.46L8.54814 14.46L8.54814 14.46ZM12.2066 5.43126L8.54788 5.36022V1.77283H12.2066V5.43126ZM8.54814 1.7436C8.54815 1.74352 8.54815 1.74352 8.54814 1.74361L8.54814 1.7436ZM8.51867 1.77309C8.51858 1.7731 8.51857 1.7731 8.51865 1.77309L8.51867 1.77309ZM18.965 10.7721V14.359L15.3063 14.3945V10.7721H18.965ZM18.9789 9.94922H17.5471V8.08373C17.5471 7.96394 17.507 7.86023 17.4331 7.78635C17.3592 7.71246 17.2555 7.67231 17.1357 7.67231H10.7887V6.21823H12.2205C12.6818 6.21823 13.0294 5.87057 13.0294 5.40926V1.75897C13.0294 1.29766 12.6818 0.95 12.2205 0.95H8.53402C8.07271 0.95 7.72505 1.29766 7.72505 1.75897V5.4454C7.72505 5.90671 8.07271 6.25437 8.53402 6.25437H9.96582V7.67231H3.61879C3.499 7.67231 3.39529 7.71246 3.32141 7.78635C3.24752 7.86023 3.20737 7.96394 3.20737 8.08373V9.94922H1.77557C1.31426 9.94922 0.966602 10.2969 0.966602 10.7582V14.4446C0.966602 14.9059 1.31426 15.2536 1.77557 15.2536H5.462C5.92331 15.2536 6.27097 14.9059 6.27097 14.4446V10.7582C6.27097 10.2969 5.92331 9.94922 5.462 9.94922H4.0302V8.49514H9.96582V9.94922H8.53402C8.07271 9.94922 7.72505 10.2969 7.72505 10.7582V14.4446C7.72505 14.9059 8.07271 15.2536 8.53402 15.2536H12.2205C12.6818 15.2536 13.0294 14.9059 13.0294 14.4446V10.7582C13.0294 10.2969 12.6818 9.94922 12.2205 9.94922H10.7887V8.49514H16.7243V9.94922H15.2925C14.8312 9.94922 14.4835 10.2969 14.4835 10.7582V14.4446C14.4835 14.9059 14.8312 15.2536 15.2925 15.2536H18.9789C19.4402 15.2536 19.7879 14.9059 19.7879 14.4446V10.7582C19.7879 10.2953 19.4025 9.94922 18.9789 9.94922Z"
              fill="white"
              stroke="white"
              stroke-width="0.1"
            />
          </svg>
        </div>
        <div className="single-icon">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.0166016"
              width="18"
              height="18"
              fill="url(#pattern0_69_145)"
            />
            <defs>
              <pattern
                id="pattern0_69_145"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_69_145"
                  transform="scale(0.00662252)"
                />
              </pattern>
              <image
                id="image0_69_145"
                width="151"
                height="151"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className="single-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8085 15.806L11.9695 10.967C12.9068 9.80916 13.4712 8.33796 13.4712 6.73561C13.4712 3.02181 10.4494 0 6.73557 0C3.02178 0 0 3.02178 0 6.73557C0 10.4494 3.02181 13.4712 6.73561 13.4712C8.33796 13.4712 9.80916 12.9068 10.967 11.9695L15.806 16.8085C15.9442 16.9467 16.1257 17.0162 16.3072 17.0162C16.4888 17.0162 16.6703 16.9467 16.8085 16.8085C17.0857 16.5313 17.0857 16.0832 16.8085 15.806ZM6.73561 12.0531C3.80313 12.0531 1.41803 9.66805 1.41803 6.73557C1.41803 3.8031 3.80313 1.418 6.73561 1.418C9.66808 1.418 12.0532 3.8031 12.0532 6.73557C12.0532 9.66805 9.66805 12.0531 6.73561 12.0531Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      </div>
     
    </section>
  );
}
