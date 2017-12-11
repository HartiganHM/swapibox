const fetchPeople = async () => {
  try {
    const fetchedPeople = await fetch('https://swapi.co/api/people/');
    const jsonData = await fetchedPeople.json();
    const people = cleanPeopleData(jsonData.results);

    return people;

  } catch (error) {
    return error = new Error('Failed to fetch people data')
  }
};

const cleanPeopleData = people => {
  const unresolvedPromises = people.map(async person => {
    let homeworldFetch = await fetch(person.homeworld);
    let homeworldData = await homeworldFetch.json();

    let speciesFetch = await fetch(person.species);
    let speciesData = await speciesFetch.json();

    return {
      name: person.name,
      list: {
        Homeworld: homeworldData.name,
        Species: speciesData.name,
        Language: speciesData.language,
        Population: homeworldData.population
      }
    };
  });

  return Promise.all(unresolvedPromises);
};

export default fetchPeople;
