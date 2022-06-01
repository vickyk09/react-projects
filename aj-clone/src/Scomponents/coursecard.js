import React from "react";

export default function Card(card) {
    return (
        <div className="card">
            <h2>{card.title}</h2>
            <ul>
                <li>Videos</li>
                <li>PDFs</li>
                <li>Mocks</li>
                <li>Personalised Strategy</li>
            </ul>
            <p>See more...</p>
        </div>
    )
}