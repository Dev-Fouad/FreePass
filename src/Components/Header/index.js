import React from "react"

import { BsChevronDown } from "react-icons/bs";
import Button from "./UI/Button";
import logo from "../Assets/logo.png";

function Header() {
    return (
        <>
            {/* THE HEADER */}

            <div className="h-24 pl-36 pr-34 flex items-center bg-purple    max-md:pl-[22.5px] max-lg:pl-12">
                {/* the logo */}
                <img src={logo} alt="" />

                {/* The nav links */}
                <ul className=" ml-8 gap-3ml-8 text-[#E9D7FE] text-base font-semibold flex font-Raleway space-x-6   max-md:hidden max-lg:hidden">
                    <li><a href="#">Home</a></li>
                    <li className="flex space-x-2"><a href="#">Product</a><span className="pt-1"><BsChevronDown /></span></li>
                    <li><a href="#">WhyFreePass</a></li>s
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                {/* Button */}
                <Button>Sign Up</Button>

            </div>


            {/* The  Hero*/}
            <div className=" flex  h-[998px] pl-36 pt-[115px] bg-purple   max-md:pl-[22.5px] max-md:pr-[27.5px] max-md:pt-10  max-lg:pl-12 max-lg:pt-[80px]">
              <div>
                <h2 className="font-Raleway font-semibold text-[47.78px] text-[#FFFFFF] leading-[56.09px]">Zero-rated digital<br/>content delivery<br/>platform for Africa</h2>
                <p className="font-Raleway pt-[31.5px] text-xl text-[#E8E7E8]"> Deliver <span className="italic font-extrabold text-xl">Free Pass | Zero-Rated .</span> </p>
                <p className="text-[19.2px] mt-[31.5px] leading-[29px]  font-Raleway font-medium text-[#E8E7E8] w-[436px]">Zero Rate by FreePass  platform is engineered<br/> to power on-demand and real-time crystal clear video, audio contents for underserved and underprivileged Africans.</p>
              </div>
            </div>
        </>
    )
}

export default Header
