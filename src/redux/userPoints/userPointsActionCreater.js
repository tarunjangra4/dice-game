import axios from "axios";
import { GET_USER_POINTS, UPDATE_USER_POINTS } from "./userPointsActionTypes";

export const getUserPoints = () => (dispatch) => {
  axios
    .get("http://localhost:8080/points")
    .then((res) => {
      dispatch({ type: GET_USER_POINTS, payload: res.data.userPoints });
    })
    .catch((error) => console.error(error));
};

export const updateUserPoints =
  ({ bettingAmount, gameResult, bettingOption }) =>
  (dispatch) => {
    axios
      .put("http://localhost:8080/points", {
        bettingAmount,
        gameResult,
        bettingOption,
      })
      .then((res) => {
        dispatch({ type: UPDATE_USER_POINTS, payload: res.data.userPoints });
      })
      .catch((error) => console.error(error));
  };
