import React from 'react';
import fetchPeople from './peopleData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
            {
                name: 'Luke Skywalker',
                    list: {
                        Homeworld: 'Tatooine',
                        Species: 'Human',
                        Language: 'Galactic Basic',
                        Population: '200000'
                    }
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
    const peopleData = await fetchPeople();
    const fetchApi = 'https://swapi.co/api/people/';

    expect(window.fetch).toHaveBeenCalledWith(fetchApi)
  });

  it('Should return an object when called', async () => {
      const peopleData = await fetchPeople();

      expect(typeof peopleData).toEqual('object');
  });

  it('Should return a cleaned object' , async () => {
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
    ]

      expect(peopleData).toEqual(expectedObject);
  });
});
