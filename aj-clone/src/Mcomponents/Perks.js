import React from "react";
import Perkcard from "../Scomponents/perkcard";

export default function Perks() {
    return (
        <div className="perks">
            <h1 id="poe">Perks of enrolment</h1>
            <div className="lin"><div className="line"></div></div>
            <p className="blin">Our course has a lot of perks, like unparalleled high scores, unprecedented success, and the usual study material. Check it out:</p>
            <div className="perkstop">
                <Perkcard
                    sroc="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/ICONS-01.pngw3.webp"
                    title="Video Lessons"
                    des="Don’t use the buffering internet as an excuse to not study. Save our videos offline in your mobile application."
                />
                <Perkcard
                    sroc="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/ICONS-03.pngw3.webp"
                    title="Downloadable PDF's"
                    des="Save them onto your device, although we would recommend you don’t print them – save the planet and all that.."
                />
                <Perkcard
                    sroc="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/ICONS-02.pngw3.webp"
                    title="Live Video Sessions"
                    des="For the sleepy heads who barely make it to class on time, you can attend in your pajamas and no one will care."
                />
            </div>
            <div className="perkbottom">
                <Perkcard
                    sroc="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/ICONS-07.pngw3.webp"
                    title="Mock Papers, Tests"
                    des="We conduct regular exams and papers to check your progress so we know if you’ve been naughty or nice.."
                />
                <Perkcard
                    sroc="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/ICONS-04.pngw3.webp"
                    title="Current Affairs"
                    des="Don’t use the buffering internet as an excuse to not study. Save our videos offline in your mobile application."
                />
                <Perkcard
                    sroc="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/ICONS-06.pngw3.webp"
                    title="Personalised Feedback"
                    des="We will dot your i’s and cross your t’s so that you know what to correct when it comes to your English."
                />
            </div>
        </div>
    )
}