import React from 'react';
import './Card.css';

const Card = ({ data, currentFavorites, toggleFavorite, removeFavorite, currentDisplay }) => {
  const type = Object.values(currentFavorites).find( card => card === data ) ? 'Card selected-favorite' : 'Card';
  const favorited = Object.values(currentFavorites).find( card => card === data ) ? 'mark-favorite current-favorite' : 'mark-favorite';
  const clickFunction = currentDisplay === 'favorites' ? removeFavorite : toggleFavorite;
  const dataPoints = Object.keys(data.data).map(dataPoint => (
    <li className="card-data-set">
      { dataPoint }: { data.data[dataPoint].length ? data.data[dataPoint] : 0 }
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
