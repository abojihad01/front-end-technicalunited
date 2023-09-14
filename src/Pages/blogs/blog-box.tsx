import React from "react";
import moment from "moment";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { ContextGlobal } from "../../ContextStore";

type BoxProps = {
  title?: string;
  img: string;
  dateAt?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.HTMLProps<HTMLElement>["className"];
  isActiveFeture?: boolean;
  isFillW?: boolean;
  isShadow?: boolean;
};
const BlogBox = ({
  title,
  img,
  dateAt,
  onClick,
  style,
  isActiveFeture = true,
  isFillW = true,
  isShadow = true,
}: BoxProps) => {
  const Context = React.useContext(ContextGlobal);
  const lan = Context.Lan;
  const dateAtArr =
    (dateAt && moment(dateAt).format("DD MMM").split(" ")) ?? [];
  return (
    <article
      className={`
      group flex flex-col md:col-span-4  justify-between md:justify-normal 
      ${isFillW && "lg:w-full"} lg:h-[520px] col-span-1 mt-2 bg-white ${
        isShadow && "shadow-blog-box"
      } cursor-pointer ${style}
      ${lan ? "font-primaryA" : "font-erasITC"}`}
      onClick={onClick}
    >
      <div className="w-full overflow-hidden">
        <img
          src={img}
          alt="box"
          className="w-full h-full md:h-[120%] object-contain transition ease-in-out delay-150 group-hover:-translate-y-4 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col relative">
        {dateAt && (
          <div className="inline-block px-4 py-2  bg-red-600 absolute left-8 -top-8 text-center uppercase">
            <h1 className="text-sm md:text-3xl md:leading-7 tracking-[1px] text-white font-rajdhani font-bold">
              {dateAtArr[0]}
            </h1>
            <h1 className="text-xs leading-3  text-white">{dateAtArr[1]}</h1>
          </div>
        )}
        {title && (
          <div className="mt-12 mx-7" dir="ltr">
            <h1 className="text-lg md:text-[24px]">{title}</h1>
          </div>
        )}
        {isActiveFeture && (
          <div
            className="flex border-t mx-2 md:mx-3 lg:mx-6 mt-5 flex-row "
            dir="ltr"
          >
            <div className="flex flex-row py-3  items-center">
              <MdOutlinePersonOutline className="text-vividRed  text-base lg:text-lg" />
              <h5 className="text-xs lg:text-sm ml-1 font-light text-doveGray">
                Loctions
              </h5>
            </div>
            <div className="w-6" />
            <div className="flex flex-row py-3 items-center">
              <TbMessageCircle2 className="text-vividRed text-base lg:text-lg" />
              <h5 className="text-xs lg:text-sm ml-1 font-light text-doveGray">{`Comments (${0})`}</h5>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default React.memo(BlogBox);
