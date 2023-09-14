import React from 'react';
import { ContextGlobal } from '../../ContextStore';
import { Link } from 'react-router-dom';

type ContactBoxProps = {
  style?: React.ComponentProps<'div'>['className'];
}
export const ContactBox = ({ style }: ContactBoxProps) => {
  const Context = React.useContext(ContextGlobal);
  const lan = Context.Lan;
  return (
    <div
      dir={lan ? "rtl" : "ltr"}
      className={`flex flex-col h-40 bg-wildSandSolid my-3 justify-start font-medium px-5 pt-5 text-[#070707] ${style}`}>
        <h1
          className='text-[26px] '>{!lan ? "Contact Us" : "اتصل بنا"}</h1>
        <div
          className='w-full flex flex-row items-center mb-3'>
            <div
              className='h-[6px] w-[6px] bg-[#C5282F]' />
            <div
              className='h-[2px] w-12 bg-[#C5282F] ml-1' />
        </div>
        <p
          className='text-lg text-doveGray   '>
            {!lan ? "Let us tailor a system that suits your needs " : "نطور أنظمة تواكب احتياجاتك."}
            <Link to="/contact" className={`${lan ? "font-erasITC" :"font-rajdhani"} text-[#161616] hover:text-vividRed font-bold`}>{!lan ? "Contact us " : " تواصل معنا "}</Link> 
            {!lan ? "today." : "الآن لتتعرف على التفاصيل "}
        </p>
    </div>
  )
}

export default ContactBox;