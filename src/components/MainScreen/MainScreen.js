import React, { Component } from "react";
import App from "../App/App";
import BlockScreen from "../BlockScreen/BlockScreen";
import "./MainScreen.css";

const VIEW = {
  RSVP_VIEW: 1 << 1,
  BLOCK_VIEW: 1 << 2,
  MENU_VIEW: 1 << 3
};

const SAMPLE_TEXT = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua
adipiscing elit, sed do eiusmod tempor 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis`;
const INITIAL_SLIDER_VALUE = 150;

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      view: VIEW.MENU_VIEW,
      text: SAMPLE_TEXT,
      fontSize: 14,
      sliderValue: INITIAL_SLIDER_VALUE
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
  renderMenuView() {
    return (
      <div className="MainScreen">
        <div className="config-panel left">
          <input
            type="range"
            defaultValue={INITIAL_SLIDER_VALUE}
            min={140}
            max={300}
            onChange={this.onRangeChange.bind(this)}
          />
          <div style={this.getScreenSize()} className="screen preview">
            <p className="screen-size-label">{this.state.sliderValue} px</p>
          </div>
        </div>
        <div className="config-panel right">
          <button
            className="button"
            onClick={this.onRsvpButtonClick.bind(this)}
          >
            RSVP
          </button>
          <button
            className="button"
            onClick={this.onBlockButtonClick.bind(this)}
          >
            BLOCK
          </button>
        </div>
      </div>
    );
  }
  renderRsvpView() {
    return (
      <App
        height={this.state.sliderValue}
        width={this.state.sliderValue}
        text={this.state.text}
        fontSize={this.state.fontSize}
        onExit={this.setMenuView.bind(this)}
      />
    );
  }

  renderBlockView() {
    return (
      <BlockScreen
        height={this.state.sliderValue}
        width={this.state.sliderValue}
        fontSize={this.state.fontSize}
        text={this.state.text}
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
