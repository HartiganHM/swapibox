import React, { Component } from 'react';
import Header from './Components/Header/Header';
import DataBox from './Components/DataBox/DataBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlData: {}
    };
  }

  async componentDidMount() {
    const key = Math.floor(Math.random() * 7 + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${key}/`);
    const jsonData = await fetchedData.json();

    const crawlData = this.cleanCrawlData(jsonData);

    this.setState({ crawlData });
  }

  cleanCrawlData(data) {
    return Object.assign(
      {},
      {
        episodeNum: data.episode_id,
        episodeTitle: data.title,
        openingCrawl: data.opening_crawl
      }
    );
  }

  fetchPeople = async () => {
    const fetchedPeople = await fetch('https://swapi.co/api/people/');
    const jsonData = fetchedPeople.json();
    debugger;
    const peopleArray = this.fetchHomeworldSpeies(jsonData);

    this.setState({ peopleArray });
  };

  fetchHomeworldSpeies(peopleData) {
    const unresolvedPromises = peopleData.map(async person => {
      
    });
  }

  render() {
    if (this.state.crawlData) {
      return (
        <div className="App">
          <Header crawlData={this.state.crawlData} />
          <DataBox fetchPeople={this.fetchPeople} />
        </div>
      );
    }
    return null;
  }
}

export default App;
