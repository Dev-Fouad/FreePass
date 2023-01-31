import React from "react";

import Section from "./UI/Section";
import Wrapper from "./UI/Wrapper";
import Zero from "../Assets/Zero.png"
import Fash from "../Assets/Group 4368.png"
import fhone from "../Assets/Group 4370.png"
import contact from "../Assets/Group 4375.png"

function Onboarding() {
    return (
        <>
            <div className=" flex h-[739px] border-2 border-purple bg-gray items-center  justify-center flex-col max-lg:hidden">
                
                <h2 className="w-[580px] font-semibold text-[38.81px] text-center leading-[46.74px]  text-bgpurple">Video and Audio content for PAN-African access.</h2>
                <p className=" font-Raleway w-[461px]  text-[19.2px] font-normal text-center leading-[31.5px] text-dark"> Zero-Rate (Data Free) access to multimedia content for africans</p>
            

                <div className="block mt-[51px]">
                    <Wrapper>
                        <Section image={Zero} text1="Zero Rate Content access" text2="We offer a convenient and affordable way to deliver high quality Vidoe and Audio content across Africa"/>
                        <Section image={Fash} text1="The Power of FreePass" text2="Light speed at the edge, host live  and stream high-quality video content distribution closer to your target consumers"/>
                    </Wrapper>

                    <Wrapper>
                        <Section image={fhone} text1="A multimedia CDN For Africans" text2="We offer a convenient and affordable way to deliver high quality Vidoe and Audio content across Africa"/>
                        <Section image={contact} text1="Connecting Africa one city at a time" text2="deliver seamlessly during major events and traffic spikes and access new markets across Africa"/>
                    </Wrapper>

                </div>
            </div>
        </>
    )
}


export default Onboarding;