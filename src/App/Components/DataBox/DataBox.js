import React from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import PropTypes from 'prop-types';
import './DataBox.css';

const DataBox = ({
  displayData,
  selectData,
  currentDisplay,
  saveFavorite,
  currentFavorites,
  removeFavorite,
  favoriteCount
}) => {
  const buttonArray = ['People', 'Planets', 'Vehicles'].map(type => (
    <Button
      key={type}
      type='category button'
      value={type}
      selectData={selectData}
      currentDisplay={currentDisplay}
    />
  ));

  return (
    <div className='DataBox'>
      <Button
        type='favorites button'
        value='View Favorites'
        favoriteCount={favoriteCount}
        selectData={selectData}
      />
      <header className='header'>SWAPI-Box</header>
      <div className='button-box'>{buttonArray}</div>
      <CardContainer
        category={displayData}
        currentDisplay={currentDisplay}
        currentFavorites={currentFavorites}
        saveFavorite={saveFavorite}
        removeFavorite={removeFavorite}
      />
    </div>
  );
};

DataBox.propTypes = {
  displayData: PropTypes.array,
  selectData: PropTypes.func,
  currentDisplay: PropTypes.string,
  saveFavorite: PropTypes.func,
  currentFavorites: PropTypes.array,
  removeFavorite: PropTypes.func,
  favoriteCount: PropTypes.number
};

export default DataBox;
