import React from "react";
import "./styles/index.scss";
import Button from "react-uwp/Button";
import { Layer, Rect, Stage, Group } from "react-konva";
export default class App extends React.Component {
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
      <div>
        <h1>It Works!</h1>
        This React project just works including
        <span className="redBg">
          <Button tooltip="Mini Tooltip">module</Button>
        </span>
        local styles.
        <p>Enjoy!</p>
        <Stage width={700} height={700}>
        <Layer>
        <Rect
                x={10} y={10} width={400} height={400}
                fill={this.state.color}
                shadowBlur={10}
                onClick={this.handleClick}
            />
        </Layer>
      </Stage>
      </div>
    );
  }
}