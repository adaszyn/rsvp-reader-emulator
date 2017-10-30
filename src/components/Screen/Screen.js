import React, { Component } from "react";
import PropTypes from "prop-types";
import { splitTextByWordCount } from "../../util/text-util";
import "./Screen.css";

export default class Screen extends Component {
  constructor(props) {
    const { text, wordsPerScreen } = props;
    super(props);
    this.state = {
      words: splitTextByWordCount(text, wordsPerScreen),
      currentWordIndex: 0
    };
    this.setupInterval();
  }
  setupInterval () {
    this.intervalId = setInterval(() => {
      if (this.state.currentWordIndex === this.state.words.length) {
        clearInterval(this.intervalId);
      }
      this.setState({
        currentWordIndex: this.state.currentWordIndex + 1
      })
    }, this.props.speed)
  }
  render() {
    const { width, height } = this.props;
    return <div style={{ height, width }} className="screen">
      <span>{this.state.words[this.state.currentWordIndex]}</span>
    </div>;
  }
}

Screen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  wordsPerScreen: PropTypes.number,
  speed: PropTypes.number,
  onStart: PropTypes.func,
  onEnd: PropTypes.func
};
