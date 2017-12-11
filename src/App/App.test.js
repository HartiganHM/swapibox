import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(
      <App />
    );
  });

  it('Should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });
});
