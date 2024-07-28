import Image from "next/image";

export default function TextWithImage() {
  return (
    <div className="text-with-image grid grid-cols-2 gap-[75px]">
      <div className="text my-auto">
        <p className="">
          Ignalinos rajono kultūros centro Ceikinių padalinys kitaip dar
          vadinamas kaimo seklyčia. Čia vyksta skirtingos veiklos: parodos,
          edukacijos, popietės, koncertai, minėjimai, diskotekos, įvairūs
          renginiai. Didelis dėmesys skiriamas senųjų amatų puoselėjimui ir
          pristatymui, stengiamasi, jog įvairia veikla užsiimančių Ceikinių
          krašto gyventojų darbai būtų matomi ir žinomi ne tik Ceikinių
          seniūnijoje. Tad rengiami įvairūs video pristatymai apie šio krašto
          žmonių amatus, veikiančias parodas, edukacijas. Yra susikūręs ne
          vienas saviveiklininkų kolektyvas.
        </p>
      </div>

      <div className="image">
        <Image src={"/image/dynamic/5.jpg"} height={456} width={456} />
      </div>
    </div>
  );
}
