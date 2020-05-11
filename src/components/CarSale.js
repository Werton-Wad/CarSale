import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';
import './CarSale.css';
import SelectionCar from './SelectionCar';
import CarList from './CarList';
import { getCars, getDict } from '../redux/actions';

import { filterPrice } from './Settings';

const CarSale = (props) => {
    const { cars, isListLoaded, dict, isDictLoaded, carState, manufacturer, carBody, getCars, getDict } = props;
console.log(carState);

    
    useEffect(() => {
        if (!isListLoaded) {
           getCars(); 
        } 
        if (!isDictLoaded) {
            getDict(); 
         } 
    });

    // console.log(filterPrice(1000, 5000, cars));
    

    return (
        <div className="wrapper">
            {isDictLoaded ? <SelectionCar carState={carState} manufacturer={manufacturer} carBody={carBody}/>
            :
            ''}
            
            <CarList cars={cars}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cars: state.carSale.list,
      isListLoaded: state.carSale.isListLoaded,
      dict: state.carSale.dict,
      isDictLoaded: state.carSale.isDictLoaded,
      carState: state.carSale.dict.state,
      manufacturer: state.carSale.dict.manufacturer,
      carBody: state.carSale.dict.body_type,
    };
  }

  

  export default connect(mapStateToProps , { getCars, getDict })(CarSale);
