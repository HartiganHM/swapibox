import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ category }) => {
    const cards = category.map( obj => <Card data={obj}/>);

    return(
        <div className='card-container'>
            {cards}
        </div>
    )
}

export default CardContainer;