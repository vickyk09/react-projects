import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Images from "../Scomponents/images";


export default function Media() {
    var [index, setIndex] = useState(0);
    let { a, b, c } = Images[index]

    const checkNumber = (number) => {
        if (number > 9) {
            return index = 0
        }
        if (number < 0) {
            return index = 9
        }
        return number
    }

    const prev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    const next = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    return (
        <div className="media">
            <h1>Media Coverage</h1>
            <div className="images">
                <GrPrevious onClick={prev} className="btn1" />
                <img src={a} alt="name" />
                <img src={b} alt="name" />
                <img src={c} alt="name" />
                <GrNext onClick={next} className="btn2" />
            </div>
        </div>
    )
}