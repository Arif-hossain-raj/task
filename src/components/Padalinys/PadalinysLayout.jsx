import Link from "next/link";
import TextWithImage from "./dynamic/TextWithImage";
import Address from "./dynamic/Address";
import PlainText from "./dynamic/PlainText";
import Textcard from "./dynamic/TextCard";

export default function PadalinysLayout() {
  return (
    <section>
      <div className="wrapper bg-[white] max-w-full px-20 py-[40px]">
        <div className="grid grid-cols-12 gap-[60px]">
          <div className="col-span-3">
            <div className="list border rounded-[10px]">
              <ul className="border-b-1">
                <li className="border-b-[1px] py-[25px] pl-[25px] ">
                  <Link className="text-[#2E3192]" href={"/"}>
                    Ceikinių padalinys
                  </Link>
                </li>
                <li className="border-b-[1px] py-[25px] pl-[25px] ">
                  <Link className="text-[#14133B]" href={"/"}>
                    Didžiasalis
                  </Link>
                </li>
                <li className="border-b-[1px] py-[25px] pl-[25px] ">
                  <Link className="text-[#14133B]" href={"/"}>
                    Dūkštas
                  </Link>
                </li>
                <li className="border-b-[1px] py-[25px] pl-[25px] ">
                  <Link className="text-[#14133B]" href={"/"}>
                    Kaniūkai
                  </Link>
                </li>
                <li className="border-b-[1px] py-[25px] pl-[25px] ">
                  <Link className="text-[#14133B]" href={"/"}>
                    Lorem ipsum
                  </Link>
                </li>
              </ul>
            </div>

            <div className="svg translate-x-[-100px] translate-y-[150px]">
              <svg
                width="357"
                height="648"
                viewBox="0 0 357 648"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3" clip-path="url(#clip0_35_340)">
                  <path
                    d="M151.881 181.464L150.824 180.378L-111.378 442.25L-110.29 443.337L151.881 181.464Z"
                    fill="#AAB3DB"
                  />
                  <path
                    d="M104.378 79.6845L103.29 78.6281L-158.881 340.5L-157.823 341.587L104.378 79.6845Z"
                    fill="#AAB3DB"
                  />
                  <path
                    d="M225.249 641.824L224.161 642.881L-38.0103 381.008L-36.9526 379.952L225.249 641.824Z"
                    fill="#AAB3DB"
                  />
                  <path
                    d="M356.999 523.804L355.911 524.861L93.7402 262.988L94.7978 261.932L356.999 523.804Z"
                    fill="#AAB3DB"
                  />
                  <path
                    d="M206.514 538.807L205.426 539.894L-56.745 277.991L-55.6874 276.935L206.514 538.807Z"
                    fill="#AAB3DB"
                  />
                  <path
                    d="M324.666 119.768L323.578 118.712L61.407 380.584L62.4646 381.641L324.666 119.768Z"
                    fill="#AAB3DB"
                  />
                  <path
                    d="M268.462 512.065L267.374 513.122L5.20276 251.249L6.26039 250.163L268.462 512.065Z"
                    fill="#AAB3DB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_35_340">
                    <rect
                      width="425"
                      height="648"
                      fill="white"
                      transform="translate(-68)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="col-span-9">
            <TextWithImage />
            <Address />
            <PlainText />
            <Textcard />
          </div>
        </div>
      </div>
    </section>
  );
}
