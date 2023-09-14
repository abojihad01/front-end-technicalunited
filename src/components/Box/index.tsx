import React, { useContext } from "react";
import { ContextGlobal } from "../../ContextStore";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaImage } from 'react-icons/fa'


type BoxProps = {
  title: string;
  richDescription: string;
  img: string;
  icon: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?:   React.HTMLProps<HTMLElement>["className"],
  styleIconContainer?:   React.HTMLProps<HTMLElement>["className"],
};
const Box = ({ title, richDescription, img, icon, onClick, style, styleIconContainer }: BoxProps) => {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  return (
    <article
      className={`group flex flex-col col-span-1 mt-2 cursor-pointer ${style}`}
      onClick={onClick}
    >
      <div className="w-auto min-h-[80%] md:min-h-[50%] h-auto overflow-hidden">
        <LazyLoadImage
          src={img}
          // delayTime={500}
          placeholder={<FaImage />}
          alt="box"
          className="w-full h-full object-cover relative transition ease-in-out delay-150 group-hover:-translate-y-4 group-hover:scale-125"
        />
      </div>
      <div
        className="flex flex-col items-center mx-4 pb-6 px-6 relative bg-white -mt-6 drop-shadow-[0_1px_25px_rgba(0,0,0,0.15)]
            transition ease-in-out delay-150 group-hover:-translate-y-3">
        <div className={`flex w-12 h-12 md:w-[80px] md:h-[80px] rounded-[40px] bg-red-600 items-center justify-center -mt-5 md:-mt-8 ${styleIconContainer}`}>
          <LazyLoadImage
            src={icon}
            alt="logi"
            placeholder={<FaImage />}
            className="object-contain h-6 w-6 md:h-6 md:w-6 lg:h-[37px] lg:w-[34px]"
          />
        </div>
        <h1 className={`md:text-2xl text-xl ${lan ? "font-medium":"font-semibold"} md:leading-9 pb-1 mt-5`}>{title}</h1>
        <p className={`md:text-17px text-sm ${lan && "font-medium text-right" } md:leading-6 text-veryDarkGray text-center mx-2 md:mx-5`}>
          {richDescription}
        </p>
        <button className={`text-vividRed text-[8px] md:text-[14px] mt-3 uppercase ${!lan && "font-rajdhani"} font-extrabold`}>
          {lan == false ? "Read more" : " المزيد..."}
        </button>
      </div>
    </article>
  );
};

export default React.memo(Box);
