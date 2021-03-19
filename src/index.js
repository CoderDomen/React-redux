import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store"; //通过容器组件传递store对象
import { Provider } from "react-redux";  //使用该组件给所有redux容器组件添加store

import App from "./App.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// store的第三个API，用于监听store中的状态改变，变化时，重现render页面，达到响应式效果，由于DOM diff算法，无需考虑其他页面状态改变引起的性能问题

//在react-redux中使用connect之后不用时候该方法，react-redux会自动调用
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// });
