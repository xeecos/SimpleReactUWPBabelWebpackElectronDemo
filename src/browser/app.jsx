import React from 'react';
import './styles/index.scss';
import Button from "react-uwp/Button";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        This React project just works including <span className="redBg"><Button tooltip="Mini Tooltip">module</Button></span> local styles.
        <p>Enjoy!</p>
        
      </div>
    )
  }
}