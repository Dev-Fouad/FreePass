import React from "react";
import Board from "./UI/Board";
import Wrap from "./UI/wrap";
import Book from "../Assets/Group 4368.png"
import Bok from "../Assets/Group 4370.png"
import Boks from "../Assets/Group 4375.png"

function Sero () {
    return (
        <>
            <div className=" h-[755px] bg-[#FAF7FC]  flex items-center justify-center flex-col max-md:h-[1533px] max-lg:h-[1600px]">
                <h2 className=" w-[571px] font-Raleway font-semibold text-[56px]  leading-[66px] tracking-[-3px]   mr-[35rem] max-md:mr-0 max-md:w-[325px]  max-lg:mr-0">Mind blowing Features</h2>
                <p className=" w-[571px]  font-medium text-[19.2px] leading-[27.5px]  font-Raleway mt-[25.5px] mr-[35rem] max-md:w-[325px] max-md:mr-0 max-lg:mr-0 ">Powering value, equality, access to education, and ending poverty by creating opportunities and jobs for Africa’s young and creative generation.</p>

               <Wrap>
                    <Board image={Book} text1="ZeroRate Educational Access" text2="Conveniently make educational multimedia (video and audio) content accessible to both underserved and underprivileged to build a stronger and educated African next-generation."/>
                    <Board image={Bok} text1="ZeroRate Live Stream" text2="Host your events online and get it delivered to your African audience’s mobile devices at zero-rate to them- entrench your multimedia content consumers, increase their life-time value"/>
                    <Board image={Boks} text1="ZeroRate OTT Hosting" text2="Easily expanding reach of contents to remote and wider audience within Africa, especially for African OTT Providers."/>
              </Wrap> 
               
            </div>
        </>
    )
}
export default Sero;
