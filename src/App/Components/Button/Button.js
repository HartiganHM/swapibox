import React from 'react';
import './Button.css';

const Button = ({ type, value, selectData, currentDisplay }) => {
  const buttonClass = value.toLowerCase() === currentDisplay ? `${type} selected` : type;

  return (
    <button className={buttonClass} onClick={() => selectData(value)}>
      {value}{' '}
      <span className="counter">{value === 'View Favorites' ? 0 : ''}</span>
    </button>
  );
};

export default Button;
