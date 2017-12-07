import React from 'react';
import './Button.css';

const Button = ({ type, value, selectData, currentDisplay, favoriteCount }) => {
  const buttonClass = value.toLowerCase() === currentDisplay ? `${type} selected` : type;

  return (
    <button className={buttonClass} onClick={() => selectData(value)}>
      {value}{' '}
      <span className="counter">{value === 'View Favorites' ? `${favoriteCount}` : ''}</span>
    </button>
  );
};

export default Button;
