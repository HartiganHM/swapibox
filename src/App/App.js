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
      vehicles: [],
      favorites: [],
    };
  }

  async componentDidMount() {
    const crawlData = await fetchCrawlData();
    this.loadCards();

    this.setState({ crawlData });
  };

  loadCards = async() => {
    const people = await fetchPeople();
    const planets = await fetchPlanets();
    const vehicles = await fetchVehicles();

    this.setState({ people, planets, vehicles });
  }

  selectData = type => {
    if (type === 'View Favorites') {
      type = 'favorites';
    }

    const display = type.toLowerCase();
    this.setState({ display });
  };

  saveFavorite = (selectedCard) => {
    if (Object.values(this.state.favorites).find( card => card === selectedCard)) {
      return;
    }
    const favorites = [...this.state.favorites, selectedCard ]
    this.setState({favorites})
  }

  removeFavorite = (selectedCard) => {
    const favorites = this.state.favorites.filter( (card) => {
      return card.name !== selectedCard.name
    })

    this.setState({favorites})
  }

  render() {
    if (this.state.crawlData) {
      return (
        <div className='App'>
          <Header crawlData={this.state.crawlData} />
          <DataBox
            displayData={this.state[this.state.display]}
            selectData={this.selectData}
            currentDisplay={this.state.display}
            currentFavorites={this.state.favorites}
            saveFavorite={this.saveFavorite}
            removeFavorite={this.removeFavorite}
            favoriteCount={this.state.favorites.length}
          />
        </div>
      );
    }
    return null;
  }
}

export default App;
