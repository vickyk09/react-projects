import React, { useState }  from "react";
import people from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";

export default function Review() {
    const [index, setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    const checkNumber = (number) => {
        if(number > people.length-1){
            return 0
        }
        if(number < 0) {
            return people.length-1
        }
        return number
    }

    const prevPerson = () => {
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    const nextPerson = () => {
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        setIndex(() => {
            let newIndex = Math.floor(Math.random() * people.length)
            if(newIndex === index){
                newIndex = index + 1
            }
            return checkNumber(newIndex)
        })
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name}/>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h3 className="author">{name}</h3>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>Surprise Me</button>

        </article>           
    )
}