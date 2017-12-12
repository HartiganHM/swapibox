import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  displayData,
  currentFavorites,
  saveFavorite,
  removeFavorite
}) => {
  const type = currentFavorites.find(card =>
    card === displayData)
    ? 'Card selected-favorite'
    : 'Card';

  const favorited =
    type === 'Card' ? 'mark-favorite' : 'mark-favorite current-favorite';

  const clickFunction =
    type === 'Card' ? saveFavorite : removeFavorite;

  const dataPoints = Object.keys(displayData.list).map(dataPoint => (
    <li key={dataPoint} className="card-data-set">
      <span className="data-key">{dataPoint}</span>:{' '}
      {displayData.list[dataPoint].length ? displayData.list[dataPoint] : 0}
    </li>
  ));

  return (
    <div className={type}>
      <div className="card-header">
        <span className="card-title">{displayData.name}</span>
        <div className="button-container">
          <button
            className={favorited}
            onClick={() => clickFunction(displayData)}
          />
        </div>
      </div>
      <ul className="card-info">{dataPoints}</ul>
    </div>
  );
};

Card.propTypes = {
  displayData: PropTypes.object,
  currentFavorites: PropTypes.array,
  saveFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
};

export default Card;
