import React from 'react'

const Button = ({title, color, func}) => {
  // console.log(props);
  
  // const clickMe=(user)=>{
  //   alert(`button clicked by ${user}`)
  // }
  return (

    <button className={`btn ${color}`}  onClick={func}>
      {title}
    </button>
  )
}

export default Button