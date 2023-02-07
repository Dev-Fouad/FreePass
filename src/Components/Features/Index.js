import React from "react";
import form from "../Assets/for.png"
import Helpers from "./UI/helpers";

function Features() {
    return (
        <>
            <div className=" h-[767px]  bg-[#FFFFFF] flex justify-center items-center space-x-[71px]  max-md:flex-col-reverse max-md:h-[1064px] max-md:space-x-0  max-lg:flex-wrap max-lg:h-[1200px]">

                <img src={form} alt="" className="w-[512px] max-md:w-[341px] max-md:mt-12" />

                <div>
                    <h2 className=" font-Raleway font-semibold text-base text-blue ">For You</h2>
                    <h1 className="w-[631px] mt-2 font-Raleway font-semibold text-[39.81px]  leading-[46.74px] max-md:w-[325px] max-md:text-[30px]">Easy mobile subscription to access quality streaming on our platform</h1>
                    <p className="w-[573px] font-Raleway font-medium text-[19.2px] leading-[31.5px] text-dark  mt-[22px] max-md:w-[335px]">From easy existing subscription with FreePass combo, to convenient zero-rate data access to top-quality streaming, or on-demand video content from your favorite multimedia content providers  on the FreePass platform.</p>

                    <Helpers Text="Enjoy Zero Rate data bundle"/>
                    <Helpers Text="Zero Rate EduAccess"/>
                    <Helpers Text="Get Live TeleHealth sessions "/>
                </div>

            </div>
        </>
    )
}


export default Features;
