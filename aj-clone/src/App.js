import React from "react";
import "./App.css";
import Navbar from "./Mcomponents/Navbar";
import Header from "./Mcomponents/Header";
import Course from "./Mcomponents/Course";
import Perks from "./Mcomponents/Perks";
import Form from "./Mcomponents/Form";
import Store from "./Mcomponents/Store";
import Media from "./Mcomponents/Media";
import Free from "./Mcomponents/Free";
import Mentors from "./Mcomponents/Mentors";
import Toppers from "./Mcomponents/Toppers";
import Contact from "./Mcomponents/Contact";
import Footer from "./Mcomponents/Footer";



export default function App() {
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    return (
        <div className="app">
            <Navbar />
            <Header />
            <img src="https://www.anujjindal.in/wp-content/w3-webp/uploads/2022/03/Spring-50-Discount-Web.pngw3.webp" alt="name" className="off" />
            <Course />
            <img src="https://www.anujjindal.in/wp-content/w3-webp/uploads/2022/01/NABARD-Grade-A-B-Interview-Preparation-Desktop.pngw3.webp" alt="name" className="off" />
            <Perks />
            <Form />
            <Store />
            <Media />
            <Free />
            <Mentors />
            <Toppers />
            <Contact />
            <Footer />
            <div id="myBar"></div>
        </div>
    )
}