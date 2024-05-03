import axios from "axios";
import { GET_DICE_ROLL_RESULTS } from "./diceRollActionTypes";
import { UPDATE_USER_POINTS } from "../userPoints/userPointsActionTypes";
import { getGameResult } from "../gameResult/resultActionCreater";

export const getDiceRollResult =
  ({ bettingAmount, bettingOption }) =>
  async (dispatch) => {
    const token = localStorage.getItem("token");
    axios
      .get("https://api-dice-game.onrender.com/rolldice", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: GET_DICE_ROLL_RESULTS, payload: res.data });
        return res.data.dice1 + res.data.dice2;
      })
      .then((diceVal) => {
        dispatch(
          getGameResult({
            bettingOption,
            bettingAmount,
            diceValue: diceVal,
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
