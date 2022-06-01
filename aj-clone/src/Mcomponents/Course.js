import React from "react";
import Card from "../Scomponents/coursecard";


export default function Course() {
    return (
        <div className="course">
            <div className="courseleft">
                <h2>CHOOSE YOUR<span><h1>COURSE</h1></span></h2>
                <div className="line"></div>
                <p>Seeing as you’ve made it onto our website, we’re guessing you know which exam you’re seeking help in preparing  for.  So stop dawdling and pick your course and get ready to be wowed by our organised material and structured syllabus to help you perform your best. </p>
            </div>
            <div className="courseright">
                <div className="cr">
                    <Card title="RBI Grade B" />
                    <Card title="SEBI Grade A" />
                </div>
                <div className="cr">
                    <Card title="NABARD Grade A" />
                    <Card title="UGC NET JRF" />
                </div>
                <div className="cr">
                    <Card title="UPSC Management Optional" />
                    <Card title="UPSC Commerce Optional" />
                </div>
            </div>
        </div>
    )
}