import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ crawlData }) => {
  const romanNumeral = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
  };

  return (
    <div className="Header">
      <div className="crawl">
        <div className="title">
          <span>Episode {romanNumeral[crawlData.episodeNum]}</span>
          <span>{crawlData.episodeTitle}</span>
        </div>
        <p>{crawlData.openingCrawl}</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  crawlData: PropTypes.object
};

export default Header;
