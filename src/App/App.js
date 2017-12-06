import React, { Component } from 'react';
import Header from './Components/Header/Header';
import DataBox from './Components/DataBox/DataBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlData: {}
    }
  }

  componentDidMount() {
    //fetch the thing
    //Json the data
    //Send it to a cleaner
    //Set state

  }

  cleanCrawlData() {
    //Take in crawl data
    //Sort out what's needed
    //return new object
  }

  render( { crawl }) {
    return (
      <div className="App">
        <Header crawlData/>
        <DataBox />
      </div>
    );
  }
}

export default App;
