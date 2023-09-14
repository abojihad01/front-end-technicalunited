import React from "react";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const TitleHoveContainer = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link
      className="flex flex-col w-full items-center group/one col-span-4"
      to={to}
    >
      <h3 id="fms" className="peer/one mb-5 text-sm md:text-lg lg:text-[26px]">
        {title}
      </h3>
      <div
        className="
          relative w-full flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out delay-400 opacity-0 
          peer-hover/one:opacity-100 hover:opacity-100 h-14 "
      >
        <button
          className="
                bg-[#D71921] group/link 
                hover:bg-white scale-105 p-2 group-hover/one:scale-150
                group-hover/one:delay-400 group-hover/one:ease-in-out group-hover/one:duration-500 "
        >
          <FiLink
            className="text-white group-hover/link:text-[#D71921] text-sm
                  group-hover/one:delay-200 group-hover/one:ease-in-out group-hover/one:duration-200"
          />
        </button>
        <div
          className="absolute block box-border w-6 h-6 border-[#d71921] border-solid
                border-r-[1px] border-b-[1px] top-1 right-3 group-hover/one:right-0 bg-transparent 
                delay-500 duration-500 group-hover/one:-top-1"
        />
        <div
          className="
                  absolute block box-border w-6 h-6 border-[#d71921] border-solid
                  border-l-[1px] border-b-[1px] top-1 left-3 group-hover/one:left-0 bg-transparent
                  group-hover/one:-top-1 delay-500 duration-500"
        />
        <div
          className="
                absolute block box-border w-6 h-6 border-[#d71921] border-solid
                border-l-[1px] border-t-[1px] bg-transparent bottom-1 left-3 group-hover/one:left-0 
                delay-500 duration-500 group-hover/one:-bottom-1"
        />
        <div
          className="absolute block box-border w-6 h-6 border-[#d71921] border-solid
                border-r-[1px] border-t-[1px] bg-transparent bottom-1 right-3 group-hover/one:right-0 
                delay-500 duration-500 group-hover/one:-bottom-1"
        />
      </div>
    </Link>
  );
};

export default TitleHoveContainer;
