import React from "react";
import { FiLink } from "react-icons/fi";
import { ContextGlobal } from "../../ContextStore";

type BoxProductProps = {
  img?: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const BoxProduct = ({ img, title, onClick }: BoxProductProps) => {
  const { Lan: lan } = React.useContext(ContextGlobal);

  return (
    <div
      className="relative w-[360px] h-[420px] md:col-span-2 lg:col-span-4 overflow-hidden group leading-7"
      onClick={onClick}
    >
      <img src={img} alt={title} className="object-cover h-full" />
      <div className="inset-0 absolute flex transition-all ease-in-out duration-500 group-hover:bg-[#09162A] p-3">
        <div
          id="corner"
          className="relative z-10 hidden group-hover:flex transition ease-in-out delay-150 duration-700 justify-center items-center"
        >
          <button
            className="
                  bg-[#D71921] group/link hover:bg-white p-3 scale-50 group-hover:scale-100
                  transform transition-transform duration-1000 delay-1000 "
          >
            <FiLink className="text-white group-hover/link:text-[#D71921]" />
          </button>
        </div>
      </div>
      <div className="inset-0 absolute flex flex-col justify-end bg-product-blur">
        <h3
          className={`text-[26px] text-white  absolute ${
            lan ? "right-5" : "left-5"
          } bottom-14 px-5`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default BoxProduct;
