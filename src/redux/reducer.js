import { actions } from './actions';

const initialState = {
  list: [],
  isListLoaded: false,
  dict: {},
  isDictLoaded: false,
}

export const carSaleReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.getCars:
      return {
        ...state,
        list: action.payload,
        isListLoaded: true,
      };

      case actions.getDict:
        return {
          ...state,
          dict: action.payload,
          isDictLoaded: true,
        };
          
    default:
      return state;
  }
}