import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ControlPanel extends Component {
  render() {
    return <div>
      <button onClick={this.props.onStart}>START</button>
      <button onClick={this.props.onPause}>PAUSE</button>
    </div>;
  }
}

ControlPanel.propTypes = {
  onStart: PropTypes.func,
  onPause: PropTypes.func
}
