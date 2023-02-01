import React from "react";

function Button ({children}){
    return (
        <>
            <button className=" w-[223px] h-[67px] bg-[#FFB413] rounded-lg text-[#ffff]  font-Raleway text-[18px] font-bold mt-[16px]">{children}</button>
        </>
    )
}

export default Button;