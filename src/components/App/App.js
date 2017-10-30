import React, { Component } from 'react';
import Screen from '../Screen/Screen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen
          width={300}
          height={300}
          wordsPerScreen={1}
          speed={30}
        />
      </div>
    );
  }
}

export default App;
