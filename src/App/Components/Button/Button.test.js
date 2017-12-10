import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button Tests', () => {
  let renderedButton;

  beforeEach(() => {
    renderedButton = shallow(
      <Button
        type="category button"
        value="People"
        selectData={jest.fn()}
        currentDisplay="People"
      />
    );
  });

  it('Search should exist', () => {
    expect(renderedButton).toBeDefined();
  });

  it('Search should match the snapshot', () => {
    expect(renderedButton).toMatchSnapshot();
  });

  it('Should have a matching image based on the incoming value', () => {
      expect(renderedButton.find('.category-button-image-people').length).toEqual(1);
  });

  it('Should have a counter if the incoming value is View Facorites', () => {
    renderedButton = shallow(
        <Button
          type="favorites button"
          value="View Favorites"
          selectData={jest.fn()}
          currentDisplay="People"
        />)
    expect(renderedButton.find('.counter').length).toEqual(1)
  });

  it('selectData should send the value up when clicked', () => {
      renderedButton.simulate('click')
      expect(renderedButton.selectData()).toHaveBeenCalledWith(renderedButton.value)
  })
});
