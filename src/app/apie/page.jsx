import CommonLayout from "@/components/CommonLayout";
import BreadCrumb from "@/components/innerpageCommon/BreadCrumb";

export default function Apie() {
  // breadcrumb data
  const data = [
    { name: "Titulinis", url: "/" },
    { name: "Apie mus", url: "/" },
  ];

  // menu
  const appieMenu = [
    { name: "Apie mus", url: "/" },
    { name: "lorem Ipsom", url: "/" },
    { name: "lorem Ipsom", url: "/" },
  ];
  // text with image data for

  const textWithImage = "/image/dynamic/6.jpg";
  const textWithDes = `Tuometiniai kultūros namai buvo įkurti apie 1976 metus. Dabartinis Ignalinos rajono kultūros centras puoselėja, skleidžia įvairias kultūros sritis ir žanrus. Mūsų tikslas – puoselėti etninę kultūrą, mėgėjų meną, inicijuoti, rengti ir įgyvendinti kultūrinius, meninius, edukacinius projektus, plėtoti šviečiamąją (edukacinę), pramoginę veiklą, tenkinti bendruomenės kultūrinius poreikius, organizuoti profesionalaus meno sklaidą. Kultūros centras ugdo įvairių visuomenės socialinių bei amžiaus grupių poreikį menui, dalyvavimą kūrybinėje veikloje, profesionalaus meno pažinimui bei užtikrina visapusišką Ignalinos krašto meninės kultūros sklaidą šalyje ir užsienyje.`;

  const plainText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </br> </br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `;

  return (
    <>
      <BreadCrumb data={data} title={'Apie mus'} />
      <CommonLayout
        menuList={appieMenu}
        textWithDes={textWithDes}
        textWithImage={textWithImage}
        plainText={plainText}
        apie
      />
    </>
  );
}
