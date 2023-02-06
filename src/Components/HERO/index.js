import React from "react";

import Heropics from "../Assets/Heropics.png"
import Button2 from "./UI/Button2";
import light from "../Assets/Light accent.png"
import light2 from "../Assets/Light accent (1).png"
import Onboarding from "../Onboarding/Index";
import Business from "../Business/Index";
import Sero from "../Sero/index";
import Testimony from "../Testimony/index";



const Hero = () => {
  return (
    <>
    <div className="flex h-[935.5px]  justify-between pl-36 pt-[115px] bg-purple   max-md:pl-[28px] max-md:pr-[27.5px] max-md:pt-12  max-lg:pl-12 max-lg:pt-[80px] max-lg:flex-col max-md:h-[70rem] max-lg:h-[90rem] max-md:justify-start">

        <div>
            <h2 className="font-Raleway font-semibold text-[47.78px] text-[#FFFFFF] leading-[56.09px]    max-md:text-[36px] ">Zero-rated digital<br />content delivery<br />platform for Africa</h2>
            <p className="font-Raleway  font-medium pt-[31.5px] text-xl text-[#E8E7E8]        max-md:pt-[26.5px] "> Deliver <span className="italic font-extrabold text-xl ml-2">Free Pass <span className="border-l-2 ml-2 mr-2"></span> Zero-Rated .</span> </p>
            <p className="text-[19.2px] mt-[31.5px] leading-[29px] font-Raleway font-medium text-[#E8E7E8] w-[436px]    max-md:mt-[25px] max-md:w-[300px] max-md:text-[16px] max-lg:w-[700px] ">Zero Rate by FreePass  platform is engineered to power on-demand and real-time crystal clear video, audio contents for underserved and underprivileged Africans.</p>
            <Button2>Join our Waitlist</Button2>
        </div>

        <div className="relative">
            <img src={Heropics} alt="" className="w-[774px] h-[604px] pb-6   mr-[5rem]  max-md:h-[355px] max-md:mt-[43px] max-lg:w-[700px] max-md:mr-0" />
            <img src={light} alt="" className=" absolute top-[22.4rem]  left-[0rem] max-md:hidden  max-lg:hidden " />
            <img src={light2} alt="" className="hidden  max-md:block max-md:absolute max-md:top-[2rem] max-md:left-6 max-lg:hidden "/>
        </div>

    </div>

        <div>
            <Onboarding/>
            <Business/>
            <Sero/>
            <Testimony/>
        </div>
    </>
  )
}

export default Hero