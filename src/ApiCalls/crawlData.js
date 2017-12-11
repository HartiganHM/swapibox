const fetchCrawlData = async () => {
  try {
    const key = Math.floor(Math.random() * 7 + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${key}/`);
    const jsonData = await fetchedData.json();
    const crawlData = cleanCrawlData(jsonData);

    return crawlData;
  } catch (error) {
    return error = new Error('Failed to fetch crawl data')
  }
};

const cleanCrawlData = neededData => {
  return Object.assign(
    {},
    {
      episodeNum: neededData.episode_id,
      episodeTitle: neededData.title,
      openingCrawl: neededData.opening_crawl
    }
  );
};

export default fetchCrawlData;
