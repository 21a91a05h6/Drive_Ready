// import React, { Component } from 'react'
	
// class Click extends Component {
// constructor(){
// 	super();
// 	this.state = {name :
// 'Click the button to change names'};
// 	this.updateState = this.updateState.bind(this);
// }	
// updateState(){
// 	this.setState({name :
// 				'Divya'})
// }
	
// render(){
// 	return (
// 	<div>
// 	<p>{this.state.name}</p>
	
// 		{/* Set click handler */}
// 		<button onClick={this.updateState}>
// 		Click me!
// 		</button>
// 	</div>
// 	)
// }
// }
import './App.css';
import { useState } from 'react';
function Click() {
  let yellow = '#ffc800';
  const [bgColor, setBgColor] = useState(yellow);
  const [c,setCount]=useState(1);
   const changeColor =()=>{
    //   let purple = '#A020F0';
    //   setBgColor(purple);
	  setCount(c+1);
	  changeAgain(c);
    }
	const changeAgain=()=>{
		if(c===1){
			let pink=document.getElementsByTagName('header')[0];
			pink.style.backgroundColor='pink';
			setBgColor(pink);
		}
		else if(c===2){
			let green=document.getElementsByTagName('header')[0];
			green.style.backgroundColor='green';
			setBgColor(green);
		}
		else if(c===3){
			let red=document.getElementsByTagName('header')[0];
			red.style.backgroundColor='red';
			setBgColor(red);
		}
	}
  return (
    <div className="App">
      <header className="App-header" style={{background: bgColor}}>
        <button onClick={changeColor}>Change Color</button>
      </header>
    </div>
  );
}
// function Click() {
// 	const [count, setCount] = useState(0);
// 	 const incre =()=>{
// 		setCount(count+1);
// 	  }
// 	  const decre=()=>{
// 		setCount(count-1);
// 	  }
// 	return (
// 	  <div className="App">
// 		<header className="App-header">
// 		  <p>{count}</p>
// 		  <button onClick={incre}>Increment</button>
// 		  <button onClick={decre}>Increment</button>
// 		</header>
// 	  </div>
// 	);
// }
	
export default Click;
