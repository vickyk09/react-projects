import React from "react";

export default function ToppersCard(topperscard) {
    return (
        <div className="topperscard">
            <img src={topperscard.image} alt="name" />
            <h1>ALL INDIA RANK {topperscard.rank}</h1>
            <p>{topperscard.name}</p>
            <p className="btnpl">Play Video</p>
        </div>
    )
}