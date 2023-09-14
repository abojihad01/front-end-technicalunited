import React, { memo, useContext } from "react";
import { ContextGlobal } from "../../ContextStore";
import logo from "../../assets/logo.png";

const Footer = memo(() => {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const navigation = [
    {
      name: "ِAbout Us",
      nameA: "عن الشركة ",

      href: "home",
    },
    {
      name: "Coverage",
      nameA: "التغطية",

      href: "about",
    },
    {
      name: "Served Sectors",
      nameA: "قطاعات الخدمات",

      href: "features",
    },
    {
      name: "Services",
      nameA: "الخدمات",

      href: "contact",
    },
    {
      name: "Products",
      nameA: "المنتجات",

      href: "contact",
    },
    {
      name: "Careers",
      nameA: "التوظيف",

      href: "contact",
    },
    {
      name: "Contact us",
      nameA: "اتصل بنا",

      href: "contact",
    },
  ];
  return (
    <footer className=" bg-red-500">
      <div className="p-10 bg-[#000000] text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-2">
            <div className={`mb-5 `}>
              <img src={logo} />
              <p className="text-gray-500 text-start">
                {!lan
                  ? "Our goal is to maximize the investments of our shareholders by continuously evolving and developing innovative products."
                  : "هدف الشركة المتحدة للأعمال التقنية في أن تصبح الأولى والرائدة في المجالات الأمنية على مستوى الشرق الأوسط، وكذلك تأمين البيئة الأمنة على مستوى الأفراد، الأعمال، المؤسسات، والقطاعات الحكومية"}
              </p>
              <p className="text-[20px] text-[#C5282F] text-center ">
                (+966) 114615299
              </p>
              <p className=" border border-[#fff] p-3 rounded-md md:mt-3 hover:bg-[#fff] hover:text-black text-center">
                {!lan ? "Request with online form" : "تواصل معنا"}
              </p>
            </div>

            <div className="mb-5  lg:ml-[100px]">
              <h4 className="pd-4 capitalize">
                {!lan ? "Useful Links" : "روابط هامة"}
              </h4>
              <ul className=" text-white text-start md:text-start">
                {navigation.map((i, x) => (
                  <li className="pb-4" key={x}>
                    <i className="fa fa-chevron-right text-[#C5282F] pr-3"></i>
                    <a href="#" className="hover:text-[#C5282F] text-start ">
                      {!lan ? it.name : i.nameA}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5 text-start flex flex-col justify-evenly ">
              <h4 className="pb-4 capitalize ] ">
                {!lan ? "get in touch" : "تواصل معنا"}
              </h4>
              <div className="flex  ">
                {" "}
                <i className="fa fa-map-marker text-[20px] text-vividRed m-3"></i>
                <p className="	text-gray-500 ">
                  {!lan ? "TECHNICAL UNITES" : "الشركة المتحدة"} <br />
                  {!lan ? "P.O.Box 8368" : "الرقم البريدي 8368 "}
                  <br />
                  {!lan ? " Riyadh 11482" : "الرياض 11482,"}
                  <br />
                  {!lan
                    ? "Kingdam of Saudi Arabia"
                    : "المملكة العربية السعودية."}
                </p>
              </div>
              <div className="flex items-center ">
                <i className="fa fa-envelope text-[20px] text-vividRed m-3"></i>
                <p className="	text-gray-500">
                  {!lan
                    ? " Email : info@TECHNICAL UNITES.com"
                    : "البريد الإلكتروني : info@technicalunited.com"}
                </p>
              </div>
              <br />
              <div className="flex items-center">
                <i className="fa fa-phone text-[20px] text-vividRed m-3"></i>
                {!lan ? (
                  <div>
                    <p className="	text-gray-500">Phone : (+966) 11 461 5299</p>
                    <p className="	text-gray-500">Fax: (+966) 11 461 1718</p>
                  </div>
                ) : (
                  <div>
                    <p className="	text-gray-500">الهاتف: 114615299 (966+)</p>
                    <p className="	text-gray-500">الفاكس: 114611718 (966+)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#000000] text-gray-500 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-center items-center">
          {!lan ? (
            <div className="text-center">
              <div>Privacy Statement | Terms of Use</div>
              <div>Copyright © 2022 Technical United. All Rights Reserved</div>
            </div>
          ) : (
            <div className="text-center">
              <div>بيان الخصوصية | شروط الأستخدام</div>
              <div>حقوق النشر © ٢٠٢٢ الشركة المتحدة. كل الحقوق محفوظة</div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
});

export default Footer;
