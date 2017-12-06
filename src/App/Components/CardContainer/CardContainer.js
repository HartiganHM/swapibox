import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = () => {
    return(
        <div className='card-container'>
            <span className='placeholder'>Select a Category</span>
            <Card />
        </div>
    )
}

export default CardContainer;