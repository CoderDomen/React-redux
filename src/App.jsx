import React, { Component } from "react";
import Count from "./container/count/Count.js"; //导入容器组件与store传递数据

class App extends Component {
  render() {
    return (
      <div>
        <Count></Count>
      </div>
    );
  }
}

export default App;
