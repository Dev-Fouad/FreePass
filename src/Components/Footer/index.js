import React from "react";
import logo from "../Assets/logo.png"

function footer () {
    return (
        <>
            <div  className="h-[473px] bg-[#4E0A80] justify-center flex  items-center  flex-col max-md:hidden">
                <div className="  w-[1147px]  justify-between flex  max-md:flex-col  max-md:h-[200px] max-md:border-2">
                    <div>
                        <img src={logo} alt=""></img>
                        <p className="mt-[37.7px] font-Raleway  font-semibold text-base text-[#E9D7FE] w-[320px] h-[38px]">ZeroRate (Data free) access to multimedia content for Africans</p>
                    </div>
                    
                    <div>
                        <h4 className="text-[#B692F6] font-semibold  font-Raleway text-sm mb-[16px] ">Product</h4>
                        <ul className=" space-y-[12px]">
                        <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Overview</li>
                        <li className="text-[#E9D7FE] font-Raleway font-medium text-base ">Features</li>
                        <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Solutions</li>
                        <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Pricing</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-[#B692F6] font-semibold  font-Raleway text-sm mb-[16px] ">Resources</h4>
                        <ul className="  mb-[136px] space-y-[12px]">
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Blog</li>
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base ">Newsletter</li>
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base">About Us</li>
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Help centre</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#FFFF] font-Raleway font-semibold text-sm mb-[16px]  w-[360px]">Join Waitlist</h4>
                        <input type="text" placeholder="Enter your email" className=" rounded-lg text-[#667085] h-[52px] w-[278px] text-base font-Raleway font-normal p-[14px] "  required/>
                        <button className=" bg-[#7F56D9] w-[66px] h-[52px] text-base p-[10px] rounded-lg text-[#fff] ml-[16px] mb-20">Join</button>
                    </div>                
                </div>

                <div>
                    <hr className=" w-[1147px] text-[#7F56D9]"></hr>
                    <div className="flex justify-between text-[#D6BBFB] items-center mt-[32px]">
                        <p>?? 2022 FreePass Africa . All rights reserved.</p>
                        <ul className="flex space-x-[16px]">
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="lg:hidden  max-lg:h-[610px] bg-[#4E0A80] justify-center flex  flex-col items-center space-y-[24px]">
                <div>
                    <h4 className="text-[#FFFF] font-Raleway font-semibold text-sm mb-[16px]  w-[330px]">Join Waitlist</h4>
                    <input type="text" placeholder="Enter your email" className=" rounded-lg text-[#667085] h-[52px] w-[100%] text-base font-Raleway font-normal p-[14px] mb-[16px]"  required/>
                    <button className=" bg-[#7F56D9] w-[100%] h-[52px] text-base p-[10px] rounded-lg text-[#fff]">Join</button>
                </div> 

                <div className="flex  w-[330px] space-x-[120px]">
                    <div>
                        <h4 className="text-[#B692F6] font-semibold  font-Raleway text-sm mb-[16px] ">Product</h4>
                        <ul className=" space-y-[12px]" >
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Overview</li>
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base ">Features</li>
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Solutions</li>
                            <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Pricing</li>
                        </ul>
                    </div>
                        
                    <div>
                        <h4 className="text-[#B692F6] font-semibold  font-Raleway text-sm mb-[16px] ">Resources</h4>
                        <ul className=" space-y-[12px]">
                                <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Blog</li>
                                <li className="text-[#E9D7FE] font-Raleway font-medium text-base ">Newsletter</li>
                                <li className="text-[#E9D7FE] font-Raleway font-medium text-base">About Us</li>
                                <li className="text-[#E9D7FE] font-Raleway font-medium text-base">Help centre</li>
                        </ul>
                    </div>
                </div>

                <div className="text-[#D6BBFB] w-[330px] space-y-[20px]">
                 <hr className="  text-[#7F56D9]"></hr>
                    <img src={logo} alt=""></img>
                    <p className=" font-Raleway text-[16px] font-medium">?? 2022 FreePass Africa <br></br> All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
export default footer;
