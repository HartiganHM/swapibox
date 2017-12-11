import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer Tests', () => {
  let renderedCardContainer;
  let mockCategory;
  let mockCurrentDisplay;
  let mockCurrentFavorites;
  let mockSaveFavorites;
  let mockRemoveFavorites;

  beforeEach(() => {
    mockCategory = [];
    mockCurrentDisplay = null;
    mockCurrentFavorites = [];
    mockSaveFavorites = jest.fn();
    mockRemoveFavorites = jest.fn();

    renderedCardContainer = shallow(
      <CardContainer
        category={mockCategory}
        currentDisplay={mockCurrentDisplay}
        currentFavorites={mockCurrentFavorites}
        saveFavorite={mockSaveFavorites}
        removeFavorite={mockRemoveFavorites}
      />
    );
  });

  it('Should exist', () => {
    expect(renderedCardContainer).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should render Cards for each object in the category', () => {
    expect(renderedCardContainer.find('Card').length).toEqual(0);

    mockCategory = [{ name: 1 }, { name: 2 }, { name: 3 }];
    renderedCardContainer = shallow(<CardContainer category={mockCategory} />);

    expect(renderedCardContainer.find('Card').length).toEqual(3);
  });

  it('Should change message if the currentDisplay is favorites', () => {
      expect(renderedCardContainer.find('.placeholder').text()).toEqual('Select a category');

      mockCurrentDisplay = 'favorites';
      renderedCardContainer = shallow(<CardContainer currentDisplay={mockCurrentDisplay} />);

      expect(renderedCardContainer.find('.placeholder').text()).toEqual('No favorites to display');
  });

  it('Should not display a placeholder message if there are cards to display', () => {
      expect(renderedCardContainer.find('.placeholder').length).toEqual(1);

      mockCategory = [{ name: 1 }, { name: 2 }, { name: 3 }];
      renderedCardContainer = shallow(<CardContainer category={mockCategory} />);

      expect(renderedCardContainer.find('.placeholder').length).toEqual(0);
  });
});
