import React, { useContext } from "react";
import { ContextGlobal } from "../../ContextStore";
import { servicesData } from "../../constants";
import Box from "../Box";
import { useNavigate } from "react-router-dom";
import factoryIcon from "../../assets/icons/factory.png";
import { home_ar, home_en } from "../../constants/Language";

export function Services() {
  const navigate = useNavigate();
  const { Lan } = useContext(ContextGlobal);

  return (
    <div className={`md:h-[409px] bg-zinc-900 p-3  ${!Lan && "md:pt-7"}`}>
      <div
        className="flex flex-col items-center md:container md:mx-auto">
          {!Lan && (
            <>
              <p className="text-[#ee1b25] font-erasITC text-center text-[8px] md:text-sm font-light tracking-[2px] leading-5">
                {Lan === false ? home_en.ourServices : home_ar.ourServices}
              </p>
              <p className="font-erasITC font-bold text-white text-center text-sm md:text-3xl lg:text-[45px] md:leading-[54px] md:mb-5">
                {Lan === false ? home_en.providingSupport : home_ar.providingSupport}
                <br />
                {Lan === false ? home_en.throughExcelence : home_ar.throughExcelence}
              </p>
            </>
          )}

          <div
            dir={Lan ? "rtl" : "ltr"} 
            className={`grid md:grid-cols-6 grid-cols-1 justify-center gap-y-20 ${!Lan && "mt-6 lg:mt-[50px]"}`}>
            {servicesData.map((service) => (
              <Box
                key={service.id}
                title={!Lan ? service.title : service.titleA}
                img={require(`../../assets/imgs/services/${service.image}`)}
                onClick={() => navigate(`/services/${service.id}`)}
                style={' h-[270px] p-4 md:h-[380px]  lg:h-[570px] mb-10 md:mb-0 col-span-3'}
                styleIconContainer={'md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px] rounded-[40px] -top-5'}
                richDescription={!Lan ? service.richDescription : service.richDescriptionA}
                icon={require(`../../assets/icons/${service.icon}`)}
              />
            ))}
          </div>
        </div>
    </div>
  );
}
