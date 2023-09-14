import React from "react";

type HeaderPagesProps = {
  title: string;
  img?: string;
};
const HeaderPages = ({ title, img = require('../../assets/imgs/Our-Services-Banner-Image.png') }: HeaderPagesProps) => {
  return (
    <div className="relative flex flex-col md:h-[350px] h-56 w-full justify-center items-center">
      <h1 className="static md:text-5xl text-3xl text-white z-[2]">{title}</h1>
      <img
        src={img}
        alt="services"
        className="absolute object-cover h-full w-full bottom-0"
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(HeaderPages);
