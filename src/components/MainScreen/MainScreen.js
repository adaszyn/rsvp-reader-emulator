import React, { Component } from "react";
import App from "../App/App";
import BlockScreen from "../BlockScreen/BlockScreen";

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

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      view: VIEW.MENU_VIEW,
      height: 200,
      width: 200,
      text: SAMPLE_TEXT,
      fontSize: 14
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
  renderMenuView() {
    return (
      <div className="main-screen">
        <button className="button" onClick={this.onRsvpButtonClick.bind(this)}>
          RSVP
        </button>
        <button className="button" onClick={this.onBlockButtonClick.bind(this)}>
          BLOCK
        </button>
      </div>
    );
  }
  renderRsvpView() {
    return (
      <App
        height={this.state.height}
        width={this.state.width}
        text={this.state.text}
        fontSize={this.state.fontSize}    
        onExit={this.setMenuView.bind(this)}
      />
    );
  }

  renderBlockView() {
    return (
      <BlockScreen
        height={this.state.height}
        width={this.state.width}
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
