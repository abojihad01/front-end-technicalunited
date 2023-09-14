import React, { memo, useContext } from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import imagess from "../../assets/1-1.webp";
import image2 from "../../assets/2-2-1.webp";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { ContextGlobal } from "../../ContextStore";
import "swiper/css";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaImage } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Slider = memo(() => {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="Swiper" className={` ${lan ? "font-primaryA" : "font-erasITC"}`}>
      <Swiper
        tyle={{
          ".swiper-pagination": "",
        }}
        className="testimonialSlider"
        pagination={{
          clickable: true,
          type: "bullets",
          // bulletClass: `bg-white`,
        }}
        navigation={false}
        autoplay={true}
        modules={[Navigation, Autoplay, Pagination]}
      >
        {[1, 2].map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" ">
                {index == 0 ? (
                  <div className="flex-1 order-1 lg:-order-1 ">
                    <div
                      className={`flex-1 flex flex-col items-end mt-[100px] lg:mt-[100px] absolute container left-0 right-0 mx-auto `}
                    >
                      <h2
                        className={`  text-[21px] sm:text-[35px] md:text-[40px] lg:text-[80px]   text-[#424242] text-right  ${
                          lan ? " text-left" : " text-right"
                        }`}
                        style={{ fontWeight: 'bold', textAlign: 'center' }}
                        data-aos="fade-right"
                      >
                        {lan == false ? "Security" : "  حلول"}
                        <span className=" text-vividRed ">
                          {lan == false ? " Solutions" : " أمنية "}
                        </span>
                      </h2>

                      <div className={``}>
                        <p
                          className={`text-[#424242] text-[14px] sm:text-[20px] lg:text-[42px] md:text-[30px] `}
                          style={{ fontWeight: 'bold', marginRight: '15px' }}
                        >
                          {lan == false
                            ? "creative . innovation team work"
                            : "مبتكرة إبداعية جماعية"}
                        </p>
                        <button
                          className="px-[35px] lg:px-[35px] py-[9px] lg:py-[15px]  mb-[160px] lg:mb-[194px] text-sm text-[#fff]  bg-[#424242]	 hover:bg-red-700	 backdrop-blur-md transition  mt-10"
                          // data-aos="fade-up"
                        >
                          <Link to={"services/1"}>
                            {lan == false ? "Read more" : " اقرأ المزيد "}
                          </Link>{" "}
                        </button>
                      </div>
                    </div>
                    <LazyLoadImage
                      src={imagess}
                      className="w-full ] h-[258px] sm:h-[300px] md:h-[400px] lg:h-[500px] "
                      delayTime={500}
                      placeholder={<FaImage />}
                    />
                    {/* <LazyLoadImage
                      src={imagess}
                      className="w-full ] h-[258px] md:h-[100%] "
                      delayTime={500}
                      placeholder={<FaImage />}
                    /> */}
                  </div>
                ) : (
                  <div className="flex-1 order-1 lg:-order-1  ">
                    <div
                      // className={`flex-1 flex flex-col items-start mt-[20%] lg:mt-[100px] absolute container left-0 right-0  mx-auto bg-[red]  `}
                      className={`flex-1 flex flex-col items-start mt-[100px] md:mt-[150px] lg:mt-[120px] absolute  container left-0 right-0  mx-auto   `}
                    >
                      <h2
                        className={` text-[17px] sm:text-[24px] md:text-[24px] lg:text-[37px]   text-[#424242]  ${
                          !lan ? "" : " text-right "
                        }`}
                        data-aos="fade-right"
                      >
                        {lan == false
                          ? "Specialists for high standard"
                          : "فريق من متخصصي"}
                      </h2>

                      <div className={``}>
                        <p
                          className={`text-[#424242] text-[13px]  lg:text-[37px] md:text-[25px]`}
                          data-aos="fade-right"
                        >
                          {lan == false
                            ? "Technology and Support in Security"
                            : "الدعم الأمني على أعلى مستوى"}
                        </p>
                        <button
                          className="px-[35px] lg:px-[35px] py-[9px] lg:py-[15px] mb-[160px] lg:mb-[194px] text-sm text-[#fff]  bg-[#424242]	 hover:bg-red-700	 backdrop-blur-md transition mt-[30px] lg:mt-[100px] "
                          // data-aos="fade-up"
                        >
                          <Link to={"services/1"}>
                            {lan == false ? "Read more" : " اقرأ المزيد "}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <LazyLoadImage
                      src={image2}
                      className="w-full ] h-[258px] sm:h-[300px] md:h-[400px] lg:h-[500px] "
                      delayTime={500}
                    />
                    {/* <LazyLoadImage
                      src={image2}
                      className="w-full h-[258px] md:h-[100%]"
                      delayTime={500}
                    /> */}
                  </div>
                )}
                {/* text */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

export default React.memo(Slider);

//
