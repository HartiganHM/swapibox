import React from 'react';
import './Card.css';

const Card = ({ data, currentFavorites, saveFavorite, removeFavorite, currentDisplay }) => {
  const type = Object.values(currentFavorites).find( card => card === data ) ? 'Card selected-favorite' : 'Card';
  const favorited = type === 'Card' ? 'mark-favorite' : 'mark-favorite current-favorite';
  const clickFunction = currentDisplay === 'favorites' ? removeFavorite : saveFavorite;
  const dataPoints = Object.keys(data.data).map(dataPoint => (
    <li className="card-data-set">
      <span className='data-key'>{ dataPoint }</span>: { data.data[dataPoint].length ? data.data[dataPoint] : 0 }
    </li>
  ));

  return (
    <div className={type}>
      <div className="card-header">
        <span className="card-title">{data.name}</span>
        <div className='button-container'>
            <button
                className={favorited}
                onClick={ () => clickFunction(data) }>
            </button>
        </div>
      </div>
      <ul className="card-info">{dataPoints}</ul>
    </div>
  );
};

export default Card;
