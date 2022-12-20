import React, { Component } from 'react'
import FCInput from '../Functional Components/FCInput'
import FCResult from '../Functional Components/FCResult'
import FCButton from '../Functional Components/FCButton'

export default class CCMain extends Component {
  constructor(props){
    super(props)
    this.state = {
      num1:null,
      num2:null,
      res:''
    }
  }

  chgFirstNum = (num) =>{
    this.setState({num1: num})
    console.log(num);
  }

  chgSecondNum = (num) =>{
    this.setState({num2: num})
    console.log(num);
  }

  addAction = (id) => {
    let firstNum = this.state.num1;
    console.log("first: ",firstNum);
    let SecondNum = this.state.num2;
    console.log("second: ",SecondNum);


    if(firstNum === undefined || firstNum === '' || SecondNum === null || SecondNum === '' ){
      console.log(firstNum === null === '' || SecondNum === null === '');
        alert("There is an empty input")
        this.setState({res: ''});
        console.log("lll");
        console.log(this.state.res);
        return;
    }
    let finalresult = parseInt(firstNum) + parseInt(SecondNum);
    console.log(finalresult);
    this.setState({res: String(finalresult)})
  }

  render() {
    return (
      <div style={{display:"flex",gap:"10px"}}>
        <FCInput theNumber={this.chgFirstNum} />
        <FCButton addAction={this.addAction}/>
        <FCInput theNumber={this.chgSecondNum}/>
        <FCResult finalres={this.state.res}/>
      </div>
    )
  }
}
