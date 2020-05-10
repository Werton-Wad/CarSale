import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './CarSale.css';
import SelectionCar from './SelectionCar';
import CarList from './CarList';
import { getCars, getDict } from '../redux/actions';

const CarSale = (props) => {
    const { cars, isListLoaded, dict, isDictLoaded, getCars, getDict } = props;
    
    useEffect(() => {
        if (!isListLoaded) {
           getCars(); 
        } 
        if (!isDictLoaded) {
            getDict(); 
         } 
    });

    return (
        <div className="wrapper">
            <SelectionCar />
            <CarList />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cars: state.carSale.list,
      isListLoaded: state.carSale.isListLoaded,
      dict: state.carSale.dict,
      isDictLoaded: state.carSale.isDictLoaded,
    };
  }

  

  export default connect(mapStateToProps , { getCars, getDict })(CarSale);
