import React from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import './DataBox.css';

const DataBox = ({
  displayData,
  selectData,
  currentDisplay,
  toggleFavorite,
  currentFavorites,
  removeFavorite,
  favoriteCount
}) => {
  const buttonArray = ['People', 'Planets', 'Vehicles'].map(type => (
    <Button
      type="category button"
      value={type}
      selectData={selectData}
      currentDisplay={currentDisplay}
    />
  ));

  return (
    <div className="DataBox">
      <Button
        type="favorites button"
        value="View Favorites"
        favoriteCount={favoriteCount}
        selectData={selectData}
      />
      <header className="header">SWAPI-Box</header>
      <div className="button-box">{buttonArray}</div>
      <CardContainer
        category={displayData}
        currentDisplay={currentDisplay}
        currentFavorites={currentFavorites}
        toggleFavorite={toggleFavorite}
        removeFavorite={removeFavorite}
      />
    </div>
  );
};

export default DataBox;
