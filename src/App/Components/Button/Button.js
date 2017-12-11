import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, value, selectData, currentDisplay, favoriteCount }) => {
  const buttonClass =
    value.toLowerCase() === currentDisplay ? `${type} selected` : type;
  const buttonImageClass = 'category-button-image-' + value.toLowerCase();
  const buttonImage = <div className={buttonImageClass}></div>;
  const counter = <span className='counter'>{favoriteCount}</span>;

  return (
    <button className={buttonClass} onClick={() => selectData(value)}>
      {value}{' '}
      {value === 'View Favorites' ? counter : buttonImage}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  selectData: PropTypes.func,
  currentDisplay: PropTypes.string,
  favoriteCount: PropTypes.number
};

export default Button;
