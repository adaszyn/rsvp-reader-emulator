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
  text: PropTypes.string,
  wordsPerScreen: PropTypes.number,
  speed: PropTypes.number,
  onStart: PropTypes.func,
  onEnd: PropTypes.func
};
