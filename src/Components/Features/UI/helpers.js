import React from "react"
import Icon from "../../Assets/Group 155.png"


function Helpers({Text}) {
    return (
        <>
            <div className=" flex mt-4 space-x-4">
                <img src={Icon} alt="" className="h-24px"></img>
                <p className=" font-semibold  text-dar font-Raleway text-base  leading-[22.54px]">{Text}</p>
            </div>
        </>
    )
}

export default Helpers;