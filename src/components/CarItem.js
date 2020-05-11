import React from 'react';

const CarItem = (props) => {
    const { title, specs, images, price } = props;
    return (
        <div className="right-column__item">
            <div className="right-column__item__wrapper-image">
                <img className="right-column__images" src={images[0]}  />
                <div className="secondary-images">
                    <div className="secondary-images__wrapper-image">
                       <img className="right-column__images" src={images[1]}  /> 
                    </div>
                    <div className="secondary-images__wrapper-image">
                        <img className="right-column__images" src={images[2]}  />
                    </div>
                    <div className="secondary-images__wrapper-image">
                        <img className="right-column__images" src={images[3]}  />
                    </div>
                </div>
            </div>
            <div className="right-column__item__text-content">
                <div className="text-content1">
                   <p><b>{title}</b></p>
                   <div>
                     <p><span>{specs.engine.capacity} / {specs.engine.type}</span></p>
                     <p>{ specs.transmission }</p>
                     <p>{ specs.body_type}</p>
                   </div>
                   <div>
                    <p>{specs.color}</p>
                   </div>
                </div>
                <div>
                    <p>{ specs.odometer.value } { specs.odometer.unit }</p>
                </div>
                <div>
                    <p>{ specs.year }</p>
                </div>
                <div>
                    <p>{price.converted.BYN.amount} {price.converted.BYN.currency}</p>
                </div>
            </div>

        </div>
    )
}

export default CarItem;

//  {specs.engine.power.value} / {specs.engine.power.unit}
//  {specs.engine.capacity} / {specs.engine.type}
//  {specs.engine.capacity}
//  { specs.transmission }
//  { specs.drivertrain }
//  { specs.body_type}
//  { specs.color}
//  { specs.year }
//  { specs.odometer.value} { specs.odometer.unit}