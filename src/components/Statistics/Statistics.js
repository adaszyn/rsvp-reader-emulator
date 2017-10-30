import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Statistics extends Component {
  state = {};
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Time</th>
              <th>{this.props.timeElapsed}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Statistics.propTypes = {
  timeElapsed: PropTypes.string
};
