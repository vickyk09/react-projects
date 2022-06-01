import React from "react";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaAngleDown } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navtop">
                <p><FaPhoneAlt /> +91 9999466225 (Mon - Sat)</p>
                <p><FaFacebookF /></p>
                <p><FaTwitter /></p>
                <p><FaInstagram /></p>
            </div>
            <div className="navbottom">
                <div className="logo">
                    <img src="https://www.anujjindal.in/wp-content/w3-webp/uploads/2021/03/logo-final-1024x157-1.pngw3.webp" alt="anujjindal" />
                </div>
                <div className="menu">
                    <p>About Exams <span><FaAngleDown /></span></p>
                    <p>Buy Courses <span><FaAngleDown /></span></p>
                    <p>Study Plans <span><FaAngleDown /></span></p>
                    <p>Books <span><FaAngleDown /></span></p>
                    <p>Free Material <span><FaAngleDown /></span></p>
                    <p>Current Affairs <span><FaAngleDown /></span></p>
                    <p>Toppers</p>
                    <p>Login</p>
                    <p>Contact Us</p>
                </div>
            </div>

        </div>
    )
}