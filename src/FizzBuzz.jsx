import React from 'react'
import './FizzBuzz.css'

export const fizzBuzz = (roundNumber) => {

    let numb = roundNumber;
    let outValue = String(numb);
    let cond =  outValue.includes("5") && outValue.includes("3");

    if(roundNumber %15 === 0 || cond) {
        return "FizzBuzz";
    }
    if(roundNumber %5 === 0 || outValue.includes("5")) {
        if(outValue.includes("3"))
            return "FizzBuzz";
        return "Buzz";
    }
    if(roundNumber %3 === 0 || outValue.includes("3")) {
        if(outValue.includes("5"))
            return "FizzBuzz";
        return "Fizz";
    }
    return outValue;
}
const FizzBuzz = ({number}) => {
    return (
        <div className='render'>{fizzBuzz(number)}</div>
    )
}

export default FizzBuzz