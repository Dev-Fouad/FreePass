import React from "react"

import Button from "./Button"
import logo from "../Assets/logo.png"

function Header() {
    return ( 
        <>
            <div className=" h-24 border-2 border-[#b91c1c] pl-36 pr-40 flex items-center  bg-purple max-md:pl-5">
             {/* the logo */}
                <img src={logo} alt="" />

             {/* The nav links */}
             <ul className=" ml-8 text-[#E9D7FE]  text-base font-semibold flex space-x-6 font-Raleway max-md:hidden"> 
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">WhyFreePass</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>     
             </ul>

             {/* Button */}
             <Button>Sign Up</Button>

            </div>
        </>
    )
}

export default Header
