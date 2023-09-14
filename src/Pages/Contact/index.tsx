import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "../../ContextStore";
import axios from "axios";
import { useForm } from "react-hook-form";
import phone from "../../assets/icons/call-icon.svg";
import { TfiLocationPin } from "react-icons/tfi";
import MapView from "./MapView";
const linkGoogleMapLocation =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.255562561206!2d46.6997335070791!3d24.683740062498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f037b747cc6f7%3A0xab79954fefacd39c!2s2195%20Makkah%20Al%20Mukarramah%20Branch%20Rd%2C%20As%20Sulimaniyah%2C%20Riyadh%2012621%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1622627566474!5m2!1sen!2seg";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const Context = useContext(ContextGlobal);
  const [spinner, setSpinner] = React.useState(false);
  const [mass, setMass] = React.useState(false);
  const [data, setDate] = React.useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const lan = Context.Lan;
  const setlan = Context.setLan;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const AnyReactComponent = (lat: number, lng: number, text: string) => (
    <div>{text}</div>
  );

  const handelFormContact = async (e: any) => {
    {
      e.name == "" ? (data.name = true) : (data.name = false);
    }
    {
      e.email == "" ? (data.email = true) : (data.email = false);
    }
    {
      e.subject == "" ? (data.subject = true) : (data.subject = false);
    }
    {
      e.message == "" ? (data.message = true) : (data.message = false);
    }
    setSpinner(true);
    setTimeout(async () => {
      await axios
        .post(`https://myawesomehost.com/api/contact-forms`, e)
        .then((res) => {
          console.log(res);
          setSpinner(false);
          setMass(false);
        })
        .catch((err) => {
          console.error(err);
          setSpinner(false);
          setMass(true);
        });
    }, 1000);
  };

  return (
    <div
      dir={lan ? "rtl" : "ltr"}
      className={`bg-white  md:pt-0 ${lan ? "font-primaryA" : "font-erasITC"}`}
    >
      <div className="relative h-auto md:h-[65vh]">
        {/* <iframe
          src={linkGoogleMapLocation}
          className="h-[50vh] md:h-full w-full"
          loading="lazy"
        ></iframe> */}

        <MapView />

        {/* !!! */}
        <div
          className={`flex   items-center gap-3 md:gap-6 lg:bottom-0 lg:w-[500px] lg:absolute md:left-1/2  bg-[url('/src/assets/imgs/contact/contact-page-photo.jpeg')] mx-3 md:mx-[70px] mt-6 h-[290px] md:h-[236px] `}
        >
          <div className="h-full lg:h-[235px] w-[50px] bg-vividRed flex items-center justify-center ">
            <p
              className={`text-white text-[24px]  md:text-2xl whitespace-nowrap font-medium -rotate-90 `}
            >
              {!lan ? "CONTACTUS " : "اتصل بنا"}
            </p>
          </div>
          <div className="flex flex-col   lg:h-min items-center w-full">
            <div className="flex flex-col md:flex-row lg:h-min items-center md:px-3 lg:px-11  ">
              <div className="h-[55px]  lg:h-[70px] w-[55px]  lg:w-[70px] mr-2 rounded-full bg-vividRed flex justify-center items-center">
                <img
                  src={phone}
                  className="h-[25px]  lg:h-[25px] w-[40px]  lg:w-[30px]"
                />
              </div>
              <div className={`${lan ? "mr-1 md:mr-3" : "ml-1 md:ml-3"} mt-2`}>
                <p className="text-white text-[17px]  font-rajdhani">
                  {!lan
                    ? "For any inquiries call now "
                    : "لأية استفسارات اتصل الآن"}
                </p>
                <p
                  className="text-[30px]  lg:text-[27px] text-white"
                  dir={"ltr"}
                >
                  +966 114615299
                </p>
              </div>
            </div>
            <p
              className="
                    text-[22px]  lg:text-[22px] px-6 transition-all duration-300 ease-in-out 
                    text-center font-medium mt-4  ml-6 leading-6 text-white hover:bg-vividRed hover:text-white"
            >
              info@technicalunited.com
            </p>
          </div>
        </div>
      </div>

      <div className="md:p-[100px] md:container md:mx-auto shadow-contact-box mt-2 md:mt-[250px] lg:mt-0">
        <div className="flex flex-col lg:w-80 mg:w-full md:px-8 mb-5 md:mb-20 pb-3 items-center justify-center">
          <div
            className="
                flex w-[80px] md:w-14 lg:w-20 md:h-14 h-[80px] lg:h-20 text-xl md:text-2xl lg:text-4xl items-center text-white 
                justify-center bg-[#d71921] rounded-full mb-4 md:mb-5 lg:mb-8"
          >
            <TfiLocationPin />
          </div>
          <h3 className="text-xl md:text-2xl ">
            {lan ? "العنوان" : "Address"}
          </h3>
          <p className="text-doveGray text-center text-sm md:text-17px">
            {lan
              ? "الرياض 11482, المملكة العربية السعودية."
              : "Riyadh 11482, Kingdom of Saudi Arabia."}
          </p>
        </div>
        <div
          className={`${!lan ? "tracking-[2px]" : "text-right"} mb-5 md:mb-14 px-4 md:px-0 `}
        >
          <h1 className=" text-vividRed mb-1 text-xs md:text-sm">
            {!lan ? "CONTACT FORM" : "نموذج اتصل بنا"}
          </h1>
          <p className="text-2xl md:text-45px font-bold leading-[50px]">
            {!lan ? " Request A Quote" : "طلب عرض سعر"}
          </p>
        </div>
        <form
          className="grid grid-cols-1 md:grid-cols-12 gap-3 gap-y-[10px] px-4 md:px-0 mt-x-3 text-lg md:text-xl"
          // onSubmit={handleSubmit(handelFormContact)}
        >
          <div className="col-span-4 flex flex-col md:pr-4 ">
            <input
              type="text"
              // className={` bg-[#F5F5F5] outline-none px-6 py-2 mb-3 md:mb-6 h-12 md:h-16`}
              className={` bg-[#F5F5F5] outline-none px-6 py-2 mb-3  h-12 md:h-16`}
              // placeholder="First Name"
              placeholder={`${!lan ? "First Name" : "الاسم الأول"}`}
              {...register("name")}
              required
            />
            {data.name && (
              <p className=" text-vividRed text-[17px]">
                {!lan ? "The field is required." : "هذا الحقل مطلوب."}
              </p>
            )}

            <input
              type="text"
              className={`bg-[#F5F5F5] outline-none px-6 md:mt-6 py-2 h-12 md:h-16`}
              // placeholder="First Name"
              placeholder={`${!lan ? "Last Name" : "الاسم الأخير"}`}
              {...register("name")}
              required
            />
            {data.name && (
              <p className=" text-vividRed text-[17px] mt-3">
                {!lan ? "The field is required." : "هذا الحقل مطلوب."}
              </p>
            )}
          </div>
          <div className="col-span-4 flex flex-col md:pr-4">
            <input
              type="text"
              // className={` bg-[#F5F5F5] outline-none px-6 py-2 mb-3 md:mb-6 h-12 md:h-16`}
              className={` bg-[#F5F5F5] outline-none px-6 py-2 mb-3  h-12 md:h-16`}
              placeholder={`${!lan ? "Email address" : "البريد الالكتروني"}`}
              {...register("email")}
              required
            />
            {data.email && (
              <p className=" text-vividRed text-[17px] ">
                {!lan ? "The field is required." : "هذا الحقل مطلوب."}
              </p>
            )}

            <input
              type="text"
              className={` bg-[#F5F5F5] outline-none px-6 md:mt-6 py-2 h-12 md:h-16`}
              placeholder={`${!lan ? "Number Phone" : "الهاتف"}`}
              {...register("subject")}
              required
            />
            {data.subject && (
              <p className=" text-vividRed text-[17px] mt-3">
                {!lan ? "The field is required." : "هذا الحقل مطلوب."}
              </p>
            )}
          </div>
          <div className="col-span-4 flex flex-col ">
            <textarea
              className={` bg-[#F5F5F5] outline-none px-6 py-2 min-h-[150px]`}
              placeholder={`${!lan ? "Write Message" : "رسالتك"}`}
              {...register("message")}
              required
            />
            {data.message && (
              <p className="text-vividRed text-[17px] mt-3">
                {!lan ? "The field is required." : "هذا الحقل مطلوب."}
              </p>
            )}
          </div>
        </form>
        <div className="flex  justify-center mt-12 m-3 md:m-10 ">
          <div className="flex flex-col">
            <button
              onClick={handleSubmit(handelFormContact)}
              type="submit"
              className="bg-[#EE1B25] px-9 md:px-20 py-3 md:py-5 text-xs md:text-[17px] text-white transition-all duration-200 delay-75 hover:bg-[#23282d]"
            >
              {!lan ? " Submit Request" : "ارسال"}
            </button>
            <span className={`spinner ${spinner ? "!visible" : "!hidden"}`} />
          </div>
        </div>
        {mass ? (
          <div className={`p-1 border-2 border-[#ffb900]  `}>
            {!lan
              ? "One or more fields have an error. Please check and try again."
              : "يوجد خطأ أو أكثر بأحد الحقول، يرجى التحقق ومن ثم المحاولة مرة أخرى."}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
