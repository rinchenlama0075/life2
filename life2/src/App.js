import React,{Component} from 'react';
import "./App.css";

class Ticker extends Component{
  
  constructor(){
  super();
  this.state={
    count: 0,
    isPaused: false,
    adder: 1
  
  };
  
}


componentDidMount(){
     setInterval( ()=>{ 
    this.setState({
      count: this.state.count + this.state.adder
      })
 }, 1000 );}
  

reset=()=>{
  this.setState({count: 0});
}
pause=()=>{
  if(!this.state.isPaused)
      this.setState({
        adder: 0,
      })
}

render(){
  return(
 <div className="Head">

   Counting: 
   {console.log(this.state.count)}
   {this.state.count}
   <button type="button" onClick={this.reset} className="button">Reset</button>
  <button type="button" onClick ={this.pause} className="button">Pause
  </button>

 </div>   
  
  )
}
}


export default Ticker;
