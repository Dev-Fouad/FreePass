import React from "react"

import Button from "./UI/Button";
import logo from "../Assets/logo.png";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./style.css"

function Header() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    let show = () => {
        navRef.current.classList.remove("responsive_nav")
    }

    return (
        <>
            <header>
                <img src={logo} alt="" />

                <nav ref={navRef}>
                    <li><Link  to="/" onClick={show}>Home</Link></li>
                    <li><Link  to="Features" onClick={show}>Features</Link></li>
                    <li><Link  to="AboutUS" onClick={show}>About Us</Link></li>
                    <li><Link  to="ContactUS" onClick={show}>Contact Us</Link></li>
                    
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>

                <Button>Sign Up</Button>


                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>

        </>
    )
}

export default Header;
