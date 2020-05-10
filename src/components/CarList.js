import React from 'react';

import CarItem from './CarItem';

const CarList = (props) => {
    const { cars } = props;
    return (
        <div className="right-column">
            {cars.map(el => (
                <CarItem key={el.id} {...el} />
            ))}
        </div>
    )
}

export default CarList;