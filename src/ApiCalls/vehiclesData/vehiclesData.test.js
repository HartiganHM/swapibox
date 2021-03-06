import fetchVehicles from './vehiclesData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        results: [
          {
            name: 'Sand Crawler',
            model: 'Digger Crawler',
            // eslint-disable-next-line
            vehicle_class: 'wheeled',
            passengers: '30'
          }
        ]
      })
  })
);

describe('Planets Data Tests', () => {
  it('Should render correctly', () => {
    expect(fetchVehicles).toBeAFunction;
  });

  it('Should be called with the correct parameters', async () => {
    await fetchVehicles();
    const fetchApi = 'https://swapi.co/api/vehicles/';

    expect(window.fetch).toHaveBeenCalledWith(fetchApi);
  });

  it('Should return an object when called', async () => {
    const vehiclesData = await fetchVehicles();

    expect(typeof vehiclesData).toEqual('object');
  });

  it('Should return a cleaned object', async () => {
    const vehiclesData = await fetchVehicles();
    const expectedObject = [
      {
        name: 'Sand Crawler',
        list: {
          Model: 'Digger Crawler',
          Class: 'wheeled',
          Passengers: '30'
        }
      }
    ];

    expect(vehiclesData).toEqual(expectedObject);
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );

    const expectedError = Error('Failed to fetch vehicles data');
    const vehiclesData = await fetchVehicles();

    expect(vehiclesData).toEqual(expectedError);
  });
});
