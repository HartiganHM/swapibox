import React from 'react';
import fetchVehicles from './vehiclesData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            name: 'San Crawler',
            model: 'Digger Crawler',
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
    const vehiclesData = await fetchVehicles();
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

    expect(planetsData).toEqual(expectedObject);
  });
});
