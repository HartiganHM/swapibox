const fetchPeople = async () => {
    const fetchedPeople = await fetch('https://swapi.co/api/people/');
    const jsonData = await fetchedPeople.json();
    const people = cleanPeopleData(jsonData.results);

    return people;
};

const cleanPeopleData = (people) => {
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

  export default fetchPeople;