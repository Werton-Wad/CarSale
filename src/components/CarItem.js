import React from 'react';

const CarItem = (props) => {
    const { title, specs } = props;
    return (
        <div className="right-column__item">
            <div className="right-column__item__wrapper-image">
                {/* <img src={images[0]}  /> */}
                {title}
                {specs.engine.capacity} / {specs.engine.type}
                { specs.transmission }
                { specs.drivertrain }
                { specs.body_type}
                { specs.color}
                { specs.year }
                { specs.odometer.value} { specs.odometer.unit}
            </div>
        </div>
    )
}

export default CarItem;