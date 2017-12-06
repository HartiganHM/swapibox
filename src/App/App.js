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
    const crawlData = this.fetchHomeworldSpeies;

    this.setState({ crawlData });
  }

  fetchCrawlData () {
    const key = Math.floor(Math.random() * 7 + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${key}/`);
    const jsonData = await fetchedData.json();
    const crawlData = this.cleanCrawlData(jsonData);

    return crawlData;
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
    const jsonData = await fetchedPeople.json();
    const peopleArray = this.fetchHomeworldSpeies(jsonData);

    return peopleArray;
  };

  fetchHomeworldSpeies(peopleData) {
    const unresolvedPromises = peopleData.map(async person => {
      let homeworldFetch = await fetch(person.homeworld);
      let homeworldData = await homeworldFetch.json();

      let speciesFetch = await fetch(person.species);
      let speciesData = await speciesFetch.json();

      return {
        name: person.name,
        data : {
          homeworld: homeworldData.name,
          species: speciesData.name,
          language: speciesData.language,
          population: homeworldData.population
        }
      }
    });

    return Promise.all(unresolvedPromises);
  }

  render() {
    if (this.state.crawlData) {
      return (
        <div className="App">
          <Header crawlData={this.state.crawlData} />
          <DataBox />
        </div>
      );
    }
    return null;
  }
}

export default App;
