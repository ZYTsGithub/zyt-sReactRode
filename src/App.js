import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Zujian ,{Inputs}from "./zujianImportTry"
import Nav from "./zujianImportTry"

//  第一天：
// *import和export如何使用，以及import与commondJs中的require有何区别
// *{component},引入对象属性的用法 ：{component} 等价于react.component
// *class和extends继承，相当于原本的es5中a.prototype = new b()
// *render()函数，在react类中必须实现，只在/state改变后触发！

// var person = function(){
//   this.name = "lusa"
// }
// var animal = function(height){
//   this.height = height
// }
// person.prototype = new animal(178)
// console.log(new person())

// class animal{
//   constructor(){
//   }
// }
// class person extends animal{
//   constructor(height){
//     super()
//     this.height=height

//   }
 
// }
// console.log(new person(164))
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           zyt的react学习之路
//         </a>
//       </header>
//     </div>
//   );
// }

// 第二天
// // *jsx语法细则
// class dianzan extends Component{
//   constructor(){
//     super()
//       this.state={
//         like:false
//       }
//       this.handleClick = this.handleClick.bind(this);
//       // this.handleClick.bind(this)
//       // 记录问题：如果此处不写this.handleClick = this.handleClick.bind(this);而写this.handleClick.bind(this)，
//       // 就会出现 Cannot read property 'setState' of undefined
    
//   }
//  handleClick(){
//    console.log(21)
//    console.log(this)
//     this.setState({
//       like:!this.state.like
//     })
//  }
 
// //  注意三元运算符在react中的写法
//   render(){
//     return <div><button type="button" style={this.state.like?{color:"red"}:{color:"black"}}  onClick={this.handleClick}>
//       {this.state.like?"喜欢":"已赞"}
//     </button>
//     {/* <Nav title="dosomething">
//       <p>1515</p>
//       <p>895</p>
//     </Nav> */}
//     <Zujian name="greatdeal"/>
//      {/* <Inputs/> */}
//      </div>
//   }
 
// }

// *组件书写方式有两种
// 第一种:类的方式,可以继承其他组件的方法
// class Zujian extends Component{
//   constructor(){
//     super()
//     this.state = {
//       loveStudy:false,
//     }
//   }
//   handleClick(){
//     console.log(454)
//     this.setState({
//       loveStudy:!this.state.loveStudy,
//     })
//   }
//   render(){
//     return<div style={{backgroundColor:"purple",border:"solid 1px black",width:"100px"}} onClick={()=>this.handleClick()}>
//       <div> {this.state.loveStudy?"good staff":"it's never too late lo learn"}</div>
//        </div>
       
  
//   }
// }
//第二种:函数方法,只能进行简单的渲染
//  const Zujianfunc = function(){
//    return<div>我能送你回家吗可能外面要下雨啦</div>
//  }
//定义一个新的js文件,引入组件试试



// *事件监听及处理
// 箭头函数的this指向调用它的对象
// 事件监听规则：1）在jsx中，监听事件使用驼峰式命名  2）jsx中，事件监听指向一个this函数
// 例子：<p onClick={()=>this.handleClick()}
// jsx中回调函数的this问题：由于编译为js时，会被编译为react.createElement，造成this作用域丢失，有两种方法：
// 1）在组件的Constructor里，通过bind方法绑定：Constructor(){
      // super()
      // this.handleClick.bind(this)
// }
// 使用时，<p OnClick={this.handleClick}
// 2)在事件监听处，使用箭头函数 如：<p onClick={()=>this.handleClick()}


// 第三天：状态提升，方法下放
class Button extends Component{
  render(){
    const themeColor=this.props.themeColor
    return(
      <div> 
        <button style={{color:themeColor}} onClick={(color)=>this.props.handleColor("red")}>red</button>
      <button style={{color:themeColor}} onClick={(color)=>this.props.handleColor("green")}>green</button>
      </div>
    )
  }
}

class Title extends Component{
  render(){
    const themeColor=this.props.themeColor
    return(
      <p style={{color:themeColor}}>标题</p>
    )
  }
}
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      themeColor:"black"
    }
  }
  handleColor(color){
    this.setState({
      themeColor:color
    })
  }
  render(){
    return(
     <div> 
       <h1>App</h1>
     <Title themeColor={this.state.themeColor} handleColor={(color)=>this.handleColor(color)}></Title>
     <Button themeColor={this.state.themeColor} handleColor={(color)=>this.handleColor(color)}></Button>
     </div>
    )
  }
}


export default App;
