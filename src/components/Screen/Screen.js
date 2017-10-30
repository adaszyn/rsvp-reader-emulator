import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Screen.css";

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { width, height } = this.props;
    return <div style={{ height, width }} className="screen" />;
  }
}

Screen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string.required,
  wordsPerScreen: PropTypes.number.required,
  speed: PropTypes.number.required,
  onStart: PropTypes.func,
  onEnd: PropTypes.func
};
