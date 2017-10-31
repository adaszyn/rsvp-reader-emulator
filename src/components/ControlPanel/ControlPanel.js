import React, { Component } from "react";
import PropTypes from "prop-types";
import playIcon from "./play.svg";
import resetIcon from "./reset.svg";
import "./ControlPanel.css";

export default class ControlPanel extends Component {
  render() {
    if (this.props.running) {
      return (
        <img
          className="control-icon"
          onClick={this.props.onReset}
          src={resetIcon}
        />
      );
    }
    return (
      <img
        className="control-icon"
        onClick={this.props.onStart}
        src={playIcon}
      />
    );
  }
}

ControlPanel.propTypes = {
  onStart: PropTypes.func,
  onReset: PropTypes.func,
  running: PropTypes.bool
};
