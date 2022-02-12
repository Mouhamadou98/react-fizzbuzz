import React from 'react'
import './FizzBuzz.css'

const FizzBuzz = ({number}) => {

    const fizzBuzz = (roundNumber) => {

        if(roundNumber %15 === 0){
            return "fizz-buzz";
        }
        if(roundNumber %5 === 0){
            return "buzz";
        }
        if(roundNumber %3 === 0){
            return "fizz";
        }
        return  String(roundNumber);
    }
    return (
        <div className='render' data-testid="fizz-buzz">{fizzBuzz(number)}</div>
    )
}

export default FizzBuzz