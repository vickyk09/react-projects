import React from "react";
import Freecard from "../Scomponents/freecard";

export default function Free() {
    return (
        <div className="free">
            <div className="freetop">
                <h1>Free Material</h1>
                <div className="rect"></div>
            </div>
            <div className="freebottom">
                <div className="freebottomtop">
                    <Freecard
                        title="RBI Grade B"
                        one="Booklist"
                        two="Website Coverage"
                        three="Newspaper Coverage"
                        four="Phase1 - Time Table"
                        five="Phase2 - Time Table"
                        six="Cut Offs"
                    />
                    <Freecard
                        title="SEBI Grade A"
                        one="Booklist"
                        two="Newspaper Coverage"
                        three="Syllabus"
                        four="Past Year Papers"
                        five="Daily Time Table"
                        six="Static GK Revision-2021"
                    />
                    <Freecard
                        title="NABARD Grade A"
                        one="Booklist"
                        two="Newspaper Coverage"
                        three="Syllabus"
                        four="Past Years Papers"
                        five="Preparation Strategy"
                        six="Static GK Revision-2021"
                    />
                </div>
                <div className="freebottombottom">
                    <Freecard
                        title="UGC NET JRF"
                        one="PAPER 1 Booklist"
                        two="Commerce Booklist"
                        three="Result"
                        four="Syllabus"
                        five="Preparation Strategy"
                        six="Quiz"
                    />
                    <Freecard
                        title="UPSC"
                        one="Free Material"
                        two="Books and Mocks"
                        three="Syllabus"
                        four="Past Year Paper"
                        five="Eligibility Criteria"
                        six="Preparation Strategy"
                    />
                    <Freecard
                        title="Current Affairs"
                        one="Daily Current"
                        two="Spotlight"
                        three="Daily GK"
                        four="Topic Wise"
                        five="Daily Quiz"
                        six="Videos"
                    />
                </div>
            </div>

        </div>
    )
}