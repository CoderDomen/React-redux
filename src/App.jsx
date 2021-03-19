import React, { Component } from "react";
import Count from "./container/Count/Count.jsx"; //导入容器组件与store传递数据
import Person from './container/Person/Person.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Count></Count>
        <hr/>
        <Person></Person>
      </div>
    );
  }
}

export default App;
