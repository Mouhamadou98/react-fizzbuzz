import React from 'react'
import './FizzBuzz.css'

const FizzBuzz = ({number}) => {

//     const otherCase = (numb) => {

//         let chaine = String(numb);
// 		let result="";

// 		for(let i = 0; i < chaine.length(); i++) {

// 			let strVar = chaine.charAt(i);

// 			if(strVar==="3")
// 				result += "Fizz";
// 			if(strVar==="5")
// 				result += "Buzz";
// 		}

// 		if(result==="")
// 			result = chaine;
// 		if(result==="BuzzFizz")
// 			result = "FizzBuzz";

// 		return result;
//     }

    const fizzBuzz = (roundNumber) => {

        if (roundNumber) {

            if(roundNumber %15 === 0){
                return "fizz-buzz";
            }
            if(roundNumber %5 === 0){
                return "buzz";
            }
            if(roundNumber %3 === 0){
                return "fizz";
            }

            let str = String(roundNumber)
            let finalresult = str.includes("3")?[(str.includes("5")?"fizz-buzz":"fizz")]:[(str.includes("5")?"buzz":(str))]

            return  finalresult;
        }

    }
    return (
        <div className='render' data-testid="fizz-buzz">{fizzBuzz(number)}</div>
    )
}

export default FizzBuzz