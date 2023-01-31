import React from "react";
import Book from "../../Assets/BOOK.png"

function Board({image, text1, text2}) {
    return (
        <div className="  border-2 border-[#F3E1FF] w-[361px] h-[340px] pt-[51.05px] pl-[29.48px] pr-[20.32] pb-[40.5px] rounded-[9.50833px] bg-[#FFFF] hover:bg-[#E9DAFE] ">
            <img src={image} alt=""></img>

            <h2 className=" mt-[20.92px] text-[#000] font-Raleway text-[20.92px] font-semibold leading-[33.2px] w-[290px]">{text1}</h2>
            <p className=" w-[312px] mt-[23.32px] font-semibold text-[14.26px] font-Raleway leading-[24.72px]">{text2}</p>
        </div>
    )
}
export default Board;
