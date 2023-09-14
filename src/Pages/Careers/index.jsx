import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";

import { HeaderPages } from "../../components";
import { blogsData } from "../../constants";
import axios from "axios";
import { useForm } from "react-hook-form";
function Careers() {
  const navigate = useNavigate();
  const Context = useContext(ContextGlobal);
  const [cv, setCv] = React.useState(null);
  const [spinner, setSpinner] = React.useState(false);
  const [mass, setMass] = React.useState(false);
  const [data, setDate] = React.useState({
    first_name: false,
    last_name: false,
    mobile: false,
    city: false,
    email_address: false,
    experience: false,
    age: false,
    phone_number: false,
  });
  const lan = Context.Lan;
  const setlan = Context.setLan;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({});

  const submietForm = async (e) => {
    const formData = new FormData();
    formData.append("cv", cv);
    formData.append("first_name", e.first_name);
    formData.append("last_name", e.last_name);
    formData.append("mobile", e.mobile);
    formData.append("city", e.city);
    formData.append("email_address", e.email_address);
    formData.append("experience", e.experience);
    formData.append("age", e.age);
    formData.append("phone_number", e.phone_number);

    {
      e.first_name == "" ? (data.first_name = true) : (data.first_name = false);
    }
    {
      e.last_name == "" ? (data.last_name = true) : (data.last_name = false);
    }
    {
      e.mobile == "" ? (data.mobile = true) : (data.mobile = false);
    }
    {
      e.city == "" ? (data.city = true) : (data.city = false);
    }
    {
      e.email_address == ""
        ? (data.email_address = true)
        : (data.email_address = false);
    }
    {
      e.experience == "" ? (data.experience = true) : (data.experience = false);
    }
    {
      e.age == "" ? (data.age = true) : (data.age = false);
    }
    {
      e.phone_number == ""
        ? (data.phone_number = true)
        : (data.phone_number = false);
    }

    setSpinner(true);

    setTimeout(async () => {
      axios
        .post("https://myawesomehost.com/api/careers-forms", formData)
        .then(function (response) {
          //handle success
          response.json();
        })
        .then(function (result) {
          //handle success
          console.log(result);
          setSpinner(false);
          setMass(false);
        })
        .catch(function (error) {
          //handle error
          console.log(error);
          setSpinner(false);
          setMass(true);
        });
    }, 1000);
  };
  return (
    <div
      className={` ${lan ? "font-primaryA" : "font-erasITC"} `}
      dir={lan ? "rtl" : "ltr"}
    >
      <HeaderPages title={!lan ? "CAREERS" : "التوظيف"} />
      <div className="md:container md:mx-auto  px-[50] md:pb-40">
        <div className={`${!lan ? "" : " text-right"}`}>
          <h1 className=" font-bold text-46px py-5">
            {!lan ? "CAREERS" : "التوظيف"}
          </h1>
          <p className="text-[17px] text-[#666]">
            {!lan
              ? "Technical United is a rapidly growing niche company with an ambitious nature to compete with the biggest and best companies in the industry. If you are in search for a career opportunity as opposed to a mere job, we are looking for the most talented individuals to become part of our specialized team."
              : "الشركة المتحدة  شركة مرموقة تطمح إلى منافسة الشركات العالمية في مجال الأمن الإلكتروني والتكنولوجيا. في حالة أنك تبحث عن فرصة عمل مع فريق من أفضل المتخصصين، نحن نبحث عنك أيضًا لتكون جزء من هذا الفريق."}
          </p>
          <p className="text-[17px] text-[#666] mt-6">
            {!lan
              ? "We recognise the importance of the human element as it translates to future growth and prosperity; therefore we offer competitive starting packages with benefits and on-the-job development programs."
              : "نعي جيدًا أهمية الكوادر البشرية للشركة حيث أنها الإنعكاس الأول لتقدم أي مؤسسة، لذلك نقدم فرص عمل بمزايا مغرية، وفرص رائعة للتطور المهني."}
          </p>
          <p className="text-[17px] text-[#666] mt-6">
            {!lan
              ? "Thank you for your interest in becoming part of the Technical United. Please fill the below form"
              : "شكرًا على اهتمامكم بالشركة  المتحدة، برجاء ملئ الجدول التالي:"}
          </p>
        </div>
        <form className=" md:grid md:grid-rows-3 gap-3 mt-[30px] md:px-0 px-4">
          <div className="flex flex-col md:grid md:grid-cols-6 gap-3 md:mb-6">
            <div className="md:col-span-2 outline-none   md:h-16">
              <input
                type="text"
                className={` w-full md:col-span-2 outline-none bg-[#F5F5F5] px-6 py-2 h-12 md:h-16 ${
                  !lan ? "" : "text-right"
                }`}
                placeholder={`${!lan ? "First Name" : "الاسم الأول"}`}
                {...register("first_name")}
              />
              {data.first_name && (
                <p className=" text-vividRed text-[17px] mt-3 ">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}
            </div>
            <div className="md:col-span-2 outline-none   md:h-16">
              <input
                type="text"
                className={`w-full md:col-span-2 outline-none bg-[#F5F5F5] px-6 py-2 h-12 md:h-16 ${
                  !lan ? "" : " text-right"
                }`}
                placeholder={`${!lan ? "Last Name" : " الأسم التاني"}`}
                {...register("last_name")}
              />
              {data.last_name && (
                <p className=" text-vividRed text-[17px] mt-3 ">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}
            </div>
            <div className="md:col-span-2 outline-none   md:h-16">
              <input
                type="text"
                className={`w-full md:col-span-2 outline-none bg-[#F5F5F5] px-6 py-2 h-12 md:h-16 ${
                  !lan ? "" : "text-right"
                }`}
                placeholder={`${!lan ? "Mobile Number" : "الجوال"}`}
                {...register("mobile")}
              />
              {data.mobile && (
                <p className=" text-vividRed text-[17px] mt-3">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-6 md:row-span-4 gap-3 md:mt-0 mt-3 ">
            <div className=" md:col-span-2 gap-3 flex flex-col">
              <input
                type="text"
                className={`md:row-span-1 outline-none bg-[#F5F5F5] px-6 py-2 h-12 md:h-16   ${
                  !lan ? "" : "text-right"
                }`}
                placeholder={`${!lan ? "City" : " المدينة"}`}
                {...register("city")}
              />
              {data.city && (
                <p className=" text-vividRed text-[17px] ">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}

              <input
                type="text"
                className={`md:row-span-1 md:mt-6 outline-none bg-[#F5F5F5] px-6 py-2 h-12 md:h-16 ${
                  !lan ? "" : " text-right"
                }`}
                placeholder={`${!lan ? "Age" : " العمر"}`}
                {...register("age")}
              />
              {data.age && (
                <p className=" text-vividRed text-[17px] ">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}
            </div>
            <div className="flex flex-col col-span-2 gap-3">
              <input
                type="text"
                className={`bg-[#F5F5F5] outline-none row-span-1 px-6 py-2 h-12 md:h-16  ${
                  !lan ? "" : " text-right"
                }`}
                placeholder={`${!lan ? "Email address" : "البريد الإلكتروني"}`}
                {...register("email_address")}
              />
              {data.email_address && (
                <p className=" text-vividRed text-[17px] ">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}

              <input
                type="text"
                className={`bg-[#F5F5F5] outline-none px-6 py-2 md:mt-6 h-12 row-span-1 md:h-16  ${
                  !lan ? "" : " text-right"
                }`}
                placeholder={`${!lan ? "Phone Number" : "الهاتف"}`}
                {...register("phone_number")}
              />
              {data.phone_number && (
                <p className=" text-vividRed text-[17px] ">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}
            </div>
            <div className="md:col-span-2 ">
              <textarea
                className={`bg-[#F5F5F5] outline-none px-6 py-2 w-full  ${
                  !lan ? "" : "text-right"
                }`}
                rows={5}
                placeholder={`${!lan ? "Experience" : "الخبرة"}`}
                {...register("experience")}
              />
              {data.experience && (
                <p className=" text-vividRed text-[17px] ">
                  {!lan ? "The field is required." : "هذا الحقل مطلوب."}
                </p>
              )}
            </div>
          </div>
        </form>
        <div className=" grid md:grid-cols-6 mt-3 gap-3 px-4 md:px-0">
          <span className="md:col-span-4 flex flex-col py-2">
            <input
              type="file"
              className=" text-doveGray font-medium text-[17px]"
              onChange={(e) => setCv(e.target.files[0])}
            />
            <small className="text-[#d71921]">
              {!lan
                ? "upload cv with pdf extension and size not exceed 2M"
                : "سيرتك الذاتية بإمتداد pdf ولا يزيد حجمها عن 2 ميجا"}
            </small>
          </span>
          <div className="md:col-span-2 py-2">
            {/* <div className="flex flex-col"> */}
            <button
              onClick={handleSubmit(submietForm)}
              className=" bg-[#23282d] px-10 py-10px text-white text-sm leading-8 transition-all duration-100  hover:bg-[#EE1B25] mt-3 md:mt-0 "
            >
              {!lan ? "Submit Request" : "ارسال"}
            </button>
            <span className={`spinner ${spinner ? "!visible" : "!hidden"}`} />
          </div>
        </div>
        {mass ? (
          <div className={`p-1 border-2 border-[#ffb900] mt-[20px]`}>
            {!lan
              ? "One or more fields have an error. Please check and try again."
              : "يوجد خطأ أو أكثر بأحد الحقول، يرجى التحقق ومن ثم المحاولة مرة أخرى."}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Careers;
