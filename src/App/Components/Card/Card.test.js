import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card Tests', () => {
  let renderedCard;
  let mockDisplayData;
  let mockCurrentFavorites;
  let mockSaveFavorites;
  let mockRemoveFavorites;

  beforeEach(() => {
    mockDisplayData = {
      name: 'Luke Skywalker',
      list: {
        Homeworld: 'Tatooine',
        Species: 'Human',
        Language: 'Intergalactic Basic',
        Population: '20000000'
      }
    };
    mockCurrentFavorites = [];
    mockSaveFavorites = jest.fn();
    mockRemoveFavorites = jest.fn();

    renderedCard = shallow(
      <Card
        displayData={mockDisplayData}
        currentFavorites={mockCurrentFavorites}
        saveFavorite={mockSaveFavorites}
        removeFavorite={mockRemoveFavorites}
      />
    );
  });

  it('Should exist', () => {
    expect(renderedCard).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedCard).toMatchSnapshot();
  });

  it('Should have have a list item for each data point', () => {
    expect(renderedCard.find('.card-data-set').length).toEqual(4);
  });

  it('Should have selected-favorite if card exists in favorites', () => {
    mockCurrentFavorites = [mockDisplayData];
    renderedCard = shallow(
      <Card
        displayData={mockDisplayData}
        currentFavorites={mockCurrentFavorites}
        saveFavorite={mockSaveFavorites}
      />
    );

    expect(renderedCard.find('.selected-favorite').length).toEqual(1);
  });

  it('Should have a removeFavorite button if in favorites', () => {
    expect(renderedCard.find('.current-favorite').length).toEqual(0);

    mockCurrentFavorites = [mockDisplayData];
    renderedCard = shallow(
      <Card
        displayData={mockDisplayData}
        currentFavorites={mockCurrentFavorites}
        saveFavorite={mockSaveFavorites}
      />
    );

    expect(renderedCard.find('.current-favorite').length).toEqual(1);
  });

  it('Should show a 0 for any list item with no value', () => {
    mockDisplayData = {
      name: 'Luke Skywalker',
      list: {
        Population: ''
      }
    };
    renderedCard = shallow(
      <Card
        displayData={mockDisplayData}
        currentFavorites={mockCurrentFavorites}
        saveFavorite={mockSaveFavorites}
      />
    );

    expect(renderedCard.find('.card-data-set').text()).toEqual('Population: 0');
  });
});
