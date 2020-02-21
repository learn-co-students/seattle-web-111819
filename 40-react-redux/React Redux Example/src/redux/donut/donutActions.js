import {
  BUY_DONUT,
  FETCH_DONUTS_REQUEST,
  FETCH_DONUTS_SUCCESS,
  FETCH_DONUTS_FAILURE
} from "./donutTypes";
import axios from "axios";

export const buyDonut = () => {
  return {
    type: BUY_DONUT
  };
};

export const fetchDonutsRequest = () => {
  return {
    type: FETCH_DONUTS_REQUEST
  };
};

export const fetchDonutsSuccess = donuts => {
  return {
    type: FETCH_DONUTS_SUCCESS,
    payload: donuts
  };
};

export const fetchDonutsError = error => {
  return {
    type: FETCH_DONUTS_FAILURE,
    error: error
  };
};

export const fetchDonuts = () => {
  return dispatch => {
    console.log("douts");
    dispatch(fetchDonutsRequest());
    //axios is needed when not in browser
    axios
      .get("http://localhost:3000/donuts")
      .then(response => {
        const donuts = response.data;
        dispatch(fetchDonutsSuccess(donuts));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchDonutsError(errorMsg));
      });
  };
};
