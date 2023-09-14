import { useState, useContext } from "react";
import { CgClose } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";

export const Search = ({ visible = false }: { visible: boolean }) => {
  let [color, setColor] = useState("#ffffff");
  const Context = useContext(ContextGlobal);
  const [data, setData] = useState("");
  const { openSearch, setSearch, searchText, setSearchText } = Context;
  const lan = Context.Lan;

  const handelSearching = () => {
    setSearchText(data);
    console.log(data, "this data");
  };
  return (
    visible && (
      <div
        className={`h-screen w-full absolute z-[100]  bg-[rgba(0,0,0,0.6)] ${
          lan ? "font-primaryA" : "font-erasITC"
        }`}
        dir={lan ? "rtl" : "ltr"}
      >
        <div className="md:container md:mx-auto">
          <div
            onClick={() => {
              setSearch(false);
            }}
            className="  p-3 mt-3 flex justify-end "
          >
            <CgClose color="#fff" size={"30"} />
          </div>
          <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full flex">
              <input
                onChange={(e) => setData(e.target.value)}
                className="h-[55px] w-[100%] px-[20px] font-normal text-xl"
                type="text"
                placeholder={lan ? "بحث..." : "Enter Search Keyword..."}
              />
              <button
                onClick={handelSearching}
                className="p-2 bg-vividRed px-5"
              >
                <Link to={"resultsearch"} onClick={() => setSearch(false)}>
                  <BsSearch color="#fff" className="text-[1.5em]" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
