import React from 'react';
import DataBox from './DataBox';
import { shallow } from 'enzyme';

describe('DataBox Tests', () => {
  let renderedDataBox;
  let mockDisplayData;
  let mockSelectData;
  let mockCurrentDisplay;
  let mockCurrentFavorites;
  let mockSaveFavorite;
  let mockRemoveFavorite;

  beforeEach(() => {
    mockDisplayData = [];
    mockSelectData = jest.fn();
    mockCurrentDisplay = null;
    mockCurrentFavorites = [];
    mockSaveFavorite = jest.fn();
    mockRemoveFavorite = jest.fn();

    renderedDataBox = shallow(
      <DataBox
        displayData={mockDisplayData}
        selectData={mockSelectData}
        currentDisplay={mockCurrentDisplay}
        currentFavorites={mockCurrentFavorites}
        saveFavorite={mockSaveFavorite}
        removeFavorite={mockRemoveFavorite}
      />
    );
  });

  it('Should exist', () => {
    expect(renderedDataBox).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedDataBox).toMatchSnapshot();
  });

  it('Should have four Button components', () => {
    expect(renderedDataBox.find('Button').length).toEqual(4);
  });
});
