import React from "react";

export default function Mentorscard(mentorscard) {
    return (
        <div className="mentorscard">
            <div className="pic">
                <img src={mentorscard.pic} alt="name" />
            </div>
            <div className="info">
                <h2>{mentorscard.name}</h2>
                <p>{mentorscard.desig}</p>
            </div>
        </div>
    )
}