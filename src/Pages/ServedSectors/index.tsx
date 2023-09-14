import React, { useContext } from "react";
import logo from "../../assets/imgs/logos.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";
import SelectItem from "../details/selectItem";
import { ContactBox } from "../../components";
const ServedSectors = () => {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const location = useLocation();
  const navigate = useNavigate();
  const setSelect = Context.setSelectCat;
  React.useEffect(() => {
    setSelect("company");
  }, []);
  const onSelectIdData = (id: string) => {
    if (id) {
      navigate(`/${id}`);
    } else {
      // must be here alret
      console.log("Page not found");
    }
  };
  const navTitle = [
    { name: "About Us", nameA: "عن الشركة", path: "about" },
    { name: "Coverage", nameA: "التغطية", path: "coverage" },
    { name: "Served Sectors", nameA: "قطاعات الخدمات", path: "servedsectors" },
  ];
  return (
    <div>
      <div
        className={`md:container md:mx-auto  md:grid grid-cols-1 px-4 md:px-0 lg:grid-cols-3 md:p-6 gap-2 pb-5 md:pb-52 ${
          !lan ? "font-erasITC" : "text-right font-primaryA"
        }`}
      >
        <div
          className={`  col-span-2 md:p-3 mt-5 md:mt-8 lg:mt-[20px] ${
            !lan ? "" : "order-2"
          }  `}
        >
          <h1 className="text-2xl md:text-[36px] text-[#111215] font-bold pb-5 mb-5 ">
            {!lan ? "Served Sectors" : " قطاعات الخدمات"}
          </h1>
          <p className="text-[17px] text-[#666666] " dir={lan ? "rtl" : "ltr"}>
            {!lan
              ? "Technical United is comprised of well qualified technical staff to spearhead the challenges in securing many industries with full compliance of local and international safety laws and standards. It undertakes public and private projects and is known to complete projects in the stipulated period with quality levels to the full satisfaction of its clients."
              : "ومن خلال المسيرة و تقديم الخدمات، اكتسب فريق العمل خبرات عملية وقتية احترافية طورت من قدراته، مما يجعله مؤهل للعمل ولتغطية القطاعات كافة داخل المملكة العربية السعودية ومنطقة الخليج العربي، والتي منها:"}
          </p>
          {!lan ? (
            <ul className="text-[17px] text-[#666666]">
              <li className="">
                The company has the experience, technical capacity, manpower,
                expertise and business readiness to work on the following
                industries in KSA and in the Gulf region:
              </li>
              <li className="mt-6">
                <strong> Cross-border security – </strong> Official entry and
                exit points to the Kingdom of Saudi Arabia.
              </li>
              <li className="mt-6">
                <strong> Maritime security – </strong> Ports and marine vessels
                to ensure cargoes do not contain contraband, illegal substances
                or human cargo.
              </li>
              <li className="mt-6">
                <strong>Critical infrastructure security – </strong> Sites where
                essential power, water and other services are needed to serve
                the community.
              </li>
              <li className="mt-6">
                <strong>Gas and fuel stations – </strong> All types and models
                of fuel dispensers and storage facilities with support for
                automated payment systems and self-service.
              </li>
              <li className="mt-6">
                <strong>Customs Authorities –</strong> All check points where
                transported loads and shipments are inspected. Kingdom
                ministries – Areas where security levels require heightened
                inspection methods.
              </li>
              <li className="mt-6">
                <strong>Industrial zones –</strong> Entry and exit points to
                industrial zones where transported goods and vehicles need
                security checking and clearance.
              </li>
              <li className="mt-6">
                <strong>Factories and production plants –</strong> Entry and
                exit points to factories and production plants were transported
                goods and vehicles need security checking and clearance.
              </li>
              <li className="mt-6">
                <strong> Commercial establishments and buildings –</strong>{" "}
                Entry and exit points to commercial establishments and large
                buildings where persons and goods need security checking and
                clearance.
              </li>
            </ul>
          ) : (
            <ul
              dir="rtl"
              className=" font-primaryA  text-[17px] list-disc   text-right text-[#666666]"
            >
              <li className="mt-6 lg:mr-[50px]">
                تأمين المعابر الحدودية البحرية كالموانئ من خلال إجراءات فحص
                الحاويات والشحنات التي تخضع لإجراءات الجمركة وتأمين السفن
                والناقلات،
              </li>
              <li className="mt-6 lg:mr-[50px]">
                تأمين المنافذ الجمركية البرية ونقاط التفتيش من خلال فحص الحمولات
                والشحنات التي تخضع لإجراءات الجمركة.
              </li>
              <li className="mt-6 lg:mr-[50px]">
                تأمين المنافذ الجمركية عبر المطارات من خلال أجهزة فحص حقائب
                الركاب وأجهزة فحص المخدرات والمتفجرات.
              </li>
              <li className="mt-6 lg:mr-[50px]">
                تأمين مواقع البنى التحتية الحساسة، وتشمل في هذا المجال تأمين
                محطات الكهرباء والمياه، والمواقع التي تعد مهمة لخدمة المجتمع.
              </li>
              <li className="mt-6 lg:mr-[50px]">
                أنظمة إدارة محطات الوقود والغاز التي توفر أنظمة التحكم والأتمتة
                وإدارة المحطات شاملا أنظمة الدفع الآلي والخدمة الذاتية.
              </li>
              <li className="mt-6 lg:mr-[50px]">
                احتياجات القطاعات الحكومية والمنشآت الحساسة من أنظمة الأمن
                والسلامة، نظرا لاحتياج تلك المنشآت الإجراءات تفتيش مشددة.
              </li>
              <li className="mt-6 lg:mr-[50px]">
                احتياجات المدن الصناعية من تأمین منافذ دخول وخروج البضائع
                والشاحنات في هذه المناطق، والتي تشهد حركة نقل شحنات وبضائع
                كثيفة.
              </li>
            </ul>
          )}
        </div>
        <div className="mt-20 md:mt-[30px]  ">
          <div className="z-10">
            <div className="flex flex-col ">
              {navTitle.map((item, x) => (
                <SelectItem
                  key={x}
                  name={lan ? item.nameA : item.name}
                  textColor={
                    location.pathname == "/" + item.path ? "#fff" : "black"
                  }
                  bgColor={
                    location.pathname == "/" + item.path ? "#EE1B25" : "#EDEDED"
                  }
                  onSelect={() => onSelectIdData(item.path)}
                />
              ))}
            </div>
          </div>
          <ContactBox />
          <div className="h-[150px] bg-[#f4f4f4] p-3 mt-10 flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServedSectors;
