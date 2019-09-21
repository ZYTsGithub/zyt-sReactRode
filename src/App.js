import React from 'react';
import logo from './logo.svg';
import './App.css';
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

class animal{
  constructor(){
  }
}
class person extends animal{
  constructor(height){
    super()
    this.height=height

  }
 
}
console.log(new person(164))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
