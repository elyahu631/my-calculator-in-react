

export default function FCInput(props) {

  const chgNum = (e) =>{
    props.theNumber(e.target.value);
  } 

  return (
    <div >
      <div ><input onChange={chgNum} type="text" /></div>
    </div>
  )
}

