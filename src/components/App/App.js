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
      running: false
    };
  }
  onControlPanelStart() {
    this.setState({
      running: true
    });
  }
  onControlPanelPause() {
    this.setState({
      running: false
    });
  }
  render() {
    return (
      <div className="App">
        <ControlPanel
          onStart={this.onControlPanelStart.bind(this)}
          onPause={this.onControlPanelPause.bind(this)}
        />
        <Screen
          running={this.state.running}
          width={300}
          height={300}
          wordsPerScreen={2}
          speed={800}
          text={SAMPLE_TEXT}
          onStart={onStartCallback}
          onStop={onStopCallback}
          serif={true}
        />
        <Statistics />
      </div>
    );
  }
}

export default App;
