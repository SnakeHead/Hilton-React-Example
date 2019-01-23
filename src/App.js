import React, { Component } from 'react';
import './App.css';
import Rooms from './components/rooms'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rooms />
      </div>
    );
  }
}

export default App;
