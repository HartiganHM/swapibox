import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ category, currentDisplay, toggleFavorite, removeFavorite }) => {
  const cards = category ? (
    category.map(obj => (
      <Card data={obj} currentDisplay={currentDisplay} toggleFavorite={toggleFavorite} removeFavorite={removeFavorite}/>)))
      : (<span className="placeholder">Select a category</span>);

  return <div className="card-container">{cards}</div>;
};

export default CardContainer;
