import React from 'react';
import fetchCrawlData from './crawlData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        episodeNum: 7,
        episodeTitle: 'Star Trek N Stuff',
        openingCrawl: 'Me crawl!'
      })
  })
);

describe('Crawl Data Tests', () => {
  it('Should render correctly', () => {
    expect(fetchCrawlData).toBeAFunction;
  });

  it('Should return an object when called', async () => {
      const crawlData = await fetchCrawlData();
      console.log(crawlData)

      expect(typeof crawlData).toEqual('object');
  })
});
