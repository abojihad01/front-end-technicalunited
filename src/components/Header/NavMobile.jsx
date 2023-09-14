import React, { useState, useEffect, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";
import { navigation } from "./navigationData";
const NavMobile = memo(() => {
  const [Tname, setTname] = useState("");
  const [open, setOpen] = useState(false);
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const [Tname1, setTname1] = useState("");
  const [open1, setOpen1] = useState(false);
  const { mobileNav, setMobileNav } = Context;

  const handeOOpen = (i) => {
    setTname(i);
    setOpen(true);
  };

  const handeUnpen = () => {
    setOpen(false);
  };

  const handeOOpen1 = (i) => {
    setTname1(i);
    setOpen1(true);
  };

  const handeUnpen1 = () => {
    setOpen1(false);
  };

  return (
    <nav 
      className={`bg-white shadow-2xl ${lan ? "font-primaryA" : 'font-erasITC'}`}>
      <ul className=" flex flex-col items-start p-2 ">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="p-3 border-b-[1px] border-b-[#e8e8e8] w-full">
              <div className="flex justify-between">
                <a
                  className="text-sm capitalize text-[#0a172a] font-semibold"
                  onClick={() => {
                    open == true
                      ? handeUnpen("")
                      : item.submneu && handeOOpen(item.name);
                    !item.submneu && setMobileNav(false);
                  }}
                >
                  <Link to={`/${item.href}`}>
                    {!lan ? item.name : item.Aname}
                  </Link>
                </a>

                <a
                  className={`bg-[#f5f5f5] px-2 text-[12px] text-[#929292] ${
                    !item.submneu && "hidden"
                  }`}
                  onClick={() => {
                    open == true
                      ? handeUnpen("")
                      : item.submneu && handeOOpen(item.name);
                    !item.submneu && setMobileNav(false);
                  }}
                >
                  {!open ? "+" : "-"}
                </a>
              </div>
              {item.name == Tname ? (
                <ul
                  className={` duration-300 text-[14px] mt-1 divide-y  ${
                    open ? "block" : "hidden"
                  } ${!lan ? "" : "text-right"}`}
                  onMouseOver={() => {
                    item.submneu && handeOOpen(item.name);
                  }}
                >
                  {item.submneu.map((i, x) => (
                    <li
                      key={x}
                      className="p-3 border-[#e8e8e8] text-[#0a172a] hover:text-vividRed"
                    >
                      <p
                        className=" text-[14px] capitalize "
                        onClick={() => {
                          open1 == true
                            ? handeUnpen1("")
                            : i.submneu && handeOOpen1(i.subName);
                          !i.submneu && setMobileNav(false);
                        }}
                      >
                        <Link to={i.href}>{!lan ? i.subName : i.subNameA}</Link>
                      </p>
                      {i.subName == Tname1 ? (
                        <ul
                          onClick={() => {
                            i.submneu && handeOOpen1(i.subName);
                          }}
                          onMouseLeave={() => handeUnpen1(" ")}
                          className={` duration-300 w-full content-start drop-shadow-md   ${
                            open1 ? "block" : "hidden"
                          }`}
                        >
                          {i.submneu.map((items, indexs) => (
                            <li
                              key={indexs}
                              className="p-3 flex  border-b-[1px] border-[#ddd] text-[#a2a2a2] hover:text-vividRed "
                              onMouseLeave={() => handeUnpen1(" ")}
                            >
                              <Link
                                onClick={() => handeUnpen1(" ")}
                                to={items.href}
                              >
                                <p
                                  className={`${
                                    !lan
                                      ? "hover:translate-x-6"
                                      : "hover:-translate-x-6"
                                  }  duration-300 text-sm`}
                                  onMouseOver={() => {
                                    i.submneu && handeOOpen1(i.subName);
                                  }}
                                  onClick={() => {
                                    setMobileNav(false);
                                  }}
                                >
                                  {!lan ? items.subName : items.subNameA}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
        <li>
          {" "}
          {/* <div
            onClick={() => {
              setlan(!lan);
            }}
            className="flex bg-[#424242] h-11 w-10 justify-center items-center hover:bg-vividRed mt-3"
          >
            {!lan ? (
              // <img src={icon1} />
              <h1 className=" text-white font-medium text-[25px]">A</h1>
            ) : (
              <h1 className=" text-white font-medium text-[25px]">E</h1>
            )}
          </div> */}
        </li>
      </ul>
    </nav>
  );
});

export default NavMobile;
