import React, { useState, useCallback } from 'react';

const SelectionCar = (props) => {
    const { carState, manufacturer, carBody, filterPrice, filterManufacturer, filterBodyType } = props;

    const [searchPrice, setSearchPrice] = useState({from: '', to: ''});

    const handlePriceChange = useCallback(e => {
        const {name, value} = e.target;
        setSearchPrice(({ [name]: Number(value) }), []);
    });

    const handleManufacturerChange = useCallback(e => {
        filterManufacturer(e.target.value);
    }, [filterManufacturer]);

    const handleBodyTypeChange = useCallback(e => {
        filterBodyType(e.target.value);
    }, [filterBodyType]);
    
    return (
        <div className="left-column">
            <span className="left-column__text">Состояние атомобиля</span>
            <select className="custom-select" name="selectedState">
                <option selected>Любое</option>
                {carState.map(el => (
                    <option key={el.id} value={el.name}>{el.name}</option>
                ))}
            </select>
            <span className="left-column__text">Цена, BYN</span> <br/> 
            <input type="number" name="from" className="form-control" placeholder="от" onChange={handlePriceChange} onBlur={() => filterPrice(searchPrice.from, searchPrice.to)   } />
            <input type="number" name="to" className="form-control" placeholder="до" onChange={handlePriceChange} onBlur={() => filterPrice(searchPrice.from, searchPrice.to)}/>

            <span className="left-column__text">Марка</span>
            <select className="custom-select" name="selectedState" onChange={handleManufacturerChange}>
                {manufacturer.map(el => (
                    <option key={el.id} value={el.slug}>{el.name}</option>
                ))}
            </select>

            <span className="left-column__text">Тип кузова</span>
            <select className="custom-select" name="selectedState" onChange={handleBodyTypeChange}>
                <option selected>Любой</option>
                {carBody.map(el => (
                    <option key={el.id} value={el.id}>{el.name}</option>
                ))}
            </select>

            <span className="left-column__text">Коробка передач</span>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" for="customCheck1">Автоматическая</label> <br/>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                <label className="custom-control-label" for="customCheck2">Механическая</label> <br/>
            </div>

            <span className="left-column__text">Привод</span>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                <label className="custom-control-label" for="customCheck3">Передний</label> <br/>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                <label className="custom-control-label" for="customCheck4">Задний</label> <br/>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                <label className="custom-control-label" for="customCheck5">Полный</label> <br/>
            </div>

            <span className="left-column__text">Пробег</span> <br/>
            <input type="text" className="form-control" placeholder="от"/>
            <input type="text" className="form-control" placeholder="до" />           
        </div>
    )
}

export default SelectionCar;