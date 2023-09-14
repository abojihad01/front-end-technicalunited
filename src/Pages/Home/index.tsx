import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";
import {
  Services,
  AboutUs,
  ChooseUs,
  ContactUs,
} from "../../components/Component-Home";
import { Slider } from "../../components";
import HelmetIcon from "../../assets/icons/helmet_icon.svg";
import { FaImage } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { home_ar, home_en } from "../../constants/Language";

const Home = () => {
  const navigate = useNavigate();
  const { Lan, setLan } = useContext(ContextGlobal);

  const handleServiceClick = () => {
    navigate("/services");
  };

  const renderExploreServicesText = () => {
    const exploreText = Lan ? home_ar.exploreText : home_en.exploreText;
    return (
      <p
        className={`text-lg  ${
          Lan ? "text-right" : "text-left"
        } font-rajdhani font-black`}
      >
        {exploreText}
      </p>
    );
  };

  const renderJoinNowButton = () => {
    const joinText = Lan ? home_ar.joinText : home_en.joinText;
    const buttonStyles = `w-16 h-6 md:w-[134px] md:h-[45px] text-xs md:text-base ${
      !Lan ? "ml-10" : "mr-10"
    } bg-zinc-950 font-erasITC hover:bg-zinc-700 text-white hover:bg-black-100`;

    return (
      <button className={buttonStyles}>
        <Link to="/careers">{joinText}</Link>
      </button>
    );
  };

  return (
    <div className={`${!Lan ? "font-erasITC" : "font-primaryA"}`}>
      <Slider />
      <Services />
      <div
        className={`flex justify-center items-center  ${
          !Lan ? "mt-16 md:mt-52 lg:mt-[400px]" : "md:mt-14 lg:mt-40"
        }`}
      >
        <div className="flex flex-col container md:mt-28 lg:mt-3 justify-center items-center">
          <div className="relative h-[1px] bg-gray-200 w-[90%] -z-10 top-5" />
          <div className="block relative h-[1px] bg-[#fff9f3] w-16 lg:w-16  -z-1 top-[19px]"></div>
          <div
            className="bg-[#ee1b25] h-[40px] w-[40px] rounded-full p-4 flex justify-center items-center hover:bg-black cursor-pointer relative drop-shadow-[0_4px_9px_rgba(238,27,37,0.30)]"
            onClick={handleServiceClick}
          >
            <div className="relative h-[1px] bg-red-600 w-[100px] -z-10 top-0" />
            <i className="fa fa-plus text-[#fff]" />
          </div>
          {renderExploreServicesText()}
        </div>
      </div>

      <AboutUs />
      <ChooseUs />
      <div className="bg-[#F3F3F3]">
        <div
          className={`md:container md:grid md:grid-cols-12 gap-5 md:mx-auto p-2 py-8 px-7 md:px-0 md:p-0 flex ${
            !Lan ? "" : "flex-row-reverse"
          } items-center gap-3`}
        >
          <div
            className={`flex ${
              !Lan ? "flex-row" : "flex-row-reverse"
            } md:col-span-9 py-5 lg:col-span-6 md:ml-8 items-center`}
          >
            <LazyLoadImage
              src={HelmetIcon}
              alt="Helmet Icon"
              // delayTime={500}
              placeholder={<FaImage />}
              className={`w-6 md:w-8 lg:w-[46px] h-7 md:h-9 lg:h-[52px] ${
                !Lan ? "mr-3" : "ml-3"
              }`}
            />
            <p className="text-sm md:text-base lg:text-[30px] font-erasITC font-normal">
              {Lan ? home_ar.joinDescriptionText : home_en.joinDescriptionText}
            </p>
            {renderJoinNowButton()}
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
