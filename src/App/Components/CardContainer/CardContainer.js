import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({
  category,
  currentDisplay,
  currentFavorites,
  saveFavorite,
  removeFavorite
}) => {
  const cards = category
    ? category.map(card => (
      <Card
        displayData={card}
        currentDisplay={currentDisplay}
        currentFavorites={currentFavorites}
        saveFavorite={saveFavorite}
        removeFavorite={removeFavorite}
        key={card.name}
      />
    ))
    : '';
  const message =
    currentDisplay === 'favorites'
      ? (<span className="placeholder">No favorites to display</span>)
      : (<span className="placeholder">Select a category</span>);

  return <div className="card-container">{cards.length ? cards : message}</div>;
};

CardContainer.propTypes = {
  category: PropTypes.array,
  currentDisplay: PropTypes.string,
  currentFavorites: PropTypes.array,
  saveFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
};

export default CardContainer;
