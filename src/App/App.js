import React, { Component } from 'react';
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
    const crawlData = await this.fetchCrawlData();
    const people = await this.fetchPeople();
    const planets = await this.fetchPlanets();
    const vehicles = await this.fetchVehiclesData();

    this.setState({ crawlData, people, planets, vehicles });
  }

  fetchCrawlData = async () => {
    const key = Math.floor(Math.random() * 7 + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${key}/`);
    const jsonData = await fetchedData.json();
    const crawlData = this.cleanCrawlData(jsonData);

    return crawlData;
  };

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
    const people = this.cleanPeopleData(jsonData.results);

    return people;
  };

  cleanPeopleData(people) {
    const unresolvedPromises = people.map(async person => {
      let homeworldFetch = await fetch(person.homeworld);
      let homeworldData = await homeworldFetch.json();

      let speciesFetch = await fetch(person.species);
      let speciesData = await speciesFetch.json();

      return {
        name: person.name,
        data: {
          homeworld: homeworldData.name,
          species: speciesData.name,
          language: speciesData.language,
          population: homeworldData.population
        }
      };
    });

    return Promise.all(unresolvedPromises);
  }

  fetchPlanets = async () => {
    const fetchedPlanets = await fetch('https://swapi.co/api/planets/');
    const jsonPlanets = await fetchedPlanets.json();
    const planets = this.cleanPlanetsData(jsonPlanets.results);

    return planets;
  }

  cleanPlanetsData = (planets) => {
    const unresolvedPromises = planets.map(async planet => {
      let residents = planet.residents.map(async resident => {
        let fetchedResident = await fetch(resident);
        let jsonResident = await fetchedResident.json();

        return jsonResident.name;
      });

      return {
        name: planet.name,
        data: {
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: await Promise.all(residents)
        }
      };
    });

    return Promise.all(unresolvedPromises);
  };

  fetchVehiclesData = async() => {
    const fetchedVehicles = await fetch('https://swapi.co/api/vehicles/');
    const jsonVehicles = await fetchedVehicles.json();
    const vehicles = this.cleanVehicleData(jsonVehicles.results);

    return vehicles;
  };

  cleanVehicleData = (vehicles) => {
    const unresolvedPromises = vehicles.map( vehicle => {
      return {
        name: vehicle.name,
        data: {
          model: vehicle.model,
          class: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      }
    })

    return Promise.all(unresolvedPromises);
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
