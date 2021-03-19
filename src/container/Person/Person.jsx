import React, { Component } from "react";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/action/person_action";

class Person extends Component {


  add = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    let newli = { id: Date.now(), name, age };
    this.props.addPerson(newli)
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    console.log(this.props);
    
    return (
      <div>
        <h4>我是Person组件，当前求和为{this.props.count}</h4>
        <input
          type="text"
          placeholder="请输入名字"
          ref={c => (this.nameNode = c)}
        />
        <input
          type="text"
          placeholder="请输入年龄"
          ref={c => (this.ageNode = c)}
        />
        <button onClick={this.add}>添加</button>
        <ul>
          {this.props.list.map(item => (
            <li key={item.id}>{item.name + "----- " + item.age}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ list: state.list,count:state.count }), {
  addPerson:addPersonAction
})(Person);
