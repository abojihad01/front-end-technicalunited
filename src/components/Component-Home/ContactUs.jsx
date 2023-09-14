import React, { useContext } from "react";
import phone from "../../assets/icons/call-icon.svg";
import { Accordion } from "../Accordion";
import { ContextGlobal } from "../../ContextStore";
import { contactUsData } from "./dataComponentHome";

 function ContactUs() {
  const Context = useContext(ContextGlobal);
  const [open, setOpen] = React.useState(null);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const toggle = (i) => {
    if (open == i) setOpen(null);
    return setOpen(i);
  };

  return (
    <div className=" bg-[#F3F3F3] pt-6 md:pt-[40px] pb-12 md:pb-24 px-4 md:px-0 mb-10 md:mb-20 ">
      <div
        className={`md:container md:grid md:grid-cols-12 gap-5  md:mx-auto`}>
          <div className={`md:col-span-6 px-4 ${ !lan ? "" : "text-right order-last"}`}>
            <p className={` text-vividRed tracking-[2px] mb-1 font-semibold text-[14px] leading-5 `}>
              {!lan ? "CONTACT US " : " اتصل بنا "}
            </p>
            <p className="font-erasITC font-extrabold mb-3 md:mb-16 md:text-2xl lg:text-[40px] md:leading-[50px]">
              {!lan ? "  Have any query? " : "  هل لديك أي استفسار؟ "}
            </p>
            <div className="flex gap-6 items-center">
              <div className="h-36 md:h-[235px] w-[50px] bg-vividRed flex items-center justify-center">
                <p className={`text-white text-base md:text-2xl whitespace-nowrap font-medium -rotate-90 `}>
                  {!lan ? "CONTACTUS " : "اتصل بنا"}
                </p>
              </div>
              <div
                className="flex flex-col md:h-min items-center">
                  <div className="flex md:h-min items-center md:px-3 lg:px-11  ">
                    <div className="h-9 md:h-12 lg:h-[70px] w-9 md:w-12 lg:w-[70px] rounded-full bg-vividRed flex justify-center items-center">
                      <img 
                        src={phone}
                        className="h-4 md:h-6 lg:h-[30px] w-4 md:w-6 lg:w-[30px]" />
                    </div>
                    <div className="ml-3">
                      <p className="text-[#939393] text-xs md:text-sm lg:text-[17px] font-rajdhani">
                        {!lan
                          ? "For any inquiries call now "
                          : "لأية استفسارات اتصل الآن"}
                      </p>
                      <p
                        className="text-lg md:text-xl lg:text-[27px]">+966 114615299</p>
                    </div>
                  </div>
                  <p
                    className="
                    text-base md:text-lg lg:text-[22px] w-full transition-all duration-300 ease-in-out 
                    text-center font-medium mt-4 md:mt-5 ml-6 leading-6 hover:bg-vividRed hover:text-white">
                      info@technicalunited.com
                  </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 mt-[30px] md:pl-4 md:mt-0  ">
            <Accordion data={contactUsData} />
          </div>
      </div>
    </div>
  );
}

export default React.memo(ContactUs);