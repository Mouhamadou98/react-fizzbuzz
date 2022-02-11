import React from 'react'

const FizzBuzz = ({number}) => {

    const fizzbuzz = (roundNumber) => {

        if(roundNumber %15 === 0){
            return "fizzbuzz";
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
    <div>
        {
           fizzbuzz(number)
        }
    </div>
  )
}

export default FizzBuzz