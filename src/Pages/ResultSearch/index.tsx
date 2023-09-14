import { useContext, useEffect, useState } from "react";
import logo from "../../assets/imgs/logos.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";
import BoxSearch from "../../components/BoxSearch";
import { HeaderPages } from "../../components";
import servicesData from "../../constants/dummyData/dataServices.json";
import { Box } from "../../components";
import { productsPageData } from "../../constants";
import BoxProduct from "../Products/Box-Product";

const ResultSearch = () => {
  const Context = useContext(ContextGlobal);
  const searchText = Context.searchText;
  const lan = Context.Lan;
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(searchText, "????");
  const onSelectIdData = (id: string) => {
    if (id) {
      navigate(`/${id}`);
    } else {
      // must be here alret
      console.log("Page not found");
    }
  };
  const onNavigateTo = (id: string, state: {}) => {
    navigate(`/products/${id}`, { state: state });
  };

  const ServicesFilter = servicesData.filter((item) =>
    lan ? item.titleA : item.title === searchText
  );
  const ServicesFilterA = servicesData.filter(
    (item) => item.titleA === searchText
  );

  const productsFilter = productsPageData.filter(
    (item) => item.title === searchText
  );

  const productsFilterA = productsPageData.filter(
    (item) => item.titleA === searchText
  );

  return (
    <div>
      <HeaderPages title={lan ? "نتأج" : "Result "} />

      {lan ? (
        <div
          className={`pb-8 md:pb-28 ${lan ? "font-primaryA" : "font-erasITC"}`}
        >
          {ServicesFilterA.length >= 1 ? (
            <div
              dir={lan ? "rtl" : "ltr"}
              className="md:container md:mx-auto md:grid md:grid-cols-12 flex flex-col justify-center items-center md:mb-20 md:mt-10 "
            >
              {ServicesFilterA.map((service) => {
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
          ) : (
            <div className="w-full flex items-center md:grid md:grid-cols-4 mb-6 lg:grid-cols-12 md:container md:mx-auto gap-5 flex-col flex-wrap mt-3 ">
              {productsFilterA.map((item) => (
                <BoxProduct
                  title={lan ? item.titleA : item.title}
                  img={
                    item.image &&
                    require(`../../assets/imgs/${item.path}/${item.image}`)
                  }
                  onClick={() =>
                    onNavigateTo(item.id, { parentId: item.productParentId })
                  }
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className={`pb-8 md:pb-28 ${lan ? "font-primaryA" : "font-erasITC"}`}
        >
          {ServicesFilter.length >= 1 ? (
            <div
              dir={lan ? "rtl" : "ltr"}
              className="md:container md:mx-auto md:grid md:grid-cols-12 flex flex-col justify-center items-center md:mb-20 md:mt-10 "
            >
              {ServicesFilter.map((service) => {
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
          ) : (
            <div className="w-full flex items-center md:grid md:grid-cols-4 mb-6 lg:grid-cols-12 md:container md:mx-auto gap-5 flex-col flex-wrap mt-3 ">
              {productsFilter.map((item) => (
                <BoxProduct
                  title={lan ? item.titleA : item.title}
                  img={
                    item.image &&
                    require(`../../assets/imgs/${item.path}/${item.image}`)
                  }
                  onClick={() =>
                    onNavigateTo(item.id, { parentId: item.productParentId })
                  }
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultSearch;
