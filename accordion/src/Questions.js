import React, { useState } from "react";


export default function Questions ({title, info}) {
    const[showInfo, setShowInfo] = useState(false)
    return(
        <div className="container">
            <div className="top">
                <h2>{title}</h2>
                <button className="btn"onClick={()=> setShowInfo(!showInfo)}>
                    {showInfo? "-" : "+"}
                </button>
            </div>
            <div className="bottom">
                {showInfo && <p>{info}</p>}
            </div> 
        </div>
    )
}
