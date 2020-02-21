import {
  BUY_DONUT,
  FETCH_DONUTS_REQUEST,
  FETCH_DONUTS_SUCCESS,
  FETCH_DONUTS_FAILURE
} from "./donutTypes";

const initialState = {
  donutsSold: 0,
  loading: false,
  donuts: {},
  error: ""
};

const donutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DONUTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DONUTS_SUCCESS:
      return {
        ...state,
        loading: false,
        donuts: action.payload,
        error: ""
      };
    case FETCH_DONUTS_FAILURE:
      return {
        ...state,
        loading: false,
        donuts: {},
        error: action.error
      };
    case BUY_DONUT:
      return {
        ...state,
        donutsSold: state.donutsSold + 1
      };
    default:
      return state;
  }
};

export default donutReducer;
