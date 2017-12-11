import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header Tests', () => {
  let renderedHeader;
  let mockCrawlData;

  beforeEach(() => {
    mockCrawlData = {
      episodeNum: 7,
      episodeTitle: 'Star Trek N Stuff',
      openingCrawl: 'Me crawl!'
    };
    renderedHeader = shallow(<Header crawlData={mockCrawlData} />);
  });

  it('Should exist', () => {
    expect(renderedHeader).toBeDefined();
  });

  it('Should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });

  it('Should convert the episode number to a Roman numeral', () => {
    const mockEpisodeNumber = renderedHeader.find('span').first();
    const expectedText = 'Episode VII';

    expect(mockEpisodeNumber.text()).toEqual(expectedText);
  });
});
