import React from "react";
import Img from "../Assets/Section (2).png"

function ContactUS () {
    return(
        <>
            <div className=" bg-[#fff] h-[998px] flex justify-between max-md:flex-col max-md:h-[700px] max-md:items-center max-md:justify-center">

                <div className="w-[720px]  max-md:w-[350px] items-center justify-center flex flex-col">
                    <h2 className=" text-[#101828] font-Raleway font-semibold w-[480px] text-[48px] leading-[60px] max-md:w-[330px]">Contact us</h2>
                    <p className="w-[480px] mt-[24px] font-Raleway font-normal text-[20px] leading-[30px] text-[#475467] max-md:w-[330px]">Explore the Future with us, Feel free to get in touch</p>

                   <form className="grid mt-[48px] w-[480px] max-md:w-[330px]">
                        <label for="username">Full Name</label>
                        <input type="text" name="Fullname" id="username" placeholder="Full Name" className=" outline-none h-[45px]  mt-[6px] border-2 border-[#D0D5DD] rounded-lg p-[10px] text-[#667085]"/>

                        <label for="username" className="mt-[24px]">Email</label>
                        <input type="text" name="Fullname" id="username" placeholder="you@company.com" className=" h-[45px]  mt-[6px] border-2 border-[#D0D5DD] rounded-lg p-[10px] text-[#667085]"/>


                        <label for="username" className="mt-[24px]">Message...</label>
                        <input type="text" name="Fullname" id="username" placeholder="Leave us a message..." className=" h-[134px]  text mt-[6px] border-2  border-[#D0D5DD] rounded-lg p-[10px] text-[#667085]"/>
                    </form>
                    <button className=" bg-[#7F56D9] w-[480px] h-[48px] rounded-lg mt-[32px] text-[#FFFFFF] font-Raleway text-base max-md:w-[330px]">Send Message</button>
                </div>
                

                <img src={Img} alt=""  className="h-[998px] w-[720px]  max-md:hidden"></img>
            </div>
        </>
    )
}

export default ContactUS;
