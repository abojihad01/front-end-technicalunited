import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { blogsData } from "../../constants";
import PDFViewer from "../../components/PdfViewer";
import { HeaderPages, NextAndPrevButton } from "../../components";
import { ContextGlobal } from "../../ContextStore";
import BlogBox from "../blogs/blog-box";

function BlogDetails() {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [serviceData, setServiceData] = React.useState<any>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const Context = React.useContext(ContextGlobal);
  const lan = Context.Lan;

  React.useEffect(() => {
    if (blogId) {
      setIsLoading(true);
      const filterData = blogsData.filter((blog) => blog.id === blogId);
      const currentIndexInData = blogsData.indexOf(filterData[0]);
      console.log(currentIndexInData);

      setCurrentIndex(currentIndexInData);
      setServiceData(filterData[0]);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [blogId]);
  const onSelectIdData = (id: string) => {
    if (id) {
      navigate(`/blogs/${id}`);
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
      className={` pb-4 md:pb-20 ${lan ? "font-primaryA" : "font-erasITC"}`}
      dir={lan ? "rtl" : "ltr"}
    >
      <HeaderPages title={serviceData?.title} />
      <div className="md:container md:mx-auto flex flex-col">
        <div className="my-10 flex flex-col shadow-contact-box px-4 md:px-0 ">
          <div className="flex flex-col items-start mb-20 p-3">
            {serviceData?.description && (
              <p className="font-itcLight text-[15px] md:text-[18px] leading-[26px] text-[#668] text-center md:text-left">
                {serviceData?.description}
              </p>
            )}

            <BlogBox
              img={serviceData?.image && require(`../../assets/imgs/${serviceData?.image}`)}
              style="object-contain h-60 w-50  md:h-[580px] md:w-[560px] lg:w-[560px]"
              isActiveFeture={false}
              isFillW={false}
              isShadow={false}
              dateAt={serviceData?.createAt}
            />
          </div>
          <div className="w-full flex flex-col justify-center py-5 mb-10 px-4 md:px-8">
            {serviceData?.urlPDF 
            ?
              <>
                <PDFViewer pdf={serviceData?.urlPDF} /> 
                <div
                  className="inline-block text-sm mb-6 mt-6 ">
                    <a 
                      href={require(`../../assets/pdf/${serviceData?.urlPDF}`)}
                      className="transition-all duration-200 delay-75 hover:text-[#d71921]"> {serviceData?.title}</a>
                    <a 
                      href={require(`../../assets/pdf/${serviceData?.urlPDF}`)} 
                      download
                      className="transition-all duration-200 delay-75 ml-3 py-2 px-4 rounded-[2em] bg-[#32373c] hover:bg-[#32373cef] hover:text-[#d71921] text-white">Download </a>
                </div>
              </>
            : null}
          </div>
          </div>
        <div className="flex flex-row py-6 px-4 md:px-0 justify-between my-5 mt-7 md:my-10 md:mt-12">
          {blogsData && blogsData[currentIndex - 1]?.title && (
            <NextAndPrevButton
              onSelect={() => onSelectIdData(blogsData[currentIndex - 1].id)}
              title={blogsData[currentIndex - 1]?.title}
              titleA={blogsData[currentIndex - 1]?.title}
              reverse
            />
          )}
          <div className="flex-1" />
          {blogsData && blogsData[currentIndex + 1]?.title && (
            <NextAndPrevButton
              onSelect={() => onSelectIdData(blogsData[currentIndex + 1].id)}
              title={blogsData[currentIndex + 1]?.title}
              titleA={blogsData[currentIndex + 1]?.title}
            />
          )}
        </div>
        <div className="items-center grid md:grid-cols-8 bg-transparent gap-10 pb-10 md:pb-16 px-4 md:px-0">
          {blogsData.slice(0, 2).map((blog) => {
            return (
              <BlogBox
                key={blog.id}
                onClick={() => navigate(`/blogs/${blog.id}`)}
                style="cols-span-1"
                title={blog.title}
                img={blog.image && require(`../../assets/imgs/${blog?.image}`)}
                dateAt={blog.createAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
