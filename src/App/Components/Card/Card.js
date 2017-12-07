import React from 'react';
import icon from '../../../Images/Icons/death-star.svg';
import './Card.css';

const Card = ({ data }) => {
  const dataPoints = Object.keys(data.data).map(dataPoint => (
    <li className="card-data-set">
      {dataPoint}: {data.data[dataPoint]}
    </li>
  ));

  return (
    <div className="Card">
      <div className="card-header">
        <span className="card-title">{data.name}</span>
        <button className="mark-favorite">
          <img src={icon} alt="death-star-favorite-icon" />
        </button>
      </div>
      <ul className="card-info">{dataPoints}</ul>
    </div>
  );
};

export default Card;
