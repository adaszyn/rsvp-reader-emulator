import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatMilisecondsToText } from "../../util/time-util";
import "./Statistics.css";
import { roundNumber } from "../../util/number-util";
const REFRESH_TIME = 10;

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  setupInterval() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().getTime() - this.props.startTime
      });
    }, REFRESH_TIME);
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps({ running }) {
    if (running) {
      this.setupInterval();
    } else {
      this.stopInterval();
    }
  }

  render() {
    if (this.props.running) {
      return (
        <div className="Statistics">
          <table>
            <tbody>
              <tr>
                <th>Time</th>
                <th>{formatMilisecondsToText(this.state.time)}</th>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    const timeInMinutes = this.state.time / (1000 * 60);
    let speed = roundNumber(this.props.totalWords / timeInMinutes);
    if (speed === Infinity) {
      speed = '-';
    }
    return (
      <table className="statistics-table">
        <tbody>
          <tr>
            <td>Time</td>
            <td>{formatMilisecondsToText(this.state.time)}</td>
          </tr>
          <tr>
            <td>Words</td>
            <td>{this.props.totalWords}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{speed}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Statistics.propTypes = {
  startTime: PropTypes.number,
  stopTime: PropTypes.number,
  totalWords: PropTypes.number
};
