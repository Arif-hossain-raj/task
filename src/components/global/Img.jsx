

export const Img = ({ src, objectFit, height, width, banner, alt, left, margin, right, top, bottom }) => {
  return (
    <div
      className="relative image h-[full]"
      style={{
        paddingTop: width && height ? `calc(${height} / ${width} * 100%)` : 0,
      }}
    >
      <img
        src={src ? src : "images/static/blur.jpg"}
        alt={alt || ""}
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
        style={{ objectFit: objectFit || "cover" }}
      />
    </div>
  );
};

export default Img;
