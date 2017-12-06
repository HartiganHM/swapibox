import React, { Component } from 'react';
import Header from './Components/Header/Header';
import DataBox from './Components/DataBox/DataBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DataBox />
      </div>
    );
  }
}

export default App;
