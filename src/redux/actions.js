import axios from 'axios';

import config from 'config';

export const actions = {
  getCars: 'GET_CARS',
};


export const getCars = () => {
  return async (dispatch) => {
    try {
      const { data: cars } = await axios(config.apiCars)
      dispatch({ type: actions.getCars, payload: cars});
    } catch (error) {
      console.log(error);
    }
  }
}