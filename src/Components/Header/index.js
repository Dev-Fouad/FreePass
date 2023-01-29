import React from "react"
import logo from "../Assets/logo.png";
import Zero  from "../Assets/Zero.png"

function Header () {
    return <>
        <h2> my name</h2>
        <img src={logo} alt="" />
        <img src={Zero} alt="" />
    </>
}

export default Header
