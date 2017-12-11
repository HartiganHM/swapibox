import fetchPlanets from './planetsData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        results: [
          {
            name: 'Tatooine',
            terrain: 'desert',
            population: '200000',
            climate: 'arid',
            residents: []
          }
        ]
      })
  })
);

describe('Planets Data Tests', () => {
  it('Should render correctly', () => {
    expect(fetchPlanets).toBeAFunction;
  });

  it('Should be called with the correct parameters', async () => {
    await fetchPlanets();
    const fetchApi = 'https://swapi.co/api/planets/';

    expect(window.fetch).toHaveBeenCalledWith(fetchApi);
  });

  it('Should return an object when called', async () => {
    const planetsData = await fetchPlanets();

    expect(typeof planetsData).toEqual('object');
  });

  it('Should return a cleaned object', async () => {
    const planetsData = await fetchPlanets();
    const expectedObject = [
      {
        name: 'Tatooine',
        list: {
          Terrain: 'desert',
          Population: '200000',
          Climate: 'arid',
          Residents: ''
        }
      }
    ];

    expect(planetsData).toEqual(expectedObject);
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );

    const expectedError = Error('Failed to fetch planets data');
    const planetsData = await fetchPlanets();

    expect(planetsData).toEqual(expectedError);
  });
});
