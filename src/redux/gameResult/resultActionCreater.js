import axios from "axios";
import { GET_GAME_RESULT_ACTION } from "./resultActionTypes";
import { updateUserPoints } from "../userPoints/userPointsActionCreater";

export const getGameResult =
  ({ bettingOption, bettingAmount, diceValue }) =>
  async (dispatch) => {
    axios
      .post("http://localhost:8080/result", {
        bettingOption,
        bettingAmount,
        diceValue,
      })
      .then((res) => {
        dispatch({
          type: GET_GAME_RESULT_ACTION,
          payload: res.data.result,
        });
        return res.data.result;
      })
      .then((res) => {
        dispatch(
          updateUserPoints({
            bettingAmount,
            gameResult: res.result,
            bettingOption,
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

export const removeGameResult = () => async (dispatch) => {
  console.log("removeGameResult action creater");
  return dispatch({
    type: GET_GAME_RESULT_ACTION,
    payload: null,
  });
};
