import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
class Zujian extends Component{
    constructor(props){
      super(props)
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
      return<div >
        <div style={{backgroundColor:"purple",border:"solid 1px black",width:"100px"}} onClick={()=>this.handleClick()}> {this.state.loveStudy?"good staff":"it's never too late lo learn"}</div>
        <hr></hr>
        <div> {this.props.name}</div> 
         </div>
    }
  }

  class Inputs extends Component{
    constructor(props){
      super(props)
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
//函数式props参数使用
 const Nav=function (props){
      return<button>{props.title}{props.children}</button>
  }
  export default Zujian;
  // export default Nav
  export {Inputs};
  export {Nav};