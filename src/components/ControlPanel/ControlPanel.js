import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ControlPanel.css";
import NumberInput from "material-ui-number-input";
import { RaisedButton } from "material-ui";

export default class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      speed: 100
    };
  }
  onSpeedChange(e, value) {
    this.props.onSpeedChange(value);
    this.setState({
      speed: value
    });
  }
  render() {
    const { onReset, onStart, running } = this.props;
    return (
      <div className="ControlPanel">
          <NumberInput
            type="number"
            floatingLabelText="Approximate Speed"
            min={100}
            value={String(this.state.speed)}
            style={{ width: "80%" }}
            max={1000}
            id="speed-input"
            className="speed-input"
            disabled={running}
            onChange={this.onSpeedChange.bind(this)}
          />
        {this.props.running ? (
          <RaisedButton
            label="RESET"
            style={{ width: "80%" }}
            onClick={onReset}
          />
        ) : (
          <RaisedButton
            style={{ width: "80%" }}
            label="START"
            onClick={onStart}
          />
        )}
      
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
