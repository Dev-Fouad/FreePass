import React from "react";
import img from "../Assets/Group (2).png"

function AboutUs (){
    return (
        <>
            <div className="h-[594px] bg-[#fff] flex flex-col items-center justify-center">
                <h2 className=" font-Raleway font-semibold text-[#7F56D9]">Why FreePass</h2>
                <p className=" font-Raleway font-semibold text-[48px] leading-[60px] w-[960px] text-center mt-[12px]">The future of PAN-african content distribution starts with reducing last-mile access cost.</p>
                <p className=" w-[1035px] text-[#667085] text-[19px] leading-[31.5px] font-normal mt-[24px]">Expectations for high-quality video & audio contents (real-time and on-demand) are at an all-time high in Africa. If access isn't affordable, reliable, fast, secure, and highly personalized, consumers take their attention or focus elsewhere. But today’s most innovative companies are thriving by meeting this challenge head on: they’re choosing FreePass and an investment in the PAN-African Content Delivery Network.</p>
            </div>

            <div className=" h-[2000px] justify-center items-center flex flex-col border-2">
                <img src={img} alt=""></img>
                <p className="  text-start font-Raleway font-medium text-[19.2px] leading-[31.5px] w-[1058px] mt-[12px] text-[#667085]">In Africa today, access to high-quality, real-time, and on-demand digital contents requires a high speed user access network (3G/4G/5G or advanced), high internet data bandwidth, expensive subscribers data bundle, and ubiquity delivery infrastructure. The existing challenge to internet adoption rate in Africa, is the expensive resource requirements for infrastructural expansion or development; especially for last mile access, local hosting and edge delivery infrastructure for digital contents.<br></br> <br></br> <br></br>With FreePass' innovative & powerful edge content delivery platform, content creators & businesses get the tools they need to create more and deliver the most groundbreaking digital contents — all optimized for zero-rated access, speed, security, and scale — so content creation businesses can effectively transform to compete in today’s global markets. Together, we’re building the future of the PAN-African Content Delivery Network.</p>
                <p className=" border-2 w-[1079px] font-Raleway text-[48px] leading-[62px] text-center h-[186px] mt-[138px]">The technology behind an affordable and ubiquitous content distribution business.</p>
                <p className=" w-[967px] border-2 text-[#667085] text-[19.2px] leading-[31.2px] font-normal h-[189px]">Technology is the muscle behind improved user experiences, as it directly relates to the business bottom line. As a digital content creator or distributor in Africa, by leveraging the right infrastructure, partner, or platform you can scale smarter, improve your user access base, and optimize the user experience. With Zero-Rate by FreePass powering things in the background, you can get back to focusing on what matters most for your content creation business.</p>
            
                <div className=" w-[1117px] h-[400px] rounded-xl bg-[#721FAD] items-center justify-center flex">
                    <div>
                        <h2 className=" w-[509px] font-Raleway font-semibold leading-[46.74px] text-[38px] text-[#fff]">Give us a shot</h2>    
                        <p className=" text-[#E9D7FE] text-[19.2px] leading-[31.5px] font-Raleway w-[509px]">Join other businesses already using FreePass today!</p>
                        {/* <button className="w-[127px] h-[48px] rounded-lg bg-[#D0D5DD] mt-[40px]">Learn More</button> */}
                        {/* <button className=" ml-[12px] w-[127px] h-[48px] rounded-lg bg-[#7F56D9] mt-[40px] text-[#D0D5DD]">Learn more</button> */}
                    </div>
                </div> 

            </div>
        </>
    )
}
export default AboutUs;
 