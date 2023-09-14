import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ContextGlobal } from '../../ContextStore';

type NextAndPrevItemProps = {
  onSelect: () => void;
  title: string;
  titleA: string;
  reverse?: boolean
};

const NextAndPrevButton: React.FC<NextAndPrevItemProps> = ({ onSelect, title, titleA, reverse = false }) => {
  const { Lan } = React.useContext(ContextGlobal);
  return (
    <div
      className={`flex group ${ reverse ? "flex-row" :'flex-row-reverse'} gap-x-2 md:gap-x-4 items-center cursor-pointer`}
      onClick={onSelect}
    >
      <div className='
        flex h-[35px] w-[25px] md:h-[75px] md:w-[65px] text-2xl 
        border-4 border-solid border-[#F4F4F4]
        group-hover:text-vividRed justify-center items-center'>
        {Lan && (!reverse ? <IoIosArrowBack /> : <IoIosArrowForward />) }
        {!Lan && (reverse ? <IoIosArrowBack /> : <IoIosArrowForward />) }
      </div>
      <h1 className='text-sm md:text-lg group-hover:text-vividRed'>
        {Lan ? titleA : title}
      </h1>
    </div>
  );
};

export default NextAndPrevButton;