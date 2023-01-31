import React from "react";
import BG from "../Assets/Group 4371.png"
import Helpers from "./UI/Help";


function Business (){
    return (
        <>
            <div className="border-2 h-[698px]  items-center flex justify-between bg-Bblack max-md:flex-col  max-md:justify-center max-md:h-[900px] max-lg:flex-col max-lg:h-[1200px] ">
                
             <div className=" text-[#FFFF] ml-[5rem] max-md:ml-2  max-lg:ml-0">
                <h2 className=" text-base font-semibold font-Raleway">For Business</h2>
                <p className="w-[540px] font-Raleway font-semibold text-[39.81px] leading-[46.74px] mt-3 max-md:hidden"> Push multimedia content to targeted African audiences</p>
                <p className=" font-medium w-[446px] text-[19.2px] leading-[31.5px] font-Raleway mt-[32px]  max-md:w-[335px]">Break barriers and limitations to push your curated video & audio HD content directly targeting consumers’ mobile devices with convenience - leverage the power of zero-rated PAN-African mobile access.</p>
                
                <Helpers Text="Streaming Media Hosting"/>
                <Helpers Text="APN  Livestream"/>
                <Helpers Text="Host on-demand multimedia"/>
             </div>

             <img src={BG} alt=""  className="w-[774px] h-[694px] max-md:h-[300px]  max-md:mt-16"></img>
            </div>
        </>
    )
}

export default Business;
