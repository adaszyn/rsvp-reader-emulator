import React, { Component } from "react";
import BlockScreen from "../BlockScreen/BlockScreen";
import PropTypes from "prop-types";
import { formatMilisecondsToText } from "../../util/time-util";
import { countWords } from "../../util/text-util";
import { roundNumber } from '../../util/number-util'
import './BlockScreenTest.css'

export default class BlockScreenTest extends Component {
  constructor(props) {
    super(props);
    this.startTime = 0;
    this.endTime = 0;
    this.totalWords = countWords(props.texts);
    this.state = {
      currentTextIndex: 0,
      isRunning: false,
      currentTime: 0,
      finished: false
    };
  }

  renderProgressButton() {
    const { isRunning, finished } = this.state;
    const isLastText =
      this.state.currentTextIndex === this.props.texts.length - 1;
    if (isRunning && !isLastText) {
      return <button onClick={this.onNext.bind(this)}>NEXT</button>;
    } else if (isRunning && isLastText) {
      return <button onClick={this.onFinish.bind(this)}>FINISH</button>;
    } else if (!finished) {
      return <button onClick={this.onStart.bind(this)}>START</button>;
    }
    return false;
  }
  onStart() {
    this.startTime = Date.now();
    this.setState({
      isRunning: true
    });
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: Date.now() - this.startTime
      });
    }, 10);
  }
  onNext() {
    this.setState({
      currentTextIndex: this.state.currentTextIndex + 1
    });
  }
  onFinish() {
    this.endTime = Date.now();
    this.measuredTime = this.endTime - this.startTime;
    this.setState({
      isRunning: false,
      finished: true
    });
    clearInterval(this.intervalId);
  }
  getCurrentText() {
    if (!this.state.isRunning) {
      return "Press play to begin";
    } else {
      return this.props.texts[this.state.currentTextIndex];
    }
  }
  renderStatistics() {
    const timeInMinutes = this.measuredTime / (1000 * 60);
    const speed = roundNumber(this.totalWords / timeInMinutes);
    const time = formatMilisecondsToText(this.measuredTime)
    return (
      <table className="statistics-table">
        <tbody>
          <tr>
            <td>Time</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td>Words</td>
            <td>{this.totalWords}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{speed}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    const { height, width, fontSize, onExit } = this.props;
    const shouldRenderStatistics = !this.state.isRunning && this.state.finished;
    return (
      <div className="App">
        <BlockScreen
          height={height}
          width={width}
          fontSize={fontSize}
          text={this.getCurrentText()}
        />
        {this.renderProgressButton()}
        {this.state.isRunning && (
          <span style={{ color: "white" }}>
            {" "}
            {formatMilisecondsToText(this.state.currentTime)}{" "}
          </span>
        )}
        <button onClick={onExit}>EXIT</button>
        {shouldRenderStatistics && this.renderStatistics()}
      </div>
    );
  }
}
BlockScreenTest.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  texts: PropTypes.arrayOf(PropTypes.string),
  serif: PropTypes.bool,
  onExit: PropTypes.func,
  fontSize: PropTypes.number
};
