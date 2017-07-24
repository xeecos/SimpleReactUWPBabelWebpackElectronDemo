import React from "react";
import { Rect } from "react-konva";
export default class LCRect extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: "green"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  }
  render() {
    return (
      <Rect
        x={10}
        y={10}
        width={40}
        height={40}
        fill={this.state.color}
        shadowBlur={10}
        onClick={this.handleClick}
        draggable="true"
      />
    );
  }
}
