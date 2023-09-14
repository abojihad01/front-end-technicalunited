import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { ContextGlobal } from "../../ContextStore";
type ContactBoxProps = {
  style?: React.ComponentProps<"div">["className"];
};
export const BoxSearch = ({ style }: ContactBoxProps) => {
  const Context = React.useContext(ContextGlobal);
  const [data, setData] = React.useState("");
  const setSerch = Context.setSerch;
  const lan = Context.Lan;

  return (
    <div
      dir={lan ? "rtl" : "ltr"}
      className={`flex flex-col h-40 bg-wildSandSolid my-3 justify-start font-medium px-5 pt-5 text-[#070707] ${style}`}
    >
      <h1 className="text-[26px] ">{!lan ? "Search" : "ابحث"}</h1>
      <div className="w-full flex flex-row items-center mb-3">
        <div className="h-[6px] w-[6px] bg-[#C5282F]" />
        <div className="h-[2px] w-12 bg-[#C5282F] ml-1" />
      </div>
      <div className="flex ">
        <input
          className="p-2 w-full"
          type="text"
          placeholder="Search"
          onChange={(e) => setData(e.target.value)}
        />
        <button className="p-2  bg-vividRed px-5">
          <BsSearch color="#fff" className="text-[1em]" />
        </button>
      </div>
    </div>
  );
};

export default BoxSearch;
