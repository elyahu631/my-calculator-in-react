import React from "react";

export default function FCButton(props) {

  const btnAction = () => {
    props.addAction();
    console.log("Button Active");
  }


  return (
    <div className='col'>
      <button style={{color:"white"}} className="btn" onClick={btnAction}>+</button>
    </div>
  );
}
