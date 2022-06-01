import React from "react";


export default function Header() {
    return (
        <div className="header">
            <div className="headerleft">
                <h1>We’re the best at what we do, and we’ll make sure you are too!</h1>
                <p id="subtitle">India’s leading platform to prepare for RBI Grade B, NABARD Grade A, SEBI Grade A, UGC NET JRF Exam.</p>
                <div className="takefreetrial">
                    <p className="btn">Take free trial</p>
                </div>
                <div id="scroll-container">
                    <div id="scroll-text">
                        <p>-RBI Grade B Updated Time Table-</p>
                        <p>-SEBI Grade A Updated Time Table-</p>
                        <p>-NABARD Grade A Updated Time Table-</p>
                        <p>-NABARD Grade B Updated Time Table-</p>
                    </div>
                </div>
            </div>
            <div className="headerright">
                <img src="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/Graphic1-01.pngw3.webp"
                    alt="name" />
            </div>
        </div>
    )
}