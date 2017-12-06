import React from 'react';
import icon from '../../../Images/Icons/death-star.svg';
import './Card.css';

const Card = ({ data }) => {
    return(
        <div className='Card'>
            <div className='card-header'>
                <span className='card-title'>{ data.name }</span>
                <button className='mark-favorite'><img src={icon}/></button>
            </div>
            <ul className='card-info'>
                <li className='card-data-set'>Homeworld: { data.data.homeworld }</li>
                <li className='card-data-set'>Species: { data.data.species }</li>
                <li className='card-data-set'>Language: { data.data.language }</li>
                <li className='card-data-set'>Population: { data.data.population }</li>
            </ul>
        </div>
    )
}

export default Card;