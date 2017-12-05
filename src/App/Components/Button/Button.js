import React from 'react';
import './Button.css';

const Button = ({ value }) => {
    return(
        <button>{ value } <span>{ value === 'View Favorites' ? 0 : '' }</span></button>
    )
}

export default Button;