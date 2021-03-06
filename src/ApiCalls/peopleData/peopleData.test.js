import fetchPeople from './peopleData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        status: 200,
        results: [
          {
            name: 'Luke Skywalker',
            homeworld: {},
            species: [],
            language: '',
            population: ''
          }
        ]
      })
  })
);

describe('People Data Tests', () => {
  it('Should render correctly', () => {
    expect(fetchPeople).toBeAFunction;
  });

  it('Should be called with the correct parameters', async () => {
    await fetchPeople();
    const fetchApi = 'https://swapi.co/api/people/';

    expect(window.fetch).toHaveBeenCalledWith(fetchApi);
  });

  it('Should return an object when called', async () => {
    const peopleData = await fetchPeople();

    expect(typeof peopleData).toEqual('object');
  });

  it('Should return a cleaned object', async () => {
    const peopleData = await fetchPeople();
    const expectedObject = [
      {
        name: 'Luke Skywalker',
        list: {
          Homeworld: undefined,
          Species: undefined,
          Language: undefined,
          Population: undefined
        }
      }
    ];

    expect(peopleData).toEqual(expectedObject);
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );

    const expectedError = Error('Failed to fetch people data');
    const peopleData = await fetchPeople();

    expect(peopleData).toEqual(expectedError);
  });
});
