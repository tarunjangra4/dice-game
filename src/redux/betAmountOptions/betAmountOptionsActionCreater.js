import axios from "axios";
import {
  GET_BETTING_AMOUNT_OPTIONS,
  UPDATE_SELECTED_BETTING_AMOUNT_OPTION,
  UPDATE_SELECTED_BETTING_OPTION,
} from "./betAmountOptionsActionTypes";

export const getBettingAmounts = () => async (dispatch) => {
  axios
    .get("http://localhost:8080/bettingamount")
    .then((res) => {
      return dispatch({
        type: GET_BETTING_AMOUNT_OPTIONS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateSelecetedBettingAmount = (data) => async (disptach) => {
  return disptach({
    type: UPDATE_SELECTED_BETTING_AMOUNT_OPTION,
    payload: data,
  });
};

export const updateSelecetedBettingOption = (data) => async (disptach) => {
  return disptach({
    type: UPDATE_SELECTED_BETTING_OPTION,
    payload: data,
  });
};
