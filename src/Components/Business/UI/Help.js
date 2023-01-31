import React from "react"
import Icon from "../../Assets/Group 155.png"


function Helpers({Text}) {
    return (
        <>
            <div className=" flex mt-4 space-x-4">
                <img src={Icon} alt="" ></img>
                <p className=" font-medium  text-[#FFFF] font-Raleway text-[19px] leading-[22.54px]">{Text}</p>
            </div>
        </>
    )
}

export default Helpers;
