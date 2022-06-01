import React from "react";

export default function Perkcard(perk) {
    return (
        <div className="perkcard">
            <div className="icon">
                <img src={perk.sroc} alt="name" />
            </div>
            <div className="desc">
                <h2>{perk.title}</h2>
                <p>{perk.des}</p>
            </div>
        </div>
    )
}