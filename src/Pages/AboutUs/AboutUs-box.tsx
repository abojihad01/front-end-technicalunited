import React, { useContext } from "react";
import { ContextGlobal } from "../../ContextStore";

type BoxProps = {
  title: string;
  img: string;
  dateAt?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
  subTitle?: string
};
const AboutUsBox = ({ title, img, dateAt, onClick, style, subTitle }: BoxProps) => {
  const { Lan, setLan } = useContext(ContextGlobal);

  return (
    <article
      className={` ${!Lan ? "font-erasITC" : "font-primaryA"}
      group flex flex-col w-[200px]  md:w-[246px] justify-between md:justify-normal 
      lg:w-[346px]  col-span-1 mt-2 bg-white cursor-pointer pb-3 ${style}`}
      onClick={onClick}
    >
      <div className="w-full overflow-hidden">
        <img
          src={img}
          alt="box"
          className="
              w-full object-cover transition ease-in-out delay-150 group-hover:-translate-y-3 
              group-hover:rotate-12 group-hover:scale-150 group-hover:brightness-[.8]"
        />
      </div>
      <div className="flex flex-col px-2 bg-[#f9f9f9] ">
        <h1 className="text-base md:text-lg lg:text-[30px] mt-1 md:mt-3">
          {title}
        </h1>
        {subTitle && <span className="text-sm md:text-base text-left lg:text-[17px] text-doveGray mt-3 md:mt-6">
          {subTitle}
        </span>
        }
        <button className={`bg-[#f4524d] ${ Lan && "self-end"} text-white text-xs md:text-sm h-[30px] md:h-[43px] w-[114px] md:w-[144px] mt-3 md:mt-6 rounded mb-3`}>
          { Lan ? "اقرا المزيد" :"Read more"}
        </button>
      </div>
    </article>
  );
};

export default React.memo(AboutUsBox);
