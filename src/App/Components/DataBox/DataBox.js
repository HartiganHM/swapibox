import React from 'react';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import './DataBox.css';

const DataBox = () => {
    return(
        <div>
            <header>Me some header<Button /></header>
            <div>
                <Button />
                <Button />
                <Button />
            </div>
            <CardContainer />
        </div>
    )
}

export default DataBox;