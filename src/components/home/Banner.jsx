import Image from "next/image";
import Img from "../global/Img";
import Button from "../global/Button";

export default function Banner() {
  return (
    <section className="banner relative">
      <div className="wrapper custom-before">
        <Image src="/image/dynamic/banner.jpg" height={585} width={1440} />
      </div>
      <div className="content  max-w-screen-xl mx-auto px-4">
        <div className="absolute top-1/4 z-50">
          <div className="text">
            <h2>Pamatyk save <br /> kultūroje!</h2>
          </div>

          <div className="buttons grid grid-cols-3 gap-[12px] pt-[35px] ">
            <Button text={"Renginiai"} border={'border border-white'} width={'145px'} svg/>
            <Button text={"Kolektyvai"} border={'border border-white'} width={'145px'} svg  bg={'#FFF'}/>
            <Button text={"Padaliniai"} border={'border border-white'} width={'145px'} svg />
            <Button text={"Projektai"}  border={'border border-white'} width={'145px'} svg/>
            <Button text={"Savanorystė"} border={'border border-white'} width={'145px'} svg/>
          </div>
        </div>
      </div>
    </section>
  );
}
