
 /*
    创建一个store对象 ，添加 reducer 对象 ， 再暴露出去
 */


import { createStore,applyMiddleware } from "redux";
import countReducer from "./count_reducer";

// 用于处理异步action
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk));
