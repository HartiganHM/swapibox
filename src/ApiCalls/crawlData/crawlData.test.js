import fetchCrawlData from './crawlData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
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
    expect(typeof crawlData).toEqual('object');
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );

    const expectedError = Error('Failed to fetch crawl data');
    const crawlData = await fetchCrawlData();

    expect(crawlData).toEqual(expectedError);
  });
});
