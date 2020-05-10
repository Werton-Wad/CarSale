import axios from 'axios';

import config from 'config';

export const actions = {
  getCars: 'GET_CARS',
  getDict: 'GET_DICTINARY'
};


export const getCars = () => {
    return async (dispatch) => {
        try {
            const { data: cars } = await axios(config.apiCars)
            dispatch({ type: actions.getCars, payload: cars });
        } catch (error) {
            console.log(error);
        }
    }
}
export const getDict= () => {
    return async (dispatch) => {
        try {
            const { data: dict } = await axios(config.apiDict)
            dispatch({ type: actions.getDict, payload: dict });
        } catch (error) {
            console.log(error);
        }
    }
}