import React, { useContext } from "react";
import image from "../../assets/TU-sites-Distribution-2021.jpeg";
import logo from "../../assets/imgs/logos.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";
import { ContactBox, SelectItem } from "../../components";
const Coverage = () => {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const location = useLocation();
  const navigate = useNavigate();
  const setSelect = Context.setSelectCat;
  React.useEffect(() => {
    setSelect("company")
  },[])
  const onSelectIdData = (id: string) => {
    if (id) {
      navigate(`/${id}`);
    } else {
      // must be here alret
      console.log("Page not found");
    }
  };
  const navTitle = [
    { id: "1", name: "About Us", nameA: "عن الشركة", path: "about" },
    { id: "2", name: "Coverage", nameA: "التغطية", path: "coverage" },
    {
      id: "3",
      name: "Served Sectors",
      nameA: "قطاعات الخدمات",
      path: "servedsectors",
    },
  ];
  return (
    <div>
      <div
        className={`md:container md:mx-auto  grid grid-cols-1 lg:grid-cols-3 md:p-6 gap-2 pb-5 md:pb-52 ${
          !lan ? "font-erasITC" : "text-right font-primaryA"
        }`}
      >
        <div
          className={`  col-span-2 px-4 md:px-0 md:p-3 md:mt-8 lg:mt-[20px] ${
            !lan ? "" : "order-last"
          }  `}
        >
          <h1 className=" text-2xl md:text-[36px] text-[#111215] font-bold pb-5">
            {!lan ? "Business Geographical Coverage" : " مناطق التغطية"}
          </h1>
          <p className="text-17px text-[#666666] ">
            {!lan
              ? "Technical United’s Head Office is located in Riyadh with branch offices in 22 locations in various sea ports and land border crossings of Saudi Arabia, including Alhaditha Border, Jadidat Ar’ar Border, Halat Ammar Border, Durrah Border, Diba Port, Al Reqie Border, Al Khafji Border, Dammam – King Abdilaziz Port, Dammam – King Fahad Airport, King Fahad Causeway Border, Riyadh – King Khalid Airport, Salwa Border, Al Batha Border, Al Kharkhir Border, Al Wadiah Border, Al Khadra Border, Alb Border, Al Tuwal Border, Jeddah Islamic Port, Jeddah – King Abdulaziz Airport, Rabigh – King Abdullah Port and Yanbu Port. Coverage of technical support and logistics services extends to all regions of Saudi Arabia through seven service areas covering all the cities and border crossing points, in addition to the availability of central workshops for mechanical, electrical and electronic works in Dammam, Jeddah and Riyadh."
              : "يقع المكتب الرئيس في مدينة الرياض، بالإضافة الى التواجد في ۲۲ مركزا في مختلف منافذ المملكة البرية والبحرية ومنها: منفذ الحديثة الحدودي، منفذ جديدة عرعر، منفذ حالة عمار الحدودي، منفذ الدرة الحدودي، ميناء ضباء، منفذ الرقعي الحدودي، منفذ الخفجي الحدودي، وميناء الملك عبد العزيز بالدمام، مطار الملك فهد الدولي في الدمام، جسر الملك فهد الحدودي، مطار الملك خالد الدولي في الرياض، منفذ سلوى الحدودي، منفذ البطحاء الحدودي، منفذ الخرخير الحدودي، منفذ الوديعة الحدودي، منفذ الخضراء الحدودي، منفذ علب الحدودي، منفذ الطوال الحدودي، ميناء جدة الإسلامي، مطار الملك عبد العزيز الدولي في جدة، ميناء الملك عبد الله في رابغ، وميناء ينبع التجاري. وتمتد تغطية الدعم الفني والتقني واللوجستي في كل مناطق المملكة العربية السعودية من خلال سبع مناطق للخدمات والدعم الفني تغطي مدن المملكة ومنافذها البرية والجوية والبحرية كافة، إضافة إلى الورش المركزية للأعمال الميكانيكية والكهربائية والإلكترونية في الدمام وجدة والرياض."}
          </p>
          <div className="mt-3">
            <img src={image} alt="image" />
          </div>
        </div>
        <div className="mt-20 md:mt-[50px] p-1  ">
          <div className="z-10">
            <div className="flex flex-col ">
              {navTitle.map((item, x) => (
                <SelectItem
                  key={item.id}
                  name={lan ? item.nameA : item.name}
                  textColor={
                    location.pathname == "/" + item.path ? "#fff" : "black"
                  }
                  bgColor={
                    location.pathname == "/" + item.path ? "#EE1B25" : "#EDEDED"
                  }
                  onSelect={() => onSelectIdData(item.path)}
                />
              ))}
            </div>
          </div>

          <ContactBox />
          <div className="h-[150px] bg-[#f4f4f4] p-3 mt-10 flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
