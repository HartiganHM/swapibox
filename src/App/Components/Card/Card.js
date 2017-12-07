import React from 'react';
import './Card.css';

const Card = ({ data, toggleFavorite, removeFavorite, currentDisplay }) => {
  const clickFunction = currentDisplay === 'favorites' ? removeFavorite : toggleFavorite;
  const dataPoints = Object.keys(data.data).map(dataPoint => (
    <li className="card-data-set">
      {dataPoint}: {data.data[dataPoint].length ? data.data[dataPoint] : 0}
    </li>
  ));

  return (
    <div className="Card">
      <div className="card-header">
        <span className="card-title">{data.name}</span>
        <div className='button-container'>
            <button className="mark-favorite" onClick={() => clickFunction(data)}>
            </button>
        </div>
      </div>
      <ul className="card-info">{dataPoints}</ul>
    </div>
  );
};

export default Card;
