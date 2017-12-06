import React from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import './DataBox.css';

const DataBox = ({ peopleData }) => {
  return (
    <div className="DataBox">
      <Button type='favorites button' value="View Favorites" />
      <header className="header">SWAPI-Box</header>
      <div className="button-box">
        <Button type='category button' value="People" />
        <Button type='category button' value="Planets" />
        <Button type='category button' value="Vehicles" />
      </div>
      <CardContainer category={peopleData}/>
    </div>
  );
};

export default DataBox;
