import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatMilisecondsToText } from "../../util/time-util";
import "./Statistics.css";
const REFRESH_TIME = 10;

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: formatMilisecondsToText(0)
    };
  }

  setupInterval() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: formatMilisecondsToText(
          new Date().getTime() - this.props.startTime
        )
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
    return (
      <div className="Statistics">
        <table>
          <tbody>
            <tr>
              <th>Time</th>
              <th>{this.state.time}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Statistics.propTypes = {
  startTime: PropTypes.number,
  stopTime: PropTypes.number
};
