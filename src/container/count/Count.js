import React, { Component } from "react";

import { connect } from "react-redux";

import { addAction, delAction, addAsyncAction } from "../../redux/count_action";



class Count extends Component {
  // 加
  add = () => {
    const { value } = this.val;
    this.props.add(value * 1);
  };

  // 减
  del = () => {
    const { value } = this.val;
    this.props.del(value * 1);
  };

  // 奇数加
  addIfodd = () => {
    const { value } = this.val;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1);
    }
  };

  // 异步加
  addAsync = () => {
    const { value } = this.val;
    this.props.addAsync(value * 1,500);
  };

  render() {
    console.log(this.props); //获取来自容器组件传递过来的mapStateToProps 、  mapDispatchToProps
    return (
      <div>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => (this.val = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>加</button>
        <button onClick={this.del}>减</button>
        <button onClick={this.addIfodd}>奇数加</button>
        <button onClick={this.addAsync}>异步加</button>
      </div>
    );
  }
}



/*
 返回一个对象，作为props传给UI组件，用于传递状态state(默认有store的state参数)
 */

// function mapStateToProps(state) {
//   return { count: state };
// }

/*
 返回一个对象，作为props传给UI组件，用于传递操作状态方法action(默认有store的dispatch参数)
 */

// function mapDispatchToProps(dispatch) {
//   return {
//     add: data => dispatch(addAction(data)),
//     del: data => dispatch(delAction(data)),
//     addAsync: (data,time) => dispatch(addAsyncAction(data,time))
//   };
// }

//当前作为一个容器组件，用于连接  UI组件  与 store \mapDispatchToProps  可以为一个对象，当属性值为action对象时，react-redux会自动调用dispatch
export default connect(state => ({ count: state }), {
  add: addAction,
  del: delAction,
  addAsync: addAsyncAction
})(Count);
