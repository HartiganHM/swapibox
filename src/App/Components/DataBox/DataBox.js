import React from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import './DataBox.css';

const DataBox = () => {
  return (
    <div className="DataBox">
      <Button value="View Favorites" />
      <header className="header">SWAPI-Box</header>
      <div className="button-box">
        <Button value="People" />
        <Button value="Planets" />
        <Button value="Vehicles" />
      </div>
      <CardContainer />
    </div>
  );
};

export default DataBox;
