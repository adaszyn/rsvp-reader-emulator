import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BlockScreen.css";

export default class BlockScreen extends Component {
  componentDidUpdate(oldProps) {
    if (this.props.text !== oldProps.text && this.screen) {
      this.screen.scrollTop = 0;
    }
  }
  
  render() {
    const { width, height } = this.props;
    const textClassName = `text ${this.props.serif
      ? "serif"
      : "sans-serif"} block`;
    return (
      <div
        ref={screen => this.screen = screen}
        style={{ height, width, lineHeight: `${height}px` }}
        className="screen block"
      >
        <p style={{ fontSize: this.props.fontSize }} className={textClassName}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

BlockScreen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  serif: PropTypes.bool,
  onExit: PropTypes.func,
  fontSize: PropTypes.number
};
