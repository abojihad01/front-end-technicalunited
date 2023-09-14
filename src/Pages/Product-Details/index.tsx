import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ContactBox,
  LogoBox,
  NextAndPrevButton,
  SelectItem,
} from "../../components";
import { ContextGlobal } from "../../ContextStore";
import { productsData } from "../../constants";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { Lan } = useContext(ContextGlobal);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [serviceData, setServiceData] = React.useState<any>();
  const [productBottomData, setProductBottomData] =
    React.useState<any>(productsData);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectProductData, setSelectProductData] =
    React.useState(productsData);

  React.useEffect(() => {
    if (id) {
      setIsLoading(true);
      for (let i = 0; i < productsData.length; i++) {
        let subProductData = productsData[i].subProducts as any;
        if (productsData[i].id === id) {
          if (productsData[i].id === "32") {
            navigate(`/products/${subProductData[0].id}`, { replace: true });
          } else {
            setServiceData(productsData[i]);
          }
          setCurrentIndex(i);
          subProductData
            ? setSelectProductData(subProductData)
            : setSelectProductData(productsData);
          subProductData
            ? setProductBottomData(subProductData)
            : setProductBottomData(productsData);
        } else if (subProductData !== undefined) {
          for (let j = 0; j < subProductData?.length; j++) {
            if (subProductData[j].id === id) {
              setServiceData(subProductData[j]);
              setCurrentIndex(j);

              // List of sub Product
              setProductBottomData(subProductData);
              setSelectProductData(subProductData);
            }
          }
        }
      }
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [id]);

  const onSelectIdData = (id: string) => {
    if (id) {
      navigate(`/products/${id}`);
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
      className={`sm:container md:mx-auto pt-10 md:pt-20 pb-10 md:pb-20 ${
        Lan ? "font-primaryA" : "font-erasITC"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-stretch mb-10 md:mb-20">
        <div className="md:flex-[0.7] p-3">
          <h1
            className={`text-[25px] md:text-[36px] text-black font-bold mb-2 text-center  ${
              Lan ? "md:text-right" : "md:text-left"
            }`}
          >
            {Lan
              ? serviceData?.subtitleA
                ? serviceData?.subtitleA
                : serviceData?.titleA
              : serviceData?.subtitle
              ? serviceData?.subtitle
              : serviceData?.title}
          </h1>
          <h1
            className={`text-sm  md:text-17px text-doveGray my-6 font-semibold`}
          >
            {Lan ? serviceData?.subSubtitleA : serviceData?.subSubtitle}
          </h1>
          <span
            className={` text-[15px] md:text-[18px] leading-[26px] text-[#668] text-center ${
              Lan ? "md:text-right" : "md:text-left"
            }`}
          >
            <p>{Lan ? serviceData?.descriptionA : serviceData?.description}</p>
            <p>
              {Lan ? serviceData?.descriptionA2 : serviceData?.description2}
            </p>
            {(serviceData?.aboveFold || serviceData?.aboveFoldAr) &&
              (Lan ? serviceData?.aboveFoldAr : serviceData?.aboveFold).map(
                (item: any, index: number) => (
                  <p
                    className={`my-4 ${
                      index == 2 || index == 4 || index == 6 || index == 8
                        ? "font-semibold"
                        : ""
                    } `}
                  >
                    {item}
                  </p>
                )
              )}
            {serviceData?.aboveSubFoldAr && (
              <ul className="list-disc mr-14 pl-10">
                {(Lan
                  ? serviceData?.aboveSubFoldAr
                  : serviceData?.aboveSubFold
                )?.map((item: any, index: number) => (
                  <li
                    className={`my-4 ${index === 1 && "list-none"} ${
                      index === 0 || (index === 2 && "font-medium")
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {serviceData?.useMoreDetails && (
              <ul className={`my-4 list-disc pl-10 mr-14 text-[#111215]`}>
                {serviceData?.subProducts.map((item: any) => (
                  <Link to={`/products/${item?.id}`} replace>
                    <li>{Lan ? item.titleA : item.title}</li>
                  </Link>
                ))}
              </ul>
            )}
            {serviceData?.useMoreDetails ? null : serviceData?.images ? (
              <div
                className={`grid ${
                  serviceData?.images.length > 1 && "md:grid-cols-2"
                } md:gap-x-10`}
              >
                {serviceData?.images.map((item: any) => (
                  <img
                    src={
                      serviceData?.image &&
                      require(`../../assets/imgs/${serviceData?.path}/${item}`)
                    }
                    alt={serviceData?.title}
                    className="my-2 md:my-10 md:col-span-1  "
                  />
                ))}
              </div>
            ) : (
              <>
                {!serviceData?.noImage && serviceData?.image && (
                  <img
                    src={require(`../../assets/imgs/${serviceData?.path}/${serviceData?.image}`)}
                    alt={serviceData?.title}
                    className="my-10 object-contain"
                  />
                )}
              </>
            )}
            {(serviceData?.belowFold || serviceData?.belowFoldAr) &&
              (Lan ? serviceData?.belowFoldAr : serviceData?.belowFold)?.map(
                (item: any) => <p className="my-4">{item}</p>
              )}
            {serviceData?.imageFold && (
              <img
                src={require(`../../assets/imgs/${serviceData?.path}/${serviceData?.imageFold}`)}
                alt={serviceData?.title}
                className="my-10 object-contain"
              />
            )}
            {serviceData?.belowSubFoldAr && (
              <ul className="list-disc mr-14 pl-10">
                {(Lan
                  ? serviceData?.belowSubFoldAr
                  : serviceData?.belowSubFold
                )?.map((item: any, index: number) => (
                  <li className="my-4">
                    {Lan && (
                      <p className="font-semibold">
                        {index === 0
                          ? "إصدار فواتير الكترونية والتقارير:"
                          : "بطاقات الوقود:"}
                      </p>
                    )}
                    {item.replace(
                      index === 0
                        ? "إصدار فواتير الكترونية والتقارير:"
                        : "بطاقات الوقود:",
                      ""
                    )}
                  </li>
                ))}
              </ul>
            )}
            {serviceData?.descriptionList &&
              serviceData?.descriptionList.map((item: any) => (
                <>
                  <p className="my-4 font-semibold">
                    {Lan ? item.titleA : item.title}
                  </p>
                  <p className="my-4">
                    {Lan ? item.descriptionA : item.description}
                  </p>
                  <img
                    src={
                      item?.image &&
                      require(`../../assets/imgs/${serviceData?.path}/${item?.image}`)
                    }
                    alt={serviceData?.title}
                    className="my-10 object-contain"
                  />
                  {item.belowTitle && (
                    <h4 className="mb-10 text-center text-[#006ad4]">
                      {item.belowTitle}
                    </h4>
                  )}
                </>
              ))}
          </span>
        </div>
        <div className="flex-[0.3] px-4 md:px-5 md:pt-8 py-2 md:py-0 flex-col w-full">
          <div className="w-full">
            {selectProductData.map((item) => {
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
          <ContactBox />
          <LogoBox />
        </div>
      </div>
      <div>
        <div className="flex flex-row py-6 px-4 md:px-0 justify-between">
          {productBottomData && productBottomData[currentIndex - 1]?.title && (
            <NextAndPrevButton
              onSelect={() =>
                onSelectIdData(selectProductData[currentIndex - 1].id)
              }
              title={productBottomData[currentIndex - 1]?.title}
              titleA={productBottomData[currentIndex - 1]?.titleA}
              reverse
            />
          )}
          <div className="flex-1" />
          {productBottomData && productBottomData[currentIndex + 1]?.title && (
            <NextAndPrevButton
              onSelect={() =>
                onSelectIdData(selectProductData[currentIndex + 1].id)
              }
              title={productBottomData[currentIndex + 1]?.title}
              titleA={productBottomData[currentIndex + 1]?.titleA}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
