"use client";

import Link from "next/link";

export default function Button() {
  return (
    <div>
      <Link
        className="bg-[#2E3192] text-[white] rounded-[32px] px-[24px] py-[13px]"
        href="/"
      >
        Kontaktai
      </Link>
    </div>
  );
}
