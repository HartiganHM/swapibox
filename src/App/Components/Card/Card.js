import React from 'react';
import icon from '../../../Images/Icons/death-star.svg';
import './Card.css';

const Card = ({ data, toggleFavorite }) => {
  const dataPoints = Object.keys(data.data).map(dataPoint => (
    <li className="card-data-set">
      {dataPoint}: {data.data[dataPoint]}
    </li>
  ));

  return (
    <div className="Card">
      <div className="card-header">
        <span className="card-title">{data.name}</span>
        <div className='button-container'>
            <button className="mark-favorite" onClick={() => toggleFavorite(data.name)}>
            </button>
        </div>
      </div>
      <ul className="card-info">{dataPoints}</ul>
    </div>
  );
};

export default Card;
