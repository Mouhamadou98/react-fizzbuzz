import React from 'react'

const Button = ({number,setNumber}) => {

  return (
    <button onClick={()=> {
        number === 100 ? setNumber(1) : setNumber(number+1)
    }}>
        {
            number === 100 ? 'Restart':'Play'
        }
    </button>
  )
}

export default Button