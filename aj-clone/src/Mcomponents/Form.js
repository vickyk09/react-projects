import React from "react";


export default function Form() {
    return (
        <div className="form">
            <div className="formleft">
                <h1>Get Free Trial Course</h1>
                <div className="line"></div>
                <p>Haven’t even registered yet? Don’t worry, we’re wishing you in advance with absolute confidence that WE will definitely crack it together!</p>
            </div>
            <div className="formright">
                <h2>Get our free video lessons and ace your exams</h2>
                <div className="rowo">
                    <input type="text" placeholder="First Name*" />
                    <input type="text" placeholder="Last Name*" />
                </div>
                <input type="number" placeholder="Mobile No.*" />
                <input type="text" placeholder="Email ID*" />
                <input type="text" placeholder="Address*" />
                <p className="btnn">Submit</p>
            </div>
        </div>
    )
}