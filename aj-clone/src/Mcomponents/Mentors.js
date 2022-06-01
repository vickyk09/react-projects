import React from "react"
import Mentorscard from "../Scomponents/mentorscard"

export default function Mentors() {
    return (
        <div className="mentors">
            <div className="mentorsleft">
                <h1>Meet Your Mentors</h1>
                <div className="rect"></div>
                <p>We bring forth a team of some of the finest experts in the field of online bank coaching and other competetive exams. These are the kickass people who have already succeeded in their respective fields. So we would recommend you to make the best of what they have to share with you. </p>
            </div>
            <div className="mentorsright">
                <div className="mentorsrightleft">
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2020/07/MENTORS-01.pngw3.webp"
                        name="Anuj Jindal"
                        desig="M.Com. – DSE, JRF (Commerce and Management) and NET in HRM"
                    />
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2021/06/TEAM-06.pngw3.webp"
                        name="Manish Mishra"
                        desig="B. Sc. Physics, SSC CGL, DRDO and IMD (Scientific Assistant), CDSE"
                    />
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2022/02/MENTORS-04.pngw3.webp"
                        name="Chetan Bansal"
                        desig="Cleared SSC CGL 2017, 96.5 Percentile in CAT 2016. M.Com from Delhi University."
                    />
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2021/06/TEAM-18.pngw3.webp"
                        name="Pooja Rawat"
                        desig="B.Tech (Electrical Engineering) GBPUAT"
                    />

                </div>
                <div className="mentorsrightright">
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2021/06/TEAM-02.pngw3.webp"
                        name="Subham Singhania"
                        desig="M.Com.- DSE, JRF (Commerce and Management), NET in HRM and Ph.D."
                    />
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2021/06/TEAM-08.pngw3.webp"
                        name="Neha Gupta"
                        desig="M. A. (Hons.) English, B.A. (Hons.) English, Mentor of Current Affairs"
                    />
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2021/03/Tanvi-Kaur.pngw3.webp"
                        name="Tanvi Kaur"
                        desig="B.Com Hons., DU M.Com, Department of Comm., DSE"
                    />
                    <Mentorscard
                        pic="https://www.anujjindal.in/wp-content/w3-webp/uploads/2021/08/Harneet-Singh.pngw3.webp"
                        name="Harneet Singh"
                        desig="M.com – DU, UGC NET (Commerce)"
                    />

                </div>
            </div>
        </div>
    )
}