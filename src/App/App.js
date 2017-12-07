import React, { Component } from 'react';
import fetchCrawlData from '../ApiCalls/crawlData';
import fetchPeople from '../ApiCalls/peopleData';
import fetchPlanets from '../ApiCalls/planetsData';
import fetchVehicles from '../ApiCalls/vehiclesData';
import Header from './Components/Header/Header';
import DataBox from './Components/DataBox/DataBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlData: {},
      display: null,
      people: [],
      planets: [],
      vehicles: []
    };
  }

  async componentDidMount() {
    const crawlData = await fetchCrawlData();
    const people = await fetchPeople();
    const planets = await fetchPlanets();
    const vehicles = await fetchVehicles();

    this.setState({ crawlData, people, planets, vehicles });
  }

  selectData = type => {
    const display = type.toLowerCase();
    this.setState({ display });
  };

  render() {
    if (this.state.crawlData) {
      return (
        <div className="App">
          <Header crawlData={this.state.crawlData} />
          <DataBox
            displayData={this.state[this.state.display]}
            selectData={this.selectData}
            currentDisplay={this.state.display}
          />
        </div>
      );
    }
    return null;
  }
}

export default App;
