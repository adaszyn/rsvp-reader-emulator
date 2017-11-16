import React, { Component } from "react";
import PropTypes from "prop-types";
import { splitTextByWordCount } from "../../util/text-util";
import "./Screen.css";

export default class Screen extends Component {
  constructor(props) {
    const { text, wordsPerScreen, running } = props;
    super(props);
    this.state = {
      words: splitTextByWordCount(text, wordsPerScreen),
      currentWordIndex: 0,
      running
    };
    if (running) {
      this.setupInterval();
    }
  }

  setupInterval() {
    this.intervalId = setInterval(() => {
      if (this.state.currentWordIndex === this.state.words.length) {
        clearInterval(this.intervalId);
        this.props.onFinish()
      } else {
        this.setState({
          currentWordIndex: this.state.currentWordIndex + 1
        });
      }
    }, this.props.speed);
  }

  clearInterval() {
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps({ running }) {
    if (running) {
      this.setState({
        running
      });
      this.setupInterval();
    } else {
      this.setState({
        running,
        currentWordIndex: 0 // we reset index counter when timer stops running
      });
      this.clearInterval();
    }
  }

  render() {
    const { width, height } = this.props;
    const textClassName = `text ${this.props.serif ? "serif" : "sans-serif"}`;
    return (
      <div
        style={{ height, width, lineHeight: `${height}px`, fontSize: this.props.fontSize }}
        className="screen"
      >
        <span className={textClassName}>
          {this.state.words[this.state.currentWordIndex]}
        </span>
      </div>
    );
  }
}

Screen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  wordsPerScreen: PropTypes.number,
  speed: PropTypes.number,
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  onFinish: PropTypes.func,
  serif: PropTypes.bool,
  running: PropTypes.bool,
  fontSize: PropTypes.number
};
