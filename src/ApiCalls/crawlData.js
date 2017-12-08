const fetchCrawlData = async () => {
  const key = Math.floor(Math.random() * 7 + 1);
  const fetchedData = await fetch(`https://swapi.co/api/films/${key}/`);
  const jsonData = await fetchedData.json();
  const crawlData = cleanCrawlData(jsonData);

  return crawlData;
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
