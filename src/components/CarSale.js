import React from 'react';

import './CarSale.css';
import SelectionCar from './SelectionCar';
import CarList from './CarList';

const CarSale = () => {

    return (
        <div className="wrapper">
            <SelectionCar />
            <CarList />
        </div>
    )
}

export default CarSale;