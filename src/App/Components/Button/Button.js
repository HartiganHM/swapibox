import React from 'react';
import './Button.css';

const Button = ({ type, value, selectData }) => {
  return (
    <button className={ type } onClick={ () => selectData(value) }>
      {value}{' '}
      <span className="counter">{value === 'View Favorites' ? 0 : ''}</span>
    </button>
  );
};

export default Button;
