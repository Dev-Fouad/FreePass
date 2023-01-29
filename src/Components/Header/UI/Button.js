import React from "react";

function Button (props){
    return (
        <button className="px-5 h-12 w-36 font-inter text-[#FFFFFF] border-2 font-medium text-sm rounded-lg ml-80 border-[#FFFFFF] bg-[#8753AD]  max-md:hidden max-lg:hidden">{props.children}</button>
    )
}

export default Button;