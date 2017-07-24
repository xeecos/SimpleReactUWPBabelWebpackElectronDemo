import React from "react";
import { Path } from "react-konva";
export default class LCPath extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: "green",
      x: 100,
      y: 100,
      scaleX: 2.0,
      scaleY: 2.0
    };
    this.data =
      "m 73.843879,127.3336 q 0.09525,0.0212 0.391583,0.0212 0.306917,0 0.465667,-0.0212 0.15875,-0.0318 0.296333,-0.0318 0.508,0 0.804333,0.30692 0.306917,0.29633 0.306917,0.74083 0,0.4445 -0.15875,0.71967 -0.15875,0.26458 -0.338667,0.26458 -0.105833,0 -0.201083,-0.14817 -0.09525,-0.14816 -0.931333,-0.635 -0.127,-0.0741 -0.127,-0.13758 0,-0.0741 0.232833,-0.0741 0.232833,0 0.370417,-0.0635 0.148166,-0.0635 0.148166,-0.15875 0,-0.0423 -0.211666,-0.28575 -0.211667,-0.254 -0.370417,-0.30692 -0.15875,-0.0635 -0.677333,-0.10583 0.02117,0.55033 0.02117,0.94191 0,1.25942 -0.243416,1.68275 -0.232834,0.43392 -0.402167,0.43392 -0.15875,0 -0.359833,-0.29633 -0.4445,-0.62442 -1.153584,-1.27 -0.243416,0.30691 -0.391583,0.78316 -0.03175,0.10584 -0.169333,0.10584 -0.127,0 -0.359834,-0.30692 -0.22225,-0.3175 -0.22225,-0.58208 0,-0.27517 0.08467,-0.61384 0.09525,-0.33866 0.306917,-0.33866 0.211666,0 0.328083,0.32808 0.518583,-0.30692 1.566333,-0.78317 0.02117,-0.37041 -0.07408,-0.53975 -0.08467,-0.17991 -0.455083,-0.5715 -0.391584,0.39159 -0.53975,0.39159 -0.137584,0 -0.328084,-0.32809 -0.179916,-0.32808 -0.179916,-0.62441 0,-0.29634 0.201083,-0.39159 0.05292,-0.0212 0.127,-0.127 0.07408,-0.11641 0.179917,-0.33866 0.105833,-0.23284 0.264583,-0.64559 0.15875,-0.42333 0.275167,-0.75141 0.116416,-0.32809 0.116416,-0.46567 0,-0.13758 -0.137583,-0.39158 -0.137583,-0.26459 -0.338667,-0.26459 -0.105833,0 -0.22225,0.0847 -0.116416,0.0741 -0.15875,0.0741 -0.03175,0 -0.03175,-0.0212 0,-0.0635 0.169334,-0.21167 0.169333,-0.14817 0.423333,-0.14817 0.169333,0 0.592667,0.22225 0.433916,0.21167 0.582083,0.39159 0.15875,0.16933 0.15875,0.40216 0,0.47625 -0.127,0.62442 -0.116417,0.13758 -0.169333,0.56092 0.709083,-0.26459 1.0795,-0.49742 0.08467,-0.0529 0.211666,-0.0529 0.28575,0 0.772584,0.3175 0.497416,0.3175 0.497416,0.62442 0,0.127 -0.0635,0.3175 -0.0635,0.17992 -0.275166,0.23283 -0.201084,0.0423 -0.275167,0.17992 -0.02117,0.0423 -0.53975,0.42333 -0.508,0.37042 -0.53975,0.381 -0.254,0.0529 -0.328083,0.20109 0.127,0.28575 0.127,0.77258 z m -0.560917,-1.22767 q 0.41275,-0.23283 0.645583,-0.59266 0.243417,-0.35984 0.243417,-0.43392 0,-0.0318 -0.03175,-0.0318 -0.116417,0 -0.53975,0.254 -0.41275,0.24342 -0.677333,0.635 0.211666,0.16933 0.359833,0.16933 z m -1.397,2.62467 q 0.15875,0.10583 0.423333,0.21167 0.264584,0.0952 0.455084,0.0952 0.105833,0 0.127,-0.0952 0.03175,-0.0953 0.03175,-0.45509 0,-0.35983 -0.03175,-0.58208 -0.751417,0.41275 -1.005417,0.8255 z m -2.624667,-1.43933 q -0.243416,0.30691 -0.4445,0.30691 -0.201083,0 -0.359833,-0.381 -0.148167,-0.39158 -0.148167,-0.635 0,-0.24341 0.137584,-0.26458 0.148166,-0.0318 0.47625,-0.56092 0.328083,-0.53975 0.613833,-1.23825 0.28575,-0.6985 0.28575,-1.12183 0,-0.11642 -0.02117,-0.21167 -0.02117,-0.0952 -0.02117,-0.14816 0,-0.0635 0.03175,-0.0635 0.09525,0 0.656166,0.56091 0.560917,0.55034 0.560917,0.84667 0,0.0635 -0.05292,0.26458 -0.04233,0.20109 -0.1905,0.29634 -0.137583,0.0952 -0.53975,0.79375 -0.402166,0.6985 -0.402166,0.83608 0.127,0.28575 0.201083,0.51858 0.07408,-0.35983 0.116417,-0.35983 0.04233,0 0.04233,0.81492 0,0.80433 -0.03175,1.62983 -0.02117,0.8255 -0.07408,0.9525 -0.05292,0.127 -0.148167,0.127 -0.169333,0 -0.497417,-0.46567 -0.3175,-0.46566 -0.264583,-0.79375 0.105833,-0.64558 0.07408,-1.70391 z";
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.state.color = Konva.Util.getRandomColor();
    this.setState(this.state);
  }
  render() {
    return (
      <Path
        data={this.data}
        scaleX={this.state.scaleX}
        scaleY={this.state.scaleY}
        offsetX={70}
        offsetY={120}
        x={this.state.x}
        y={this.state.y}
        stroke={this.state.color}
        strokeWidth={0.5}
        onClick={this.handleClick}
        dragBoundFunc={pos => {
          this.state.x = pos.x / this.state.scaleX;
          this.state.y = pos.y / this.state.scaleY;
          return pos;
        }}
        draggable="true"
      />
    );
  }
}
