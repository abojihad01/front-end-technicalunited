import React, { memo, useContext, useEffect } from "react";
import { ContextGlobal } from "../../ContextStore";
import logo from "../../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navigation } from "../../constants/FooterNavigation";
const Footer = memo(() => {
  const [load, setLoading] = React.useState(false);
  const Context = useContext(ContextGlobal);
  const navigate = useNavigate();
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const setSelectCat = Context.setSelectCat;
  const navigateTo = () => {
    navigate("/contact");
  };
  const location = useLocation();

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
    console.log("page to reload");
  }
  React.useEffect(() => {
    setSelectCat(location.pathname);
  }, []);

  return (
    <footer className={` bg-red-500 ${lan ? "font-primaryA" : "font-erasITC"}`}>
      <div className="p-20 md:p-10 bg-[#000000] text-gray-200">
        <div className="max-w-7xl md:container mx-auto">
          <div
            dir={lan ? "rtl" : "ltr"}
            className="grid grid-cols-1  md:grid-cols-12 gap-2"
          >
            <div className={`mb-5 lg:col-span-4 col-span-6 md:my-10 lg:px-7 `}>
              <Link to={"/"}>
                <img
                  className="h-[71px] w-[300px] mt-2 lg:mx-5 mb-5"
                  src={logo}
                />
              </Link>
              <p className="text-wildSandSolid font-normal leading-6 text-start text-sm">
                {!lan
                  ? "Our goal is to maximize the investments of our shareholders by continuously evolving and developing innovative products."
                  : "هدف الشركة المتحدة للأعمال التقنية في أن تصبح الأولى والرائدة في المجالات الأمنية على مستوى الشرق الأوسط، وكذلك تأمين البيئة الأمنة على مستوى الأفراد، الأعمال، المؤسسات، والقطاعات الحكومية"}
              </p>
              <p
                dir="ltr"
                className={`text-xl md:text-2xl lg:text-3xl font-bold text-[#D71921] ${
                  lan ? "text-end" : "text-start"
                } my-5`}
                style={{
                  whiteSpace: 'nowrap', // Maintain the white-space nowrap behavior
                  fontSize: '2rem',    // Adjust the font size as desired
                }}
              >
                (+966) 11 461 5299
              </p>
              <button
                className={`
                border border-[#fff] 
                p-3  md:mt-3 hover:bg-[#fff]
                hover:text-black text-center ${
                  !lan && "font-rajdhani font-bold uppercase"
                }`}
                onClick={navigateTo}
              >
                {!lan ? "Request with online form" : "تواصل معنا"}
              </button>
            </div>
            <div className="mb-5 col-span-4 flex flex-col md:items-center lg:items-start lg:ml-[100px]">
              <h4
                className={`pd-4 capitalize relative  text-[26px] pb-1 font-bold
                before:absolute before:bg-[#d71921] before:-bottom-1 before:h-[2px] before:w-[40px] before:content-['']
                ${
                  lan
                    ? "after:right-0 before:right-[12px]"
                    : "after:left-0 before:left-[12px]"
                }
                after:absolute after:bg-[#d71921] after:-bottom-[5px] after:h-[5px] after:w-[5px]  after:content-['']
                 `}
              >
                {!lan ? "Useful Links" : "روابط هامة"}
              </h4>
              <ul className=" text-white text-start md:text-start mt-[20px] ">
                {navigation.map((i, x) => (
                  <li
                    className="pb-4 "
                    key={i.toString()}
                    onClick={() => setSelectCat(i.href)}
                  >
                    <i
                      className={`fa fa-chevron-right text-[#C5282F] ${
                        lan ? "pl-3" : "pr-3"
                      }`}
                    ></i>
                    <Link
                      onClick={refreshPage}
                      refresh="true"
                      to={i.href}
                      className={`hover:text-[#C5282F] text-start ${
                        !lan && "font-rajdhani font-bold"
                      } font-medium`}
                    >
                      {!lan ? i.name : i.nameA}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5 lg:col-span-4 col-span-6 text-start flex flex-col lg:justify-between  ">
              <h4
                className={`pd-4 capitalize relative  text-[26px] pb-1 font-bold
                before:absolute before:bg-[#d71921] before:-bottom-1 before:h-[2px] before:w-[40px] before:content-['']
                ${
                  lan
                    ? "after:right-0 before:right-[12px]"
                    : "after:left-0 before:left-[12px]"
                }
                after:absolute after:bg-[#d71921] after:-bottom-[5px] after:h-[5px] after:w-[5px]  after:content-['']
                 `}
              >
                {!lan ? "get in touch" : "تواصل معنا"}
              </h4>
              <div
                className={`flex ${!lan ? "" : "gap-3 text-right"} 
                mt-10 md:mt-14 border-b border-solid border-b-[#ffffff14] pb-7 mb-3`}
              >
                <i className="fa fa-map-marker text-[20px] text-vividRed mx-3"></i>
                <p className="text-[14px] ">
                  {!lan ? "Technical United" : "الشركة المتحدة"} <br />
                  {!lan ? "P.O.Box 8368" : "الرقم البريدي 8368 "}
                  <br />
                  {!lan ? " Riyadh 11482" : "الرياض 11482,"}
                  <br />
                  {!lan
                    ? "Kingdam of Saudi Arabia"
                    : "المملكة العربية السعودية."}
                </p>
              </div>
              <div
                className={`flex ${
                  !lan ? "" : "gap-3 text-right"
                } items-center border-b border-solid border-b-[#ffffff14] md:pb-7`}
              >
                <i className="fa fa-envelope text-[20px] text-vividRed mx-3"></i>
                <p className="text-sm">
                  {!lan
                    ? " Email : info@technicalunited.com"
                    : " البريد الإلكتروني : info@technicalunited.com"}
                </p>
              </div>
              <br />
              <div className={`flex ${!lan ? "" : " gap-3 text-right"} pb-3`}>
                <i className="fa fa-phone text-[20px] text-vividRed mx-3"></i>
                {!lan ? (
                  <div>
                    <p className="	">Phone : (+966) 11 461 5299</p>
                    <p className="	">Fax: (+966) 11 461 1718</p>
                  </div>
                ) : (
                  <div>
                    <p className="	">الهاتف: 114615299 (966+)</p>
                    <p className="	">الفاكس: 114611718 (966+)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#000000] text-white px-10 text-sm">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-center items-center">
          {!lan ? (
            <div className="text-center mb-6">
              <div className="mb-6">Privacy Statement | Terms of Use</div>
              <div>Copyright © 2022 Technical United. All Rights Reserved</div>
            </div>
          ) : (
            <div className="text-center mb-6">
              <div className="mb-6">بيان الخصوصية | شروط الأستخدام</div>
              <div>حقوق النشر © ٢٠٢٢ الشركة المتحدة. كل الحقوق محفوظة</div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
});

export default Footer;
