import { useContext } from "react";
import { Box } from "../../components";
import { HeaderPages } from "../../components";
import { useNavigate } from "react-router-dom";
// dummy data
import servicesData from "../../constants/dummyData/dataServices.json";
import { ContextGlobal } from "../../ContextStore";

const Services = () => {
  const navigate = useNavigate();
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  return (
    <div className={`pb-8 md:pb-28 ${lan ? "font-primaryA" : "font-erasITC"}`}>
      <HeaderPages
        title={lan ? "الـخدمات" : "Our Service"}
        img={require("../../assets/imgs/Our-Services-Banner-Image.png")}
      />
      <div
        dir={lan ? "rtl" : "ltr"}
        className="md:container md:mx-auto md:grid md:grid-cols-12 flex flex-col justify-center items-center md:mb-20 md:mt-10 "
      >
        {servicesData.map((service) => {
          return (
            <Box
              key={service.id}
              style={`md:col-span-4 place-self-center p-4`}
              onClick={() => navigate(`/services/${service.id}`)}
              title={lan ? service.titleA : service.title}
              richDescription={
                lan ? service.richDescriptionA : service.richDescription
              }
              img={require(`../../assets/imgs/services/${service.image}`)}
              icon={require(`../../assets/icons/${service.icon}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
