import React from 'react';
import { FaAngleRight } from 'react-icons/fa'
import { ContextGlobal } from '../../ContextStore';
type SelectItemProps = {
  name: string;
  textColor?: string;
  bgColor?: string;
  onSelect?: React.MouseEventHandler<HTMLDivElement>;
}

const SelectItem = ({name, textColor = "#000", bgColor = "#FFF", onSelect}: SelectItemProps) => {
  const { Lan } = React.useContext(ContextGlobal);

  return (
    <section
      dir={Lan ? "rtl" : "ltr"}
      className={`
        widget widget_recent_services cursor-pointer ${Lan ? "font-primaryA font-normal" : "font-erasITC font-semibold"}
        `}
      // id="recent-services-1"
      // className=""
      // style={{ backgroundColor: bgColor }}
      onClick={onSelect}>
        {/* <h1
          className={``}
          style={{color: textColor}}>{name}</h1>
        <IoIosArrowForward
          size={20}
          color={textColor} /> */}
        <ul>
          <li>
            <div >
                <FaAngleRight
                  size={18}
                  className={`absolute z-10 ${Lan && "rotate-180"} right-3 my-auto top-0 bottom-0 text-[#000048]`}/> 
              <a
                aria-current={bgColor === "#EE1B25" ? "page" : "false"}
                className={`${Lan ? "arabicSelectText" : "englishSelectText"} `} >
              {name}
              </a>
            </div>
          </li>
        </ul>
    </section>
  )
}

export default React.memo(SelectItem);