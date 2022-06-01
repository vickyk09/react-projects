import React from "react";
import ToppersCard from "../Scomponents/topperscard";

export default function Toppers() {
    return (
        <div className="toppers">
            <div className="topperstop">
                <h1>Our Toppers</h1>
                <div className="lin"><div className="line"></div></div>
                <p>Our students usually turn into super successful people with busy lives after they ace their exams, but we managed to track them down to give us a bit of feedback on their experience with us!</p>
            </div>
            <div className="toppersbottom">
                <ToppersCard
                    image="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/11/TOPPERS-Profile-05.pngw3.webp"
                    rank="01"
                    name="Rajendran S"
                />
                <ToppersCard
                    image="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/11/TOPPERS-Profile-02.pngw3.webp"
                    rank="03"
                    name="Ali"
                />
                <ToppersCard
                    image="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/11/TOPPERS-Profile-03.pngw3.webp"
                    rank="06"
                    name="Aditya Sood"
                />
                <ToppersCard
                    image="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/11/TOPPERS-Profile-06.pngw3.webp"
                    rank="10"
                    name="Sameer"
                />
                <ToppersCard
                    image="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/11/TOPPERS-Profile-04.pngw3.webp"
                    rank="11"
                    name="Abhisekh"
                />
            </div>
        </div>
    )
}