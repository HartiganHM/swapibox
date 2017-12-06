import React from 'react';
import './Button.css';

const Button = ({ type, value }) => {
  return (
    <button className={ type } onClick={ () => displayData(type) }>
      {value}{' '}
      <span className="counter">{value === 'View Favorites' ? 0 : ''}</span>
    </button>
  );
};

export default Button;
