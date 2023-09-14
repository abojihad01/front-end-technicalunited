import React, { useContext, useState } from "react";
import { ContextGlobal } from "../../ContextStore";
import { BiMinus, BiPlus } from "react-icons/bi";

type AccordionProps = {
  data: any;
};

export function Accordion({ data }: AccordionProps) {
  const [open, setOpen] = useState("");
  const Context = useContext(ContextGlobal);
  const lan = Context.Lan;
  const setlan = Context.setLan;

  const toggle = (i: string) => {
    if (open == i) setOpen("");
    return setOpen(i);
  };

  return (
    <>
      {data.map((value: any, i: any) => (
        <>
          <div
            key={i}
            onClick={() => {
              toggle(i);
            }}
            className={`${
              open == i
                ? "bg-[#09162a] text-white"
                : "bg-white hover:bg-gray-100"
            } p-3 ${i !== 0 && "mt-4"} flex justify-between ${
              !lan ? " flex-row" : " flex-row-reverse "
            }  cursor-pointer
            ${!lan ? "font-erasITC" : "font-primaryA"} `}
          >
            <p className=" text-xl font-bold ">
              {!lan ? value.title : value.titleA}
            </p>
            <div
              className={`h-[30px] w-[30px] ${
                open == i ? "bg-[#d71921]" : "bg-[#F5F5F5]"
              } flex justify-center items-center `}
            >
              <i className={`${open == i ? "text-white" : "#fff"} text-[20px]`}>
                {open == i ? <BiMinus /> : <BiPlus />}{" "}
              </i>
            </div>
          </div>
          {open == i ? (
            <div
              className={`
              bg-white text-[17px] font-normal leading-6 text-[#666] 
              p-3 mt-1 flex flex-col gap-y-4  ${!lan ? "" : "text-right"} ${
                !lan ? "font-erasITC" : "font-primaryA"
              }  px-5 py-[14px] transition-all duration-300 ease-in-out`}
            >
              <p>{value.doc && (!lan ? value.doc : value.docA)}</p>
              <p>{value.doc2 && (!lan ? value.doc2 : value.doc2A)}</p>
              {value.docArr &&
                (!lan ? (
                  <ul className="flex flex-col list-disc gap-y-3 pl-4">
                    {value?.docArr?.map((item: any) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ul
                    dir="rtl"
                    className=" flex flex-col list-disc gap-y-3 pr-4"
                  >
                    {value?.docArrA?.map((item: any) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                ))}
            </div>
          ) : null}
        </>
      ))}
    </>
  );
}
