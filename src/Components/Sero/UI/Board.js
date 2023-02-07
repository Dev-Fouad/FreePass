import React from "react";

function Board({image, text1, text2}) {
    return (
        <div className="border-2 border-[#F3E1FF] w-[361px] h-[340px] pt-[57.05px] pl-[29.48px] pr-[20.32px] pb-[40.5px] rounded-[9.50833px] bg-[#FFFF] hover:bg-[#E9DAFE]  max-md:w-[333px] max-md:h-[321px] max-md:pl-[23px]   max-lg:w-[550px] max-md:pt-[32px] ">
            <img src={image} alt=""></img>

            <h2 className=" mt-[20.92px] text-[#000] font-Raleway text-[20.92px] font-semibold leading-[33.2px] w-[290px]  max-lg:w-[290px]">{text1}</h2>
            <p className=" w-[312px] mt-[23.32px] font-semibold text-[14.26px] font-Raleway leading-[24.72px]  max-md:mt-[19px]  max-md:w-[297px] max-lg:w-[430px]">{text2}</p>
        </div>
    )
}
export default Board;
