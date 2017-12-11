const fetchPeople = async () => {
  try {
    const fetchedPeople = await fetch('https://swapi.co/api/people/');
    const jsonData = await fetchedPeople.json();
    const people = cleanPeopleData(jsonData.results);

    return people;
  } catch (error) {
    return new Error('Failed to fetch people data');
  }
};

const fetchHomeworld = async homeworld => {
  const homeworldFetch = await fetch(homeworld);
  const homeworldData = await homeworldFetch.json();
  return homeworldData;
};

const fetchSpecies = async species => {
  const speciesFetch = await fetch(species);
  const speciesData = await speciesFetch.json();
  return speciesData;
};

const cleanPeopleData = people => {
  const unresolvedPromises = people.map(async person => {
    let homeworld = await fetchHomeworld(person.homeworld);
    let species = await fetchSpecies(person.species);

    return {
      name: person.name,
      list: {
        Homeworld: homeworld.name,
        Species: species.name,
        Language: species.language,
        Population: homeworld.population
      }
    };
  });

  return Promise.all(unresolvedPromises);
};

export default fetchPeople;
