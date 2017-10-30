import React, { Component } from "react";
import Screen from "../Screen/Screen";
import "./App.css";

const SAMPLE_TEXT = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis`;

function onStartCallback (startTime) {


}
function onStopCallback (stopTime) {

}
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen
          width={300}
          height={300}
          wordsPerScreen={2}
          speed={800}
          text={SAMPLE_TEXT}
          onStart={onStartCallback}
          onStop={onStopCallback}
          serif={true}
        />
      </div>
    );
  }
}

export default App;
