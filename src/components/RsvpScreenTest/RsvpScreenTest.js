import React, { Component } from "react";
import Screen from "../Screen/Screen";
import Statistics from "../Statistics/Statistics";
import ControlPanel from "../ControlPanel/ControlPanel";
import PropTypes from "prop-types";
import "./RsvpScreenTest.css";
import { countWords } from "../../util/text-util";
import SelectField from "material-ui/SelectField";
import { RaisedButton } from "material-ui";

class RsvpScreenTest extends Component {
  constructor(props) {
    super(props);
    this.totalWords = countWords(this.props.text);
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
  onControlPanelSpeedChange(value) {
    this.setState({
      speed: Number(value)
    });
  }
  onScreenReaderFinished(time) {
    this.setState({
      running: false,
      stopTime: time
    });
  }
  renderScreen() {
    const { width, height, text } = this.props;
    const textClassName = `text ${this.props.serif ? "serif" : "sans-serif"}`;
    if (!this.state.running) {
      return (
        <div
          style={{
            height,
            width,
            lineHeight: `${height}px`,
            fontSize: this.props.fontSize
          }}
          className="screen"
        >
          <span className={textClassName}>Press play to Start</span>
        </div>
      );
    }
    return (
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
    );
  }
  render() {
    return (
      <div className="App">
        <div className="config-panel left">{this.renderScreen()}</div>
        <div className="config-panel right">
          <ControlPanel
            running={this.state.running}
            onStart={this.onControlPanelStart.bind(this)}
            onReset={this.onControlPanelReset.bind(this)}
            onSpeedChange={this.onControlPanelSpeedChange.bind(this)}
          />
          <Statistics
            running={this.state.running}
            startTime={this.state.startTime}
            totalWords={this.totalWords}
            stopTime={this.state.stopTime}
          />
          <RaisedButton
            style={{ width: "80%" }}
            onClick={this.props.onExit}
            label="BACK"
          />
        </div>
      </div>
    );
  }
}

RsvpScreenTest.propTypes = {
  onExit: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  fontSize: PropTypes.number
};
export default RsvpScreenTest;
