import React, { PureComponent } from "react";
import MyButton from "./MyButton";
import ButtonAction from "../actions/ButtonAction";
import ListStore from "../stores/ListStore";

class MyButtonController extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    ListStore.addChangeListener(this._onChange);
  }

  _onChange = () => {
    console.log("触发了view中的这个事件");
  };

  createNewItem = () => {
    console.log("点击事件");
    ButtonAction.addNewItem("new item");
  };

  render() {
    const { items } = this.state;
    return <MyButton items={items} onClick={this.createNewItem} />;
  }
}
export default MyButtonController;
