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

  async componentDidMount() {
    const key = Math.floor(Math.random() * 7 + 1);
    //fetch the thing
    const fetchedData = await fetch(`https://swapi.co/api/films/${key}/`);
    //Json the data
    const jsonData = await fetchedData.json();
    const crawlData = cleanCrawlData(jsonData)
    //Send it to a cleaner
    //Set state

  }

  cleanCrawlData(data) {
    //Take in crawl data
    //Sort out what's needed
    //return new object
  }

  render() {
    return (
      <div className="App">
        <Header crawlData/>
        <DataBox />
      </div>
    );
  }
}

export default App;
