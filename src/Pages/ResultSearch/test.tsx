import { useContext } from "react";
import logo from "../../assets/imgs/logos.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextGlobal } from "../../ContextStore";
import BoxSearch from "../../components/BoxSearch";
import { HeaderPages } from "../../components";
const ResultSearch = () => {
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const location = useLocation();
  const navigate = useNavigate();
  const onSelectIdData = (id: string) => {
    if (id) {
      navigate(`/${id}`);
    } else {
      // must be here alret
      console.log("Page not found");
    }
  };

  return (
    <div>
      <HeaderPages title={lan ? "نتأج" : "Result "} />
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
          <p className="text-17px text-[#666666] px-6 py-[50px] shadow-lg ">
            {!lan
              ? "Technical United’s Head Office is located in Riyadh with branch offices in 22 locations in various sea ports and land border crossings of Saudi Arabia, including Alhaditha Border, Jadidat Ar’ar Border, Halat Ammar Border, Durrah Border, Diba Port, Al Reqie Border, Al Khafji Border, Dammam – King Abdilaziz Port, Dammam – King Fahad Airport, King Fahad Causeway Border, Riyadh – King Khalid Airport, Salwa Border, Al Batha Border, Al Kharkhir Border, Al Wadiah Border, Al Khadra Border, Alb Border, Al Tuwal Border,"
              : "يقع المكتب الرئيس في مدينة الرياض، بالإضافة الى التواجد في ۲۲ مركزا في مختلف منافذ المملكة البرية والبحرية ومنها: منفذ الحديثة الحدودي، منفذ جديدة عرعر، منفذ حالة عمار الحدودي، منفذ الدرة الحدودي، ميناء ضباء، منفذ الرقعي الحدودي، منفذ الخفجي الحدودي، وميناء الملك عبد العزيز بالدمام، مطار الملك فهد الدولي في الدمام، جسر الملك فهد الحدودي، مطار الملك خالد الدولي في الرياض، منفذ سلوى الحدودي، منفذ البطحاء الحدودي، منفذ الخرخير الحدودي،"}
          </p>
        </div>
        <div className="mt-20 md:mt-[50px] p-1  ">
          <BoxSearch />
          <div className="h-[150px] bg-[#f4f4f4] p-3 mt-10 flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSearch;
