import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';
import './CarSale.css';
import SelectionCar from './SelectionCar';
import CarList from './CarList';
import { getCars, getDict } from '../redux/actions';

// import { filterPrice } from './Settings';

const CarSale = (props) => {
    const { cars, isListLoaded, dict, isDictLoaded, carState, manufacturer, carBody, getCars, getDict } = props;
    const [currentCars, setCurrentCars] = useState(cars);
    console.log(currentCars);



    useEffect(() => {
        if (!isListLoaded) {
            getCars();
        }
        if (!isDictLoaded) {
            getDict();
        }
    });

    const filterPrice = (from=0, to=Infinity) => {
        const finedCars = cars.filter(el => {
          if (Number(el.price.converted.BYN.amount) >= from && Number(el.price.converted.BYN.amount) <= to) return el;
        });
        setCurrentCars(finedCars);
    }
    
    const filterManufacturer = (value) => {
        const finedCars = cars.filter(el => {
            if (el.manufacturer.slug.toLowerCase() === value.toLowerCase()) return el;
        }); 
        setCurrentCars(finedCars);
    }

    const filterBodyType = (value) => {
        const finedCars = cars.filter(el => {
            if (el.specs.body_type.toLowerCase() === value.toLowerCase()) return el;
        }); 
        setCurrentCars(finedCars);
    }
    return (
        <div className="wrapper">
            {isDictLoaded ? <SelectionCar
                carState={carState}
                manufacturer={manufacturer}
                carBody={carBody}
                filterPrice={filterPrice}
                filterManufacturer={filterManufacturer}
                filterBodyType={filterBodyType}
            />
                :
                ''}

            <CarList cars={currentCars.length === 0 ? cars : currentCars} />
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
