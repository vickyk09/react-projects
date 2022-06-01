import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"


export default function Store() {
    return (
        <div className="store">
            <div className="storeleft">
                <div className="storelefttop">
                    <h1>Download Our Mobile Application</h1>
                    <p>Get Videos, Mocks and PDFs right away</p>
                </div>
                <p className="loadbtn">Download from Google Play Store</p>
                <div className="fyi">
                    <FaFacebookF />
                    <FaYoutube />
                    <FaInstagram />
                </div>
            </div>
            <div className="storeright">
                <img src="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/08/WebAppMock-01-1.pngw3.webp" alt="name" />
            </div>
        </div>
    )
}