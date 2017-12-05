import React from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import './DataBox.css';

const DataBox = () => {
    return(
        <div className='DataBox'>
            <header>ST4R W4RS 4PI<Button value='View Favorites' /></header>
            <div>
                <Button
                    value='People' />
                <Button
                    value='Planets' />
                <Button
                    value='Vehicles' />
            </div>
            <CardContainer />
        </div>
    )
}

export default DataBox;