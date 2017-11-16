import React, { Component } from "react";
import Screen from "../Screen/Screen";
import Statistics from "../Statistics/Statistics";
import ControlPanel from "../ControlPanel/ControlPanel";
import PropTypes from 'prop-types';
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      startTime: 0,
      stopTime: 0,
      speed: 400
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
  onControlPanelSpeedChange (value) {
    this.setState({
      speed: Number(value)
    })
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
          running={this.state.running}
          onStart={this.onControlPanelStart.bind(this)}
          onReset={this.onControlPanelReset.bind(this)}
          onSpeedChange={this.onControlPanelSpeedChange.bind(this)}
        />
        <Screen
          running={this.state.running}
          width={this.props.width}
          height={this.props.height}
          wordsPerScreen={2}
          fontSize={this.props.fontSize}
          speed={this.state.speed}
          text={this.props.text}
          serif={true}
          onFinish={this.onScreenReaderFinished.bind(this)}
        />
        <Statistics 
          running={this.state.running}
          startTime={this.state.startTime}
          stopTime={this.state.stopTime}
        />
        <button onClick={this.props.onExit}>BACK</button>
      </div>
    );
  }
}

App.propTypes = {
  onExit: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  fontSize: PropTypes.number,
}
export default App;
