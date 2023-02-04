import React from "react";
import {AiOutlineLogin} from "react-icons/ai";


function Button2(props) {
    return (
      <button className="h-[74px] w-[271px] font-Raleway font-semibold text-xl mt-[80px] text-[#8F64AD] border-2 rounded-lg bg-[#FFFFFF] flex items-center justify-center max-md:w-[309px] max-lg:w-[700px]">{props.children} <AiOutlineLogin className="ml-2"/></button>
  )
}

export default Button2;
