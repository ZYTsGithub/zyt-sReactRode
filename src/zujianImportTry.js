import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import zujian from "./App"
class Zujian extends Component{
    constructor(){
      super()
      this.state = {
        loveStudy:false
      }
    }
    handleClick(){
      console.log(454)
      this.setState({
        loveStudy:!this.state.loveStudy
      })
    }
    render(){
      return<div style={{backgroundColor:"purple",border:"solid 1px black",width:"100px"}} onClick={()=>this.handleClick()}>
        <div> {this.state.loveStudy?"good staff":"it's never too late lo learn"}</div>
         </div>
    }
  }

  class Inputs extends Component{
    constructor(){
      super()
      this.state = {
        value:""
      }
    }
    handleInput(e){
      console.log(454)
      console.log(e.nativeEvent)
      if(e.target.value.length>10){
        return
      }
      this.setState({
        value:e.target.value
        
      })
    }
    render(){
      return<div style={{backgroundColor:"purple",border:"solid 1px black",width:"100px"}}>
       <input onInput={(e)=>this.handleInput(e)} value={this.state.value}/>
         </div>
    }
  }
  export default Zujian;
  export {Inputs};