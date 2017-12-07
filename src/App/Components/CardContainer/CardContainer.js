import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ category }) => {
    const cards = category ? category.map( obj => <Card data={obj}/>) : <span className='placeholder'>Select a category</span>

    return(
        <div className='card-container'>
            {cards}
        </div>
    )
}

export default CardContainer;