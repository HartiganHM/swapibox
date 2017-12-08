import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ category, currentDisplay, currentFavorites, saveFavorite, removeFavorite }) => {
  const cards = category ? (
    category.map(obj => (
      <Card data={obj} currentDisplay={currentDisplay} currentFavorites={currentFavorites} saveFavorite={saveFavorite} removeFavorite={removeFavorite}/>)))
      : '';
    const message = currentDisplay === 'favorites' ? (<span className='placeholder'>No favorites to display</span>) : (<span className='placeholder'>Select a category</span>);

  return <div className='card-container'>
          {cards.length ? cards : message}
        </div>;
};

export default CardContainer;
