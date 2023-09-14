import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch, BsLinkedin } from "react-icons/bs";
import { Search } from "../../pages/Search";
import icon1 from "../../assets/icons/A.png";
import Logo1 from "../../assets/logo1.png";
import { CgClose, CgMenu } from "react-icons/cg";
import NavMobile from "./NavMobile";
import { ContextGlobal } from "../../ContextStore";
import { navigation } from "./navigationData";

const Header = () => {
  const Context = useContext(ContextGlobal);
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [bg, setBg] = useState(false);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const {
    openSearch,
    setSearch,
    mobileNav,
    setMobileNav,
    selectCat,
    setSelectCat,
  } = Context;
  const location = useLocation();
  const navigate = useNavigate();

  const [Tname, setTname] = useState("");
  const [Tname1, setTname1] = useState("");
  const pagePath = location.pathname.replace("/", "");

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = openSearch ? "hidden" : "visible";
    document.title = lan
      ? "الشركة المتحدة للأعمال التقنية"
      : "Technical United – Security Solutions";
    setSelectCat(pagePath);
  }, [openSearch, lan, pagePath, setSelectCat]);

  const handeOOpen = (i) => {
    setTname(i);
    setOpen(true);
  };

  const handeOOpen1 = (i) => {
    setTname1(i);
    setOpen1(true);
  };

  const handeUnpen = () => {
    setOpen(false);
  };

  const handeUnpen1 = () => {
    setOpen1(false);
  };

  return (
    <div
      className={`${lan ? "font-primaryA" : "font-Blair"} ${
        !bg ? "pb-[100px] md:pb-[65px]" : "pb-0"
      } `}
      dir={`${!lan ? "" : "rtl"}`}
    >
      <Search visible={openSearch} />
      <div
        className={`hidden ${
          !bg ? "lg:flex" : "hidden"
        } md:container md:mx-auto p-2 `}
      >
        <Link to={"/"}>
          <img
            className={`h-6 lg:h-32 md:h-16 lg:w-80 object-contain ${
              lan ? "md:pr-4" : "md:pl-4"
            }`}
            src={Logo1}
            alt=""
          />
        </Link>
      </div>
      <header
        className={`
        ${
          bg
            ? "bg-white lg:bg-primary lg:h-[68px] duration-500 fixed z-[99] "
            : " bg-white md:py-0 lg:h-[68px] "
        }
        left-0 w-full h-[100px] md:h-[130px] transition-all ${
          mobileNav && "fixed z-[99]"
        }  lg:bg-primary lg:px-[30px] duration-300 fixed z-[99]`}
      >
        <div className=" md:container md:mx-auto h-full  ">
          <div
            className={`flex items-center  ${
              lan ? "" : "flex-row"
            } justify-between h-full  mt-3 lg:mt-0  px-3`}
          >
            <Link to="/" className="lg:hidden ">
              <img className="h-[80px] md:h-[100px]" src={Logo1} alt="" />
            </Link>
            <div
              onClick={() => setMobileNav(!mobileNav)}
              className="lg:hidden text-[25px] py-1 px-2 md:text-[45px] lg:text-3xl text-white cursor-pointer bg-[#f5f5f5] "
            >
              {mobileNav ? <CgClose color="black" /> : <CgMenu color="black" />}
            </div>
            <nav
              className="hidden  lg:flex h-[140%] "
              onMouseLeave={() => handeUnpen()}
            >
              <ul
                className={`lg:flex  ${
                  lan ? "" : "flex-row"
                } lg: gap-x-10 items-center  h-full `}
              >
                {navigation.map((item, index) => {
                  return (
                    <li className=" " key={`${index}-${item.toString()}`}>
                      <a
                        className={`uppercase hover:text-vividRed tracking-[1px] transition-all  text-sm  font-bold 
                        ${bg ? "text-white" : "text-white"}`}
                        onMouseOver={() => {
                          item.submneu && handeOOpen(item.name);
                          !item.submneu && handeUnpen();
                        }}
                      >
                        <Link
                          to={`/${item.href === "company" ? "" : item.href}`}
                          className={`
                          
                          ${
                            location.pathname === "/" + item.href ||
                            selectCat === item.href ||
                            location.pathname.match(item.href)?.[0] ===
                              item.href ||
                            (location.pathname === "/" &&
                              item.href === "company")
                              ? "text-vividRed"
                              : ""
                          }
                          `}
                          onClick={() => setSelectCat(item.href)}
                        >
                          {lan == false ? item.name : item.Aname}
                        </Link>
                      </a>
                      {item.name == Tname ? (
                        <ul
                          className={`absolute duration-300 w-[320px] content-start  float-left bg-white mt-7 border-t-[3px] border-red-600 drop-shadow-md ${
                            open ? "block" : "hidden"
                          } ${!lan ? "" : " text-right "}`}
                          onMouseOver={() => {
                            item.submneu && handeOOpen(item.name);
                          }}
                          onMouseLeave={() => handeUnpen()}
                        >
                          {item.submneu?.map((i, x) => (
                            <li
                              key={i.toString()}
                              // onClick={() => {
                              //   setSelectCat(item.href);
                              // }}
                              onMouseLeave={() => handeUnpen1()}
                              onMouseOver={() => {
                                item.submneu && handeOOpen(item.name);
                                !item.submneu && handeUnpen();
                              }}
                              className="flex  border-b-[1px] border-[#f0f0f0] font-bold text-doveGray hover:text-vividRed "
                            >
                              <Link
                                onClick={() => {
                                  handeUnpen();
                                  setSelectCat(item.href);
                                }}
                                to={i.href}
                              >
                                <p
                                  className={` 
                                  text-sm
                                   whitespace-nowrap	
                                  ${
                                    !lan
                                      ? "hover:translate-x-6"
                                      : "hover:-translate-x-6"
                                  } duration-300 pt-[17px] pb-[15px] px-4 `}
                                  onMouseOver={() => {
                                    i.submneu && handeOOpen1(i.subName);
                                  }}
                                >
                                  {!lan ? i.subName : i.subNameA}
                                </p>
                              </Link>
                              {i.subName == Tname1 ? (
                                <ul
                                  onMouseOver={() => {
                                    i.submneu && handeOOpen1(i.subName);
                                  }}
                                  onMouseLeave={() => handeUnpen1()}
                                  className={` absolute duration-300  w-[320px] content-start bg-white   drop-shadow-md ${
                                    !lan ? "ml-[320px]" : "mr-[320px]"
                                  } border-t-[3px] border-red-600  ${
                                    open1 ? "block" : "hidden"
                                  }`}
                                >
                                  {i.submneu?.map((items, indexs) => (
                                    <li
                                      key={indexs}
                                      className="p-3 flex w-[320px] border-b-[1px] border-[#ddd] text-[#a2a2a2] hover:text-vividRed "
                                      onMouseLeave={() => handeUnpen1()}
                                    >
                                      <Link
                                        onClick={() => handeUnpen1()}
                                        to={items.href}
                                      >
                                        <p
                                          className={`w-[290px]  ${
                                            !lan
                                              ? "hover:translate-x-6"
                                              : "hover:-translate-x-6"
                                          }  duration-300 text-sm`}
                                          onMouseOver={() => {
                                            i.submneu && handeOOpen1(i.subName);
                                          }}
                                        >
                                          {!lan
                                            ? items.subName
                                            : items.subNameA}
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
              </ul>
            </nav>
            <div
              className={`hidden lg:flex items-center ${
                lan ? "" : "flex-row"
              } gap-3`}
            >
              <div
                onClick={() => {
                  setSearch(!openSearch);
                }}
                className="flex bg-[#424242] h-11 w-10 justify-center items-center hover:bg-vividRed"
              >
                <BsSearch className=" text-lg text-white" />
                {/* <i className="fas fa-search"></i> */}
              </div>
              <a
                className="flex bg-[#424242] h-11 w-10 justify-center items-center hover:bg-vividRed"
                href="https://www.linkedin.com/company/technical-united-works-co./?originalSubdomain=sa"
              >
                <BsLinkedin className=" text-lg text-white" />
              </a>
              <div
                onClick={() => {
                  setlan(!lan);
                }}
                className="flex bg-[#424242] h-11 w-10 justify-center items-center hover:bg-vividRed"
              >
                {!lan ? (
                  <h1 className=" text-white font-itcMedium text-[19px] text-center">
                    AR
                  </h1>
                ) : (
                  <h1 className=" text-white font-itcMedium text-[19px] text-center">
                    EN
                  </h1>
                )}
              </div>
            </div>
            <div
              className={`${
                mobileNav ? " top-0" : " -top-full"
              } lg:hidden fixed mt-[110px] md:w-[85%] w-[93%] md:mt-[135px] transition-all`}
            >
              <NavMobile />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
