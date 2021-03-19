/*
  创建一个reducer对象 ，本质是一个函数， 有两个参数（之前的状态 &  动作对象）
*/

import { ADD, DEL } from "./constant";

let initState = 0;
function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD:
      return preState + data;
    case DEL:
      return preState - data;
    default:
      return initState;
  }
}
export default countReducer;
