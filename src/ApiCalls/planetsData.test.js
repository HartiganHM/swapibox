import React from 'react';
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
    const planetsData = await fetchPlanets();
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


});
