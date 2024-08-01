'use client'
import CommonLayout from "@/components/CommonLayout";
import BreadCrumb from "@/components/innerpageCommon/BreadCrumb";
import { usePathname, useSearchParams } from 'next/navigation'

export default function Padalinys() {
  const pathanme = usePathname();

  console.log(pathanme);


  // breadcrumb data
  const data = [
    { name: "Titulinis", url: "/" },
    { name: "Kolektyvai", url: "/" },
    { name: "Liaudiškos muzikos kapela „Ringė", url: "/" },
    { name: "Kolektyvai", url: "/" },
  ];

  // menu
  const appieMenu = [
    { name: "Liaudiškos muzikos kapela „Ringė", url: "/" },
    { name: "Sportinių šokių kolektyvai„Viva“ ir „Mamba“", url: "/" },
    { name: "Liaudiškų šokių grupė „Gaja“", url: "/" },
    { name: "Šokių kolektyvas „Estetika", url: "/" },
    { name: "Pramoginių šokių kolektyvas Viva mergaitės", url: "/" },
    { name: "Lorem ipsum", url: "/" },
  ];
  // text with image data for

  const textWithImage = "/image/dynamic/11.jpg";
  const textWithDes = `Kolektyvas susikūrė 2010 metais. Dauguma kapelos muzikantų yra baigę muzikos mokyklas, kitus kolektyvo narius klausa apdovanojo gyvenimas. Kolektyvo repertuare skamba lietuvių liaudies kūriniai, populiarios dainos, romansai, dainuojamos Ignalinos krašto poetų sukurtos eilės.`;

  const plainText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </br> </br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `;

  return (
    <>
      <BreadCrumb data={data} title ={'Liaudiškos muzikos kapela „Ringė“'} />
      <CommonLayout
        menuList={appieMenu}
        textWithDes={textWithDes}
        textWithImage={textWithImage}
        plainText={plainText}
        pathanme={pathanme}
        kolektyvas
      />
    </>
  );
}
