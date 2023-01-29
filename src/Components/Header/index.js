import React from "react"
// import Zero from "../Assets/Zero.png"
import logo from "../Assets/logo.png"

function Header() {
    return ( 
        <>
            <div className=" h-24 w-full border-2 border-[#b91c1c] pl-36 flex items-center lg:bg-purple sm:bg-[#b91c1c]">
             {/* the logo */}
                <img src={logo} alt="" />

             {/* The nav links */}
             <ul className="flex text-[#E9D7FE] border-[#b91c1c] border-2 justify-between">
                <li>Home</li>
                <li>Product</li><span></span>
                <li>WhyFreePass</li>
                <li>Pricing</li>
                <li>Contact Us</li>
             </ul>


            </div>
        </>
    )
}

export default Header
