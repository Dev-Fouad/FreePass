import React from "react"

import { BsChevronDown} from "react-icons/bs";
// import Button from "./UI/Button"
import Button from "./UI/Button";
import logo from "../Assets/logo.png"

function Header() {
    return ( 
        <>
            {/* THE HEADER */}

            <div className="h-24  pl-36 pr-40 flex items-center  bg-purple max-md:pl-5 max-lg:pl-3 ">
             {/* the logo */}
                <img src={logo} alt="" />

             {/* The nav links */}
             <ul className=" ml-8 gap-3ml-8 text-[#E9D7FE] text-base font-semibold flex  font-Raleway space-x-6 max-md:hidden max-lg:hidden"> 
                <li><a href="#">Home</a></li>
                <li className="flex space-x-2"><a href="#">Product</a><span className="pt-1"><BsChevronDown/></span></li>
                <li><a href="#">WhyFreePass</a></li>s
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>
             </ul>

             {/* Button */}
             <Button>Sign Up</Button>

            </div>
            

            {/* The  */}
            <div className="border-2 border-[#b71717] w-full h-2/5">

            </div>
        </>
    )
}

export default Header
