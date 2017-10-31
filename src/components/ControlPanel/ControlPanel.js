import React, { Component } from "react";
import PropTypes from "prop-types";
import playIcon from "./play.svg";
import resetIcon from "./reset.svg";
import "./ControlPanel.css";

const PlayIcon = ({ onStart }) => (
  <img alt="play-icon" className="control-icon" onClick={onStart} src={playIcon} />
);

const ResetIcon = ({ onReset }) => (
  <img alt="reset-icon" className="control-icon" onClick={onReset} src={resetIcon} />
);

export default class ControlPanel extends Component {
  render() {
    const { onReset, onStart, onSpeedChange, running } = this.props;
    return (
      <div className="ControlPanel">
        {this.props.running ? (
          <ResetIcon onReset={onReset} />
        ) : (
          <PlayIcon onStart={onStart} />
        )}
        <div className="speed-select-container">
          <select disabled={running} className="speed-select" onChange={({target: {value}}) => onSpeedChange(value)}>
            <option>400</option>
            <option>800</option>
            <option>1200</option>
          </select>
        </div>
      </div>
    );
  }
}

ControlPanel.propTypes = {
  onStart: PropTypes.func,
  onReset: PropTypes.func,
  onSpeedChange: PropTypes.func,
  running: PropTypes.bool
};
