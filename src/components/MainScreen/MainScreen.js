import React, { Component } from "react";
import App from "../App/App";
import BlockScreenTest from "../BlockScreenTest/BlockScreenTest";
import "./MainScreen.css";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/fonts/fontawesome-webfont.ttf";
import { EMAILS } from "../../data/emails";
import { SHORT_MESSAGES } from "../../data/short-messages";

const VIEW = {
  RSVP_VIEW: 1 << 1,
  BLOCK_VIEW: 1 << 2,
  MENU_VIEW: 1 << 3
};

const INITIAL_SLIDER_VALUE = 150;

export default class MainScreen extends Component {
  constructor() {
    super();
    this.messageType = "SMS";    
    this.state = {
      view: VIEW.MENU_VIEW,
      fontSize: 14,
      sliderValue: INITIAL_SLIDER_VALUE,
      sampleSize: 10
    };
  }
  onBlockButtonClick() {
    this.setState({
      view: VIEW.BLOCK_VIEW
    });
  }
  onRsvpButtonClick() {
    this.setState({
      view: VIEW.RSVP_VIEW
    });
  }
  setMenuView() {
    this.setState({
      view: VIEW.MENU_VIEW
    });
  }
  onRangeChange({ target: { value } }) {
    this.setState({
      sliderValue: Number(value)
    });
  }
  getScreenSize() {
    return {
      width: `${this.state.sliderValue}px`,
      height: `${this.state.sliderValue}px`
    };
  }
  onSampleSizeChange({ target: { value } }) {
    this.setState({
      sampleSize: Number(value)
    });
  }
  onMessageTypeChange({target: {value}}) {
    this.messageType = value;
  }
  getRandomMessages(n) {
    const array = this.messageType === "SMS"
      ? SHORT_MESSAGES
      : EMAILS
    let result = new Array(n),
      len = array.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = array[x in taken ? taken[x] : x];
      taken[x] = --len;
    }
    return result;
  }
  renderMenuView() {
    return (
      <div className="MainScreen">
        <div className="config-panel left">
          <div style={this.getScreenSize()} className="screen preview">
            <p className="screen-size-label">{this.state.sliderValue} px</p>
          </div>
          <input
            className="range-slider"
            type="range"
            defaultValue={INITIAL_SLIDER_VALUE}
            min={140}
            max={300}
            onChange={this.onRangeChange.bind(this)}
          />
        </div>
        <div className="config-panel right">
          <div className="config-panel top">
            <select onChange={this.onMessageTypeChange.bind(this)} defaultValue="SMS">
              <option>SMS</option>
              <option>EMAIL</option>
            </select>
            <button
              style={{ width: "100%" }}
              className="button -regular center"
              onClick={this.onRsvpButtonClick.bind(this)}
            >
              <i className="fa fa-play" aria-hidden="true" />
              RSVP
            </button>
          </div>

          <div className="config-panel bottom">
            <div className="block-button-container">
              <button
                className="button -regular center"
                onClick={this.onBlockButtonClick.bind(this)}
              >
                <i className="fa fa-play" aria-hidden="true" />
                BLOCK
              </button>
              <select
                defaultValue={10}
                className="sample-select"
                onChange={this.onSampleSizeChange.bind(this)}
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderRsvpView() {
    return (
      <App
        height={this.state.sliderValue}
        width={this.state.sliderValue}
        text={this.getRandomMessages(1).pop()}
        fontSize={this.state.fontSize}
        onExit={this.setMenuView.bind(this)}
      />
    );
  }

  renderBlockView() {
    return (
      <BlockScreenTest
        height={this.state.sliderValue}
        width={this.state.sliderValue}
        fontSize={this.state.fontSize}
        texts={this.getRandomMessages(this.state.sampleSize)}
        onExit={this.setMenuView.bind(this)}
      />
    );
  }

  render() {
    switch (this.state.view) {
      case VIEW.BLOCK_VIEW:
        return this.renderBlockView();
      case VIEW.RSVP_VIEW:
        return this.renderRsvpView();
      case VIEW.MENU_VIEW:
      default:
        return this.renderMenuView();
    }
  }
}
