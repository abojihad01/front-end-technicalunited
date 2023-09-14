import React, { useContext } from "react";
import { ContextGlobal } from "../../ContextStore";
import icon2 from "../../assets/icons/icon2.png";
import { why_choose_us_Data } from "./dataComponentHome";
import { ReactSVG } from "react-svg";

export function ChooseUs() {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  return (
    <div className={`bg-[#F3F3F3] py-[40px] flex md:justify-end `}>
      <div className="md:grid md:grid-cols-12 md:px-0 px-4 md:container md:mx-auto">
        <div className="col-span-4"></div>
        <div
          className={`md:col-span-8 md:pl-5  md:mt-[50px] ${
            !lan ? "" : " -order-last text-right"
          }  `}
        >
          <div>
            <p className="text-[14px] tracking-[2px] text-vividRed ">
              {!lan ? "WHY CHOOSE US" : " لماذا تكنيكال يونايتد؟ "}
            </p>
            <p className="font-bold  md:text-[45px]">
              {!lan ? " We are Professional and more" : "أكثر من مجرد محترفين"}
            </p>
            <p
              className={`font-normal text-base text-doveGray md:text-17px md:mt-8 ${
                !lan ? "" : " md:pl-32 text-right"
              } `}
            >
              {!lan
                ? " To go beyond our customers expectations with ground-breaking and dependable security systems that provides a practical, cost effective and smart solution to the enforcement industry."
                : "هدفنا تجاوز توقعات عملائنا من خلال أنظمة أمان رائدة ويمكن الاعتماد عليها توفر حلاً عمليًا وفعالاً من حيث التكلفة وذكيًا لصناعة الإنفاذ"}
            </p>
          </div>
          <div className=" grid  grid-rows-2 md:grid-cols-2 gap-3 mt-12">
            {why_choose_us_Data.map((value) => (
              <div className={` mb-6 flex flex-col ${!lan ? "" : "items-end"}`}>
                <img
                  src={value.icon}
                  className="md:h-20 h-15 md:w-36 w-28 ml-3"
                />

                <p
                  className={`${
                    !lan ? "font-bold" : "font-medium"
                  } text-3xl mt-2 `}
                >
                  {!lan ? value.title : value.titleA}
                </p>
                <p className=" font-normal text-base text-doveGray md:text-17px mt-4 p-1 pr-7">
                  {!lan ? value.describe : value.describeA}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
