import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, value, selectData, currentDisplay, favoriteCount }) => {
  const buttonClass =
    value.toLowerCase() === currentDisplay ? `${type} selected` : type;
  const buttonImageSrc = '../../../Images/Icons/' + value.toLowerCase() + '.svg'
  const buttonImage = <img className='category-button-image' src={buttonImageSrc} />;

  return (
    <button className={buttonClass} onClick={() => selectData(value)}>
      {value}{' '}
      <span className='counter'>
        {value === 'View Favorites' ? `${favoriteCount}` : buttonImage}
      </span>
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
