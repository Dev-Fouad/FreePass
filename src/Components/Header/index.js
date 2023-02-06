import React from "react"

import { BsChevronDown } from "react-icons/bs";
import Button from "./UI/Button";
import logo from "../Assets/logo.png";

import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="h-24 pl-36 pr-34 flex items-center bg-purple    max-md:pl-[22.5px] max-lg:pl-12">

                <img src={logo} alt="" />

                <ul className=" ml-8 gap-3ml-8 text-[#E9D7FE] text-base font-semibold flex font-Raleway space-x-6   max-md:hidden max-lg:hidden">
                    <li>Home</li>
                    <li className="flex">Product<span className="pt-1 pl-2 "><BsChevronDown /></span></li>
                    <li>WhyFreepass</li>
                    <li> <Link to="AboutUS">AboutUS</Link></li>
                    <li><Link  to="ContactUS">Contact Us</Link></li>
                </ul>

                <Button>Sign Up</Button>

            </div>
        </>
    )
}

export default Header;
