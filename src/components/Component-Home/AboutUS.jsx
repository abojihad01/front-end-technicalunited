import React, { useContext } from "react";
import { ContextGlobal } from "../../ContextStore";
import { Accordion } from "../Accordion";
import { panelHeadingAboutUsData } from "../../constants/dummyData/panelHeadingData";
import { useNavigate } from "react-router-dom";
export function AboutUs() {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const navigate = useNavigate();

  return (
    <div className={` mt-[100px] bg-[#F3F3F3] p-[20px] ${ !lan ? "font-erasITC" : "font-primaryA" } `}>
      <div
        className={`md:container md:grid md:grid-cols-12  md:mx-auto md:gap-5  
        ${ !lan ? "flex-row" : "flex-row-reverse"} `}
      >
        <div className={`md:grid md:col-span-6 flex flex-col ${ !lan ? "" : "text-right order-last"}`}
        >
          <div>
              <p className="text-[#EE1B25] text-[14px] tracking-[2px] leading-5 ">
                {!lan ? " ABOUT US" : "عن الشركة"}
              </p>
              <p className={`font-bold text-2xl  md:text-[45px] md:leading-[52px]`}>
                {!lan
                  ? "Trust is something that is earned."
                  : "الثقة شيء يتم اكتسابه"}
              </p>
              {!lan && <p className={`md:text-[30px] text-lg mt-2 md:mt-5 md:leading-[36px] ${lan && "pl-10"} font-bold`}>
                 Our intention is to win yours, no matter which category you may fitinto
              </p>}
              <p className={`text-[#525252] text-[18px] leading-7 mt-2 md:mt-5 font-normal pr-3`}>
                {!lan
                  ? "Many companies say that customer service is their number one priority, but we truly mean it. Your imminent and forthcoming needs are the basis for all we do. The choices of products and services that we offer are geared entirely towards the needs of our clients. Technical United’s entire structure is founded by this principle and devotes all of its resources to achieve 100% customer satisfaction."
                  : "تأسست الشركة المتحدة للأعمال التقنية بالمملكة العربية السعودية فى يونيو 2008 م بمؤسسين وفريق عمل من المهندسين ذوي الخبرة في مجال الأنظمة الأمنية المتخصصة لسنوات عديدة، ونظرا لحاجة السوق لأنظمة مراقبة حديثة تواكب الحركة التجارية المتزايدة مستويات الأمان المراد الوصول إليها. ونتيجة لحصول الفريق على براءات اختراع لأنظمة فحص البضائع ، كان الفريق على أتم الاستعداد لتلبية هذة الاحتياجات"}
              </p>
              <button 
                className={`bg-[#000] ${lan && "justify-self-end"} font-erasITC text-white w-36 h-[45px] mt-3 md:mt-10  hover:bg-zinc-700`}
                onClick={() => navigate("/about") }>
                {!lan ? " Read more" : "المزيد"}
              </button>

          </div>
        </div>
        <div className="md:col-span-6 mt-[30px] md:pl-4 md:mt-0  ">
          <Accordion data={panelHeadingAboutUsData} />
        </div>
      </div>
    </div>
  );
}
