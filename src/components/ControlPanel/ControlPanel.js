import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayIcon from "../Icons/PlayIcon";
import ResetIcon from "../Icons/ResetIcon";
import "./ControlPanel.css";

export default class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      speed: 100
    }
  }
  onSpeedChange({ target: { value } }) {
    this.props.onSpeedChange(value);
    this.setState({
      speed: value
    })
  }
  render() {
    const { onReset, onStart, onSpeedChange, running } = this.props;
    return (
      <div className="ControlPanel">
        {this.props.running ? (
          <ResetIcon onReset={onReset} />
        ) : (
          <PlayIcon onStart={onStart} />
        )}
        <div>
          <span style={{color: "white"}}>{this.state.speed}</span>
          <br/>
          <input
            type="range"
            min={100}
            defaultValue={100}
            max={1000}
            disabled={running}
            onChange={this.onSpeedChange.bind(this)}
          />
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
