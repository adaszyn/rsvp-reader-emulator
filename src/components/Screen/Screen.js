import React, { Component } from "react";
import PropTypes from "prop-types";
import { splitTextByWordCount } from "../../util/text-util";
import "./Screen.css";

export default class Screen extends Component {
  constructor(props) {
    let { text, wordsPerScreen, running } = props;
    let displayedText = text;
    super(props);
    this.token = "-".repeat(wordsPerScreen);
    let words
    if (Array.isArray(text)) {
      words = text.reduce((acc, curr) => {
        return [...acc, ...splitTextByWordCount(curr, wordsPerScreen), this.token]
      }, [])
    } else {
      words = splitTextByWordCount(displayedText, wordsPerScreen);
    }
    this.state = {
      words,
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
        if (!this._isMounted) {
          this.clearInterval();
          return;
        }
        this.setState({
          currentWordIndex: this.state.currentWordIndex + 1
        });
      }
    }, this.props.wordsPerScreen * 1000 / this.props.speed * 60  );
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

  componentDidMount() { 
    this._isMounted = true;
  }
  
  componentWillUnmount() {
     this._isMounted = false;
  }

  render() {
    const { width, height } = this.props;
    const textClassName = `text ${this.props.serif ? "serif" : "sans-serif"}`;
    const backgroundColor = this.state.words[this.state.currentWordIndex] === this.token
      ? "black"
      : "white";
    return (
      <div
        style={{ height, width, lineHeight: `${height}px`, fontSize: this.props.fontSize, backgroundColor }}
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
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  wordsPerScreen: PropTypes.number,
  speed: PropTypes.number,
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  onFinish: PropTypes.func,
  serif: PropTypes.bool,
  running: PropTypes.bool,
  fontSize: PropTypes.number
};
