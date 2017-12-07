const fetchPlanets = async () => {
    const fetchedPlanets = await fetch('https://swapi.co/api/planets/');
    const jsonPlanets = await fetchedPlanets.json();
    const planets = cleanPlanetsData(jsonPlanets.results);

    return planets;
}

const cleanPlanetsData = (planets) => {
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

export default fetchPlanets;