import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ category, toggleFavorite }) => {
  const cards = category ? (
    category.map(obj => <Card data={obj} toggleFavorite={toggleFavorite} />)
  ) : (
    <span className="placeholder">Select a category</span>
  );

  return <div className="card-container">{cards}</div>;
};

export default CardContainer;
