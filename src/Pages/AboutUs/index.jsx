import React, { useContext } from "react";
import { ContextGlobal } from "../../ContextStore";
import { blogsData } from "../../constants";
import AboutUsBox from "./AboutUs-box";
import { useNavigate } from "react-router-dom";
import {
  board_of_DirectorsData,
  investorsData,
  ourObjectivesData,
  who_we_are_Data,
} from "../../constants/Language";

function AboutUs() {
  const navigate = useNavigate();

  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const setSelect = Context.setSelectCat;
  React.useEffect(() => {
    setSelect("company")
  },[])
  const InfoBox = ({ index, value }) => {
    const { Lan } = useContext(ContextGlobal);
    return (
      <div
        className={`
      flex md:col-span-4 ${!Lan ? "font-erasITC" : "font-primaryA"} 
       gap-2 mb-7`}
      >
        <div className="relative z-[1]">
          <p className="absolute text-[85px] md:text-100px -top-12 md:-top-14 -z-[1] font-rajdhani font-bold text-white">
            0{index + 1}
          </p>
          <span className="py-1 px-1 bg-vividRed text-xs md:text-sm text-white">
            0{index + 1}
          </span>
        </div>
        <div className="relative z-[1]">
          <span
            className={`font-erasITC text-vividRed ${
              !Lan ? "mr-5 md:mr-10" : "ml-5 md:ml-10"
            }`}
          >
            ____
          </span>
        </div>
        <div className="relative z-[1]">
          <p
            className={`font-erasITC font-bold text-[#212529] ${
              Lan ? "text-right" : "text-left"
            } text-[24px]`}
          >
            {!Lan ? value.title : value.titleA}
          </p>
          {value.doc && value.docA && (
            <p
              className={`text-sm md:text-17px font-normal mt-3 text-doveGray ${
                !Lan ? "text-left" : "text-right"
              }`}
            >
              {!Lan ? value.doc : value.docA}
            </p>
          )}
          {value.subTitle && value.subTitleA && (
            <p
              className={`text-17px font-normal mt-3 text-doveGray ${
                !Lan ? "text-left" : "text-right"
              }`}
            >
              {!Lan ? value.subTitle : value.subTitleA}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`
       flex flex-col ${
         !lan ? "font-erasITC" : "font-primaryA"
       } pb-20 md:pb-40 md:px-0 `}
    >
      <div
        className={`
          md:container md:mx-auto md:grid md:grid-cols-12 px-4 md:px-0 flex 
          ${lan ? "flex-col-reverse" : "flex-col"} mt-10 md:mt-0
          bg-[url('/src/assets/imgs/about-us/about-us-plan.png')] bg-[50%] bg-no-repeat`}
      >
        <div
          className={`flex flex-col md:col-span-6  md:mt-[50px] ${
            !lan ? "" : "text-right order-last"
          }`}
        >
          <div className={`${!lan ? "" : "text-right"} `}>
            <h1
              className={`text-sm tracking-[2px] ${
                !lan ? "font-bold" : "font-medium"
              } text-vividRed `}
            >
              {!lan ? "ABOUT US" : "عن الشركة"}
            </h1>
            <p
              className={`md:text-[45px] md:leading-[52px] text-xl mb-5  ${
                !lan ? "font-extrabold" : "font-semibold"
              }`}
            >
              {!lan
                ? " Our intention is to win yours, no matter which category you may fit into ."
                : "نسعى لخدمة عملائنا أي كانت الفئة التي ينتمون إليها"}
            </p>
          </div>
          <div
            className={`flex h-full flex-col md:flex-row ${
              !lan ? "" : " order-last"
            }`}
          >
            <div className="flex md:items-start my-3 md:my-0 justify-center md:justify-normal h-full w-full md:w-[80px] bg-vividRed md:mr-5">
              <div className="md:w-[80px] flex md:[writing-mode:vertical-lr] ">
                <p
                  className={`transform md:rotate-180 py-3 ${
                    !lan
                      ? "font-bold md:py-10 md:pl-3 "
                      : "font-medium md:py-36 md:pl-5"
                  } inline-block text-white tracking-[2px]
                           text-xs md:text-[20px]	`}
                >
                  {!lan
                    ? "TRUSTISSOMETHING THATISEARNED."
                    : "الثقة شيء يتم اكتسابه"}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-[18px] font-normal">
                {" "}
                {!lan && "Our Objectives"}
              </h1>
              {ourObjectivesData.map((value, index) => (
                <p
                  key={index}
                  dir={lan ? "rtl" : "ltr"}
                  className={`${
                    !lan && "mt-6"
                  } text-[17px] font-normal text-[#666] mb-3`}
                >
                  {lan && value.titleA && (
                    <h1
                      className={`text-[18px] ${
                        value.titleA === "الأهداف"
                          ? "text-[#111215] "
                          : ""
                      } font-semibold mb-6`}
                    >
                      {value.titleA}
                    </h1>
                  )}
                  {value.replaceString && lan ? null : (
                    <strong>{value.replaceString}</strong>
                  )}
                  {!lan ? value.doc : value.docA}
                  {lan && (
                    <ul dir="rtl" className="list-disc pr-10">
                      {value.docArrA?.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-6 flex justify-center items-center">
          <img
            src={require("../../assets/imgs/about-us/about-us-photo.png")}
            alt=""
            className="md:h-[420px] md:w-[345px] lg:h-[520px] lg:w-[445px] lg:mx-4 md:mt-72"
          />
        </div>
      </div>
      <div className="bg-[#f5f5f5] mt-4">
        {/* Who we are */}
        <div
          className={`md:container md:mx-auto flex flex-col ${
            lan ? "text-right" : "items-center"
          } px-4 md:px-[40px] `}
        >
          <h1
            className={`${
              !lan ? "font-semibold" : "font-medium"
            } tracking-[2px] text-vividRed mt-7 md:mt-3  `}
          >
            {!lan ? "TECHNICAL UNITED" : "الشركة المتحدة للأعمال التقنية "}
          </h1>
          <p
            className={`${
              !lan ? "font-semibold" : "font-medium"
            } text-lg md:text-[45px] mt-3 mb-4`}
          >
            {!lan ? " Who we are" : "من نحن"}
          </p>
          <div
            className={`flex flex-col mt-5 md:mt-10 text-center md:grid md:grid-cols-8 lg:grid-cols-12 md:gap-4`}
            dir={lan ? "rtl" : "ltr"}
          >
            {who_we_are_Data.map((value, index) => (
              <InfoBox value={value} index={index} />
            ))}
          </div>
        </div>
        {/* investors */}
        <div
          className={`md:container md:mx-auto flex flex-col p-[40px]  ${
            lan ? "text-right" : "items-center"
          } `}
        >
          <h1 className="text-sm font-medium tracking-[2px] text-vividRed mt-[100px]">
            {!lan ? "TECHNICAL UNITED" : "الشركة المتحدة للأعمال التقنية"}
          </h1>
          <p className="text-[26px] md:text-[45px] font-semibold">
            {!lan ? "investors" : "المستثمرين"}
          </p>
          <div
            className="flex flex-col md:grid md:grid-cols-8 lg:grid-cols-12 gap-4 mt-10"
            dir={lan ? "rtl" : "ltr"}
          >
            {investorsData.map((value, index) => (
              <InfoBox value={value} index={index} />
            ))}
          </div>
        </div>
        {/* Board of Directors */}
        <div
          className={`md:container md:mx-auto flex flex-col bg-[#f5f5f5] p-[40px] mt-[50px] ${
            lan ? "text-right" : "items-center"
          }`}
        >
          <h1 className="text-sm font-medium tracking-[2px] text-vividRed mt-[100px]">
            {!lan ? "TECHNICAL UNITED" : "الشركة المتحدة للأعمال التقنية"}
          </h1>
          <p className="text-[26px] md:text-[45px] font-semibold mb-10">
            {!lan ? "Board of Directors" : "أعضاء مجلس الإدارة"}
          </p>
          <div
            className="flex flex-col md:grid md:grid-cols-8 lg:grid-cols-12 gap-4  w-full"
            dir={lan ? "rtl" : "ltr"}
          >
            {board_of_DirectorsData.map((value, index) => (
              <InfoBox value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#f5f5f5] ">
        <div
          dir={lan ? "rtl" : 'ltr'}
          className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-10
          p-4 md:p-10 after:md:mb-44 "
        >
          {blogsData.map((blog) => {
            return (
              <AboutUsBox
                key={blog.id}
                style="!bg-transparent w-full"
                onClick={() => navigate(`/blogs/${blog.id}`)}
                title={lan ? blog.titleA : blog.title}
                subTitle={blog.title}
                img={blog?.image && require(`../../assets/imgs/${blog?.image}`)}
                dateAt={blog.createAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
