import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Tests', () => {
  let renderedApp;
  let mockCard;

  beforeEach(() => {
    mockCard = {
      name: 'Luke Skywalker',
      list: {
        Homeworld: 'Tatooine',
        Species: 'Human',
        Language: 'Intergalactic Basic',
        Population: '20000000'
      }
    };
    renderedApp = shallow(<App />);
  });

  it('Should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });

  it('Should change display base on category selected', () => {
    renderedApp.instance().selectData('People');
    renderedApp.update();
    expect(renderedApp.state().display).toEqual('people');
  });

  it('Should alter text if View Favorites is selected', () => {
    renderedApp.instance().selectData('View Favorites');
    renderedApp.update();
    expect(renderedApp.state().display).toEqual('favorites');
  });

  it('Should add card to favorites', () => {
    expect(renderedApp.state().favorites.length).toEqual(0);

    renderedApp.instance().saveFavorite(mockCard);
    renderedApp.update();

    expect(renderedApp.state().favorites.length).toEqual(1);
    expect(renderedApp.state().favorites[0]).toEqual(mockCard);
  });

  it('Should not add duplicate cards to favorites', () => {
    expect(renderedApp.state().favorites.length).toEqual(0);

    renderedApp.instance().saveFavorite(mockCard);
    renderedApp.update();

    expect(renderedApp.state().favorites.length).toEqual(1);
    expect(renderedApp.state().favorites[0]).toEqual(mockCard);

    renderedApp.instance().saveFavorite(mockCard);
    renderedApp.update();

    expect(renderedApp.state().favorites.length).toEqual(1);
  });

  it('Should remove a card from favorites', () => {
    const favorites = [mockCard];

    renderedApp.setState({ favorites });
    renderedApp.update();
    expect(renderedApp.state().favorites[0]).toEqual(mockCard);

    renderedApp.instance().removeFavorite(mockCard);
    renderedApp.update();

    expect(renderedApp.state().favorites.length).toEqual(0);
  });
});
