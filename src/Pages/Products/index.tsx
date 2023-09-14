import React from "react";
import { HeaderPages } from "../../components";
import BoxProduct from "./Box-Product";
import TitleHoveContainer from "./TitleHoveContainer";
import { ContextGlobal } from "../../ContextStore";
import { productsPageData } from "../../constants";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { Lan: lan } = React.useContext(ContextGlobal);
  const navigate = useNavigate();
  const onNavigateTo = (id: string, state: {}) => {
    navigate(`/products/${id}`, { state: state });
  };
  return (
    <div
      dir={lan ? "rtl" : "ltr"}
      className={`bg-white ${lan ? "font-primaryA" : "font-erasITC"}`}
    >
      <div className="w-full pt-0 md:pt-0 relative mb-[70px]">
        <HeaderPages title={lan ? "الـمنتجـات" : "Our Products"} />
        <div
          className="
                 md:container md:mx-auto left-0 right-0
                flex flex-row absolute -bottom-16 justify-around 
                text-[26px] text-white font-semibold"
        >
          <TitleHoveContainer
            title={lan ? "معدات إدارة محطات الوقود" : "FMS Hardware"}
            to="3644"
          />
          <TitleHoveContainer
            title={lan ? "نظام إدارة محطات الوقود" : "System Uses"}
            to="3643"
          />
          <TitleHoveContainer
            title={lan ? "فحص أسفل المركبات" : "Under Vehicle Inspection"}
            to="37"
          />
        </div>
      </div>
      <div className="w-full flex items-center md:grid md:grid-cols-4 mb-6 lg:grid-cols-12 md:container md:mx-auto gap-5 flex-col flex-wrap ">
        {productsPageData.map((item) => (
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
    </div>
  );
};

export default Products;
