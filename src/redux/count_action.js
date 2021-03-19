import { ADD, DEL } from "./constant";

// 同步action，是一个普通对象
export const addAction = data => ({ type: ADD, data });
export const delAction = data => ({ type: DEL, data });

// 异步action，是一个函数，异步action一般借助同操作的同步action进行封装
export const addAsyncAction = (data, time) => {
  return dispactch => {
    setTimeout(() => {
      dispactch(addAction(data));
    }, time);
  };
};
