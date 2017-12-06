import React from 'react';
import './Card.css';

const Card = () => {
    return(
        <div className='Card'>
            <div className='card-header'>
                <span className='card-title'>Luke SkyWalker</span>
                <button className='mark-favorite'>★</button>
            </div>
            <ul className='card-info'>
                <li className='card-data-set'>Homeworld: Tatooine</li>
                <li className='card-data-set'>Species: Human</li>
                <li className='card-data-set'>Language: Galactic Basic</li>
                <li className='card-data-set'>Population: 200,000</li>
            </ul>
        </div>
    )
}

export default Card;