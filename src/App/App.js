import React, { Component } from 'react';
import SideBar from './Components/SideBar/SideBar';
import DataBox from './Components/DataBox/DataBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Me duh App
        <SideBar />
        <DataBox />
      </div>
    );
  }
}

export default App;
