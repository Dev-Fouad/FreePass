import React from "react";
import Button from "./UI/Button";
import img from "../Assets/Group 268.png";
import Dot from "../Assets/Vector (2).png";
import line from "../Assets/Group 277.png";
import shape from "../Assets/Group 269.png";
import shapes from "../Assets/Group 278.png";

function Testimony() {
  return (
    <>
      <div className="h-[644px] flex items-center justify-center relative max-md:h-[416px]">
        <div className="h-[438px] bg-[#6A0DAD] w-[1145px] rounded-[20px] flex         items-center  justify-center flex-col relative max-md:w-[344px] max-md:h-[333px]">
          <p className=" font-Raleway font-bold w-[774px] text-[56px]  text-center text-[#fff] max-md:w-[285px]  max-md:text-[18.9px] max-lg:w-[700px]">
            Discover a better way to distribute multimedia content in Africa
          </p>

          <Button>Get started</Button>
          <img
            src={img}
            alt=""
            className=" absolute right-[6rem] top-[4.5rem] max-lg:hidden max-md:hidden "
          ></img>
          <img
            src={Dot}
            alt=""
            className="absolute left-[10rem] top-[5rem] max-lg:hidden max-md:hidden "
          ></img>
          <img
            src={line}
            alt=""
            className="absolute left-[6rem] top-[18rem] max-lg:hidden max-md:hidden "
          ></img>
          <img
            src={shape}
            alt=""
            className="absolute left-[14rem] top-[15rem] max-lg:hidden max-md:hidden"
          ></img>
          <img
            src={shape}
            alt=""
            className="absolute left-[14rem] top-[15rem] max-lg:hidden max-md:hidden "
          ></img>
          <img
            src={shapes}
            alt=""
            className="absolute left-[61rem] top-[15rem]  max-lg:hidden max-md:hidden"
          ></img>
        </div>
      </div>
    </>
  );
}
export default Testimony;
