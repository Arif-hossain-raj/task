"use client";

import Link from "next/link";
export default function Button({ text, border,  bg = 'bg-transparent' , svg , width , color= 'text-[white]' , fill = "white" }) {
  return (
    <div className={`w-[145px]`}>
      <Link
        className={`${bg} ${color} rounded-[32px] px-[24px] py-[13px] ${border ?? border} flex items-center gap-[5px] justify-center`}
        href="/"
      >
        {text}
        {svg && (
        <svg
          width="8"
          height="11"
          viewBox="0 0 8 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773437C1.44922 0.417969 2.02344 0.417969 2.35156 0.773437L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z"
            fill={`${fill}`}
          />
        </svg>
      )}
      </Link>
    </div>
  );
}
