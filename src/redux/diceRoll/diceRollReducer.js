import { GET_DICE_ROLL_RESULTS } from "./diceRollActionTypes";

const initialState = {
  dice1Val: null,
  dice2Val: null,
};

export const diceRollReducer = (state = initialState, action) => {
  const { type: actionType, payload } = action;

  switch (actionType) {
    case GET_DICE_ROLL_RESULTS:
      return {
        ...state,
        dice1Val: payload.dice1,
        dice2Val: payload.dice2,
      };

    default:
      return state;
  }
};
