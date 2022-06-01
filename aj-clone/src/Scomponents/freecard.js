import React from "react";

export default function Freecard(freecard) {
    return (
        <div className="freecard">
            <h3>{freecard.title}</h3>
            <div className="blink">
                <p><span id="onk">1</span> <span id="kink">{freecard.one}</span></p>
                <p><span id="onk">2</span> <span id="kink">{freecard.two}</span></p>
                <p><span id="onk">3</span> <span id="kink">{freecard.three}</span></p>
                <p><span id="onk">4</span> <span id="kink">{freecard.four}</span></p>
                <p><span id="onk">5</span> <span id="kink">{freecard.five}</span></p>
                <p><span id="onk">6</span> <span id="kink">{freecard.six}</span></p>
            </div>

        </div>
    )
}