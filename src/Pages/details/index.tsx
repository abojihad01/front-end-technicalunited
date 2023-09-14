import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../../constants";
import SelectItem from "./selectItem";
import { ContactBox, LogoBox, NextAndPrevButton } from "../../components";
import { ContextGlobal } from "../../ContextStore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaImage } from "react-icons/fa";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Lan } = useContext(ContextGlobal);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [serviceData, setServiceData] = React.useState<any>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (id) {
      setIsLoading(true);
      const filterData = servicesData.filter((service) => service.id === id);
      setServiceData(filterData[0]);
      const findCurrentIndex = servicesData.findIndex(
        (service) => service.id === id
      );
      setCurrentIndex(findCurrentIndex);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [id]);

  const onSelectIdData = (id: string) => {
    if (id) {
      navigate(`/services/${id}`);
    } else {
      // must be here alret
      console.log("Page not found");
    }
  };
  if (isLoading) {
    return <></>;
  }
  return (
    <div
      dir={Lan ? "rtl" : "ltr"}
      className={`md:container md:mx-auto pt-10 md:pt-20 ${
        Lan ? "font-primaryA" : "font-erasITC"
      }`}
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch mb-10 md:mb-20">
        <div className="md:flex-[0.7] p-3">
          <h1
            className={`text-[30px] md:text-[45px] text-black font-itcMedium font-normal mb-2 text-center  ${
              Lan ? "md:text-right" : "md:text-left"
            }`}
          >
            {Lan ? serviceData?.titleA : serviceData?.title}
          </h1>
          <p
            className={` text-[15px] md:text-[18px] leading-[26px] text-[#668] text-center ${
              Lan ? "md:text-right" : "md:text-left"
            }`}
          >
            {Lan ? serviceData?.descriptionA : serviceData?.description}
            {Lan && serviceData?.descriptionTitleA2 && (
              <h4 className="py-4">{serviceData?.descriptionTitleA2}</h4>
            )}
            {Lan && serviceData?.descriptionA2}
          </p>
          <LazyLoadImage
            src={
              serviceData &&
              require(`../../assets/imgs/${serviceData?.path}/${serviceData?.image}`)
            }
            alt={serviceData?.title}
            // delayTime={500}
            placeholder={<FaImage />}
            className="mt-20 object-contain"
          />
        </div>
        <div className="flex-[0.3] md:px-3 md:pt-8 py-2 md:py-0 flex-col w-full">
          <div className="w-full">
            {servicesData.map((item) => {
              return (
                <SelectItem
                  key={item.id}
                  name={Lan ? item.titleA : item.title}
                  textColor={item.id === id ? "#fff" : "black"}
                  bgColor={item.id === id ? "#EE1B25" : "#EDEDED"}
                  onSelect={() => onSelectIdData(item.id)}
                />
              );
            })}
          </div>
          <ContactBox style="hidden md:flex" />
          <LogoBox style="hidden md:flex" />
        </div>
      </div>
      <div>
        <div className="flex flex-row py-3 mb-7 justify-between">
          {servicesData && servicesData[currentIndex - 1]?.title && (
            <NextAndPrevButton
              onSelect={() => onSelectIdData(servicesData[currentIndex - 1].id)}
              title={servicesData[currentIndex - 1]?.title}
              titleA={servicesData[currentIndex - 1]?.titleA}
              reverse
            />
          )}
          <div className="flex-1" />
          {servicesData && servicesData[currentIndex + 1]?.title && (
            <NextAndPrevButton
              onSelect={() => onSelectIdData(servicesData[currentIndex + 1].id)}
              title={servicesData[currentIndex + 1]?.title}
              titleA={servicesData[currentIndex + 1]?.titleA}
            />
          )}
        </div>
        <ContactBox style="md:hidden mb-10" />
      </div>
    </div>
  );
}

export default Details;
