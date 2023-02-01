import React from "react";
import logo from "../Assets/logo.png"

function footer () {
    return (
        <>
            <div className="h-[473px] bg-[#4E0A80] justify-evenly flex  items-center ">
                <div>
                    <img src={logo} alt=""></img>
                    <p className="mt-[37.7px] font-Raleway  font-normal text-base text-[#E9D7FE] w-[320px] h-[38px]">ZeroRate (Data free) access to multimedia content for Africans</p>
                </div>
                
                <div>
                    <h4 className="text-[#B692F6] font-semibold text-sm">Product</h4>
                    <ul>
                        <li>Overview</li>
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default footer;