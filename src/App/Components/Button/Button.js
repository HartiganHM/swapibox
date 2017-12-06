import React from 'react';
import './Button.css';

const Button = ({ type, value, displayData }) => {
  return (
    <button className={ type } onClick={ () => displayData(value) }>
      {value}{' '}
      <span className="counter">{value === 'View Favorites' ? 0 : ''}</span>
    </button>
  );
};

export default Button;
