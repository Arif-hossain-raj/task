import Image from "next/image";

export default function ImgBox({image , text}) {
  return (
    <div className="wrapeer relative">
      <div className="image">
        <Image src={image} height={401} width={405} />
      </div>
      <div className="content max-w-[360px] h-[120px] bg-[white] m-[20px] p-[27px] absolute bottom-0 flex items-center gap-[30px] rounded-[10px]">
        <div className="text">
          <h5 className="text-[18px] font-[600] leading-[26px]">{text}</h5>
        </div>
        <div className="svg">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="38.3962"
              height="38.3962"
              rx="19.1981"
              stroke="#AAB3DB"
            />
            <path
              d="M27.1982 13.0314V23.8644C27.1982 24.0854 27.1104 24.2974 26.9542 24.4537C26.7979 24.6099 26.5859 24.6977 26.3649 24.6977C26.1439 24.6977 25.932 24.6099 25.7757 24.4537C25.6194 24.2974 25.5316 24.0854 25.5316 23.8644V15.0428L13.6216 26.9539C13.4652 27.1103 13.2531 27.1981 13.032 27.1981C12.8109 27.1981 12.5988 27.1103 12.4424 26.9539C12.2861 26.7976 12.1982 26.5855 12.1982 26.3643C12.1982 26.1432 12.2861 25.9311 12.4424 25.7748L24.3535 13.8647H15.5319C15.3109 13.8647 15.099 13.7769 14.9427 13.6207C14.7864 13.4644 14.6986 13.2524 14.6986 13.0314C14.6986 12.8104 14.7864 12.5985 14.9427 12.4422C15.099 12.2859 15.3109 12.1981 15.5319 12.1981H26.3649C26.5859 12.1981 26.7979 12.2859 26.9542 12.4422C27.1104 12.5985 27.1982 12.8104 27.1982 13.0314Z"
              fill="#2E3192"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
