import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button Tests', () => {
  let renderedButton;
  let mockType;
  let mockValue;
  let mockSelectData;
  let mockCurrentDisplay;

  beforeEach(() => {
    mockType = 'category button';
    mockValue = 'People';
    mockSelectData = jest.fn();
    mockCurrentDisplay = '';

    renderedButton = shallow(
      <Button
        type={mockType}
        value={mockValue}
        selectData={mockSelectData}
        currentDisplay={mockCurrentDisplay}
      />
    );
  });

  it('Should exist', () => {
    expect(renderedButton).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedButton).toMatchSnapshot();
  });

  it('Should have a matching image based on the incoming value', () => {
    expect(renderedButton.find('.category-button-image-people').length)
    .toEqual(1);

    mockValue = 'Vehicles';
    renderedButton = shallow(<Button value={mockValue} />);

    expect(
      renderedButton.find('.category-button-image-vehicles').length)
      .toEqual(1);
  });

  it('Should have a counter if the incoming value is View Favorites', () => {
    mockValue = 'View Favorites';
    renderedButton = shallow(<Button value={mockValue} />);

    expect(renderedButton.find('.counter').length).toEqual(1);
  });

  it('selectData should send the value up when clicked', () => {
    renderedButton.simulate('click');
    expect(mockSelectData).toHaveBeenCalledWith(mockValue);
  });
});
