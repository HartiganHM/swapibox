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
  let homeworldFetch = await fetch(homeworld);
  let homeworldData = await homeworldFetch.json();
  return homeworldData;
};

const cleanPeopleData = people => {
  const unresolvedPromises = people.map(async person => {
    let homeworld = await fetchHomeworld(person.homeworld);

    let speciesFetch = await fetch(person.species);
    let speciesData = await speciesFetch.json();

    return {
      name: person.name,
      list: {
        Homeworld: homeworld.name,
        Species: speciesData.name,
        Language: speciesData.language,
        Population: homeworld.population
      }
    };
  });

  return Promise.all(unresolvedPromises);
};

export default fetchPeople;
