import axios from "axios";
import { GET_USER_POINTS, UPDATE_USER_POINTS } from "./userPointsActionTypes";

export const getUserPoints = () => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .get("https://api-dice-game.onrender.com/points", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: GET_USER_POINTS, payload: res.data.userPoints });
    })
    .catch((error) => console.error(error));
};

export const updateUserPoints =
  ({ bettingAmount, gameResult, bettingOption }) =>
  (dispatch) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        "https://api-dice-game.onrender.com/points",
        {
          bettingAmount,
          gameResult,
          bettingOption,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch({ type: UPDATE_USER_POINTS, payload: res.data.userPoints });
      })
      .catch((error) => console.error(error));
  };
