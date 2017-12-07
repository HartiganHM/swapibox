fetchCrawlData = async () => {
    const key = Math.floor(Math.random() * 7 + 1);
    const fetchedData = await fetch(`https://swapi.co/api/films/${key}/`);
    const jsonData = await fetchedData.json();
    const crawlData = this.cleanCrawlData(jsonData);

    return crawlData;
};

cleanCrawlData(data) {
    return Object.assign(
        {},
        {
        episodeNum: data.episode_id,
        episodeTitle: data.title,
        openingCrawl: data.opening_crawl
        }
    );
}

export default fetchCrawlData;