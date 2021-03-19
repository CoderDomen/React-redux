/*
  创建一个reducer对象 ，本质是一个函数， 有两个参数（之前的状态 &  动作对象）
*/

import { ADD_PERSON } from "../constant";

let initState = [{ id: "01", name: "libai", age: 18 }];
function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
        // preState.unshift(data) //此处不能这么写，会导致preState被改写，事reducer成为一个非纯函数
      return [data, ...preState];
    default:
      return preState;
  }
}

export default personReducer;
