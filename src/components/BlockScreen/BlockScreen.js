import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BlockScreen.css";

export default class BlockScreen extends Component {
  render() {
    const { width, height } = this.props;
    const textClassName = `text ${this.props.serif ? "serif" : "sans-serif"} block`;
    return (
      <div className="App">
      <div
        style={{ height, width, lineHeight: `${height}px` }}
        className="screen block"
      >
        <p style={{fontSize: this.props.fontSize}} className={textClassName}>
          {this.props.text}
        </p>
      </div>
      <button onClick={this.props.onExit}>BACK</button>              
      </div>
    );
  }
}

Screen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  serif: PropTypes.bool,
  onExit: PropTypes.func,
  fontSize: PropTypes.number
};
