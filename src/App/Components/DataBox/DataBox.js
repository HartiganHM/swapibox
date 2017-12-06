import React from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import './DataBox.css';

const DataBox = ({ displayData, selectData }) => {
  const buttonArray = ['People', 'Planets', 'Vehicles'].map(type => (
    <Button type="category button" value={type} selectData={selectData} />
  ));

  return (
    <div className="DataBox">
      <Button type="favorites button" value="View Favorites" />
      <header className="header">SWAPI-Box</header>
      <div className="button-box">{buttonArray}</div>
      <CardContainer category={displayData} />
    </div>
  );
};

export default DataBox;
