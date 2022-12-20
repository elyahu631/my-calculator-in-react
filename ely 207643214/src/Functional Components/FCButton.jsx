import React from "react";

export default function FCButton(props) {

  const btnAction = () => {
    props.addAction();
    
    console.log("Button Active");
  }


  return (
    <div className='col'>
      <button style={{color:"red",border:"solid 2px red"}} className="btn" onClick={btnAction}>+</button>
    </div>
  );
}
