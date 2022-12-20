import React, { useState } from 'react'

export default function FCInput(props) {
  const [num, setNum] = useState('')

  const chgNum = (e) =>{
    setNum(e.target.value);
    console.log(e.target.value);
    props.theNumber(e.target.value);
  } 

  return (
    <div >
      <div ><input onChange={chgNum} type="text" /></div>
    </div>
  )
}

