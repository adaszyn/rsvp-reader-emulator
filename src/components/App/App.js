import React, { Component } from "react";
import Screen from "../Screen/Screen";
import Statistics from "../Statistics/Statistics";
import ControlPanel from "../ControlPanel/ControlPanel";
import "./App.css";

const SAMPLE_TEXT = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis`;

function onStartCallback(startTime) {}
function onStopCallback(stopTime) {}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      startTime: 0,
      stopTime: 0
    };
  }
  onControlPanelStart() {
    const now = new Date().getTime();
    this.setState({
      running: true,
      startTime: now
    });
  }
  onControlPanelReset() {
    this.setState({
      running: false
    });
  }
  onScreenReaderFinished (time) {
    this.setState({
      running: false,
      stopTime: time
    });
  }
  render() {
    return (
      <div className="App">
        <ControlPanel
          onStart={this.onControlPanelStart.bind(this)}
          onReset={this.onControlPanelReset.bind(this)}
        />
        <Screen
          running={this.state.running}
          width={300}
          height={300}
          wordsPerScreen={2}
          speed={800}
          text={SAMPLE_TEXT}
          serif={true}
          onFinish={this.onScreenReaderFinished.bind(this)}
        />
        <Statistics 
          running={this.state.running}
          startTime={this.state.startTime}
          stopTime={this.state.stopTime}
        />
      </div>
    );
  }
}

export default App;
