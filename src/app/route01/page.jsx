'use cliet'
import CommonLayout from "@/components/CommonLayout";
import BreadCrumb from "@/components/innerpageCommon/BreadCrumb";

export default function Padalinys() {
  // breadcrumb data
  const data = [
    { name: "Titulinis", url: "/" },
    { name: "Padaliniai", url: "/" },
    { name: "Ceikinių padalinys", url: "/" },
  ];

  // padalinys menu data
  const padaMenu = [
    { name: " Ceikinių padalinys", url: "/" },
    { name: "Didžiasalis", url: "/" },
    { name: "Dūkštas", url: "/" },
    { name: "Kaniūkai", url: "/" },
    { name: "Lorem ipsum", url: "/" },
  ];

  // text with image data

  const textWithImage = "/image/dynamic/5.jpg";
  const textWithDes = `Ignalinos rajono kultūros centro Ceikinių padalinys kitaip dar
          vadinamas kaimo seklyčia. Čia vyksta skirtingos veiklos: parodos,
          edukacijos, popietės, koncertai, minėjimai, diskotekos, įvairūs
          renginiai. Didelis dėmesys skiriamas senųjų amatų puoselėjimui ir
          pristatymui, stengiamasi, jog įvairia veikla užsiimančių Ceikinių
          krašto gyventojų darbai būtų matomi ir žinomi ne tik Ceikinių
          seniūnijoje. Tad rengiami įvairūs video pristatymai apie šio krašto
          žmonių amatus, veikiančias parodas, edukacijas. Yra susikūręs ne
          vienas saviveiklininkų kolektyvas.`;

  const plainText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  return (
    <>
      <BreadCrumb data={data} title={'Ceikinių padalinys'} />
      <CommonLayout
        menuList={padaMenu}
        textWithDes={textWithDes}
        textWithImage={textWithImage}
        plainText={plainText}
        padalinys
      />
    </>
  );
}
