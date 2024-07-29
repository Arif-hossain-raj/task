import Image from "next/image";

export default function TextWithImage({textWithImage , textWithDes}) {
  return (
    <div className="text-with-image grid grid-cols-2 gap-[75px]">
      <div className="text my-auto">
        <p className="">
          {textWithDes && textWithDes}
        </p>
      </div>

      <div className="image">
        <Image src={textWithImage && textWithImage} height={456} width={456} />
      </div>
    </div>
  );
}
