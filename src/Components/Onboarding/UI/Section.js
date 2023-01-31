import React from "react";


function Section({image, text1, text2}){
    return (
        <>
          <div className="flex  h-[158px] w-[319px] space-x-[21px]">
            <img src={image} alt="" className="h-[49px] "/>
            <div>
                <h2 className="font-Raleway font-semibold text-[19.2px] leading-[22.54px] text-black">{text1}</h2>
                <p className=" pt-5  font-Raleway leading-[21.8px] text-[16px] text-dark ">{text2}</p>
            </div>
          </div>
        </>
    )
}

export default Section;
