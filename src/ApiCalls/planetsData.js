const fetchPlanets = async () => {
  const fetchedPlanets = await fetch('https://swapi.co/api/planets/');
  const jsonPlanets = await fetchedPlanets.json();
  const planets = cleanPlanetsData(jsonPlanets.results);

  return planets;
};

const cleanPlanetsData = planets => {
  const unresolvedPromises = planets.map(async planet => {
    return {
      name: planet.name,
      data: {
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: await fetchResidents(planet.residents)
      }
    };
  });

  return Promise.all(unresolvedPromises);
};

const fetchResidents = residents => {
  const unresolvedPromises = residents.map(async resident => {
    let fetchedResident = await fetch(resident);
    let jsonResident = await fetchedResident.json();

    return jsonResident.name;
  });

  return Promise.all(residents);
};

export default fetchPlanets;
