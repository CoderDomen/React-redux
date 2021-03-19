/*
    创建一个store对象 ，添加 reducer 对象 ， 再暴露出去
 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducer/count_reducer";
import personReducer from "./reducer/person_reducer";

// 用于处理异步action
import thunk from "redux-thunk";

// 合并reducer
const allReducer = combineReducers({
  count:countReducer,
  list:personReducer
});

export default createStore(allReducer, applyMiddleware(thunk));
