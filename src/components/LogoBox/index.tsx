import React from 'react';
import logoImg from "../../assets/imgs/logos.png";
type ContactBoxProps = {
  style?: React.ComponentProps<'div'>['className'];
}
export const LogoBox = ({ style }: ContactBoxProps) => {
  return (
    <div
      className={`flex flex-col h-40 bg-wildSandSolid my-3 justify-center items-center px-5  ${style}`}>
        <img
          src={logoImg}
          className='h-40 w-full object-contain' />
    </div>
  )
}
{/* <div className="h-[150px] bg-[#f4f4f4] p-3 mt-10 flex justify-center items-center">
            <img src={logo} alt="" />
          </div> */}
export default LogoBox;