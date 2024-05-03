import {
  GET_BETTING_AMOUNT_OPTIONS,
  GET_SELECTED_BETTING_AMOUNT_OPTION,
  UPDATE_SELECTED_BETTING_AMOUNT_OPTION,
  UPDATE_SELECTED_BETTING_OPTION,
} from "./betAmountOptionsActionTypes";

const initialState = {
  bettingAmountOptions: {},
  selectedBettingAmountOption: null,
  selectedBettingOption: null,
};

export const bettingAmountOptionsReducer = (state = initialState, action) => {
  const { type: actionType, payload } = action;

  switch (actionType) {
    case GET_BETTING_AMOUNT_OPTIONS:
      return { ...state, bettingAmountOptions: payload };

    // case GET_SELECTED_BETTING_AMOUNT_OPTION:
    //   return { ...state, selectedBettingOption: payload };

    case UPDATE_SELECTED_BETTING_AMOUNT_OPTION:
      return { ...state, selectedBettingAmountOption: payload };

    case UPDATE_SELECTED_BETTING_OPTION:
      return { ...state, selectedBettingOption: payload };

    default:
      return state;
  }
};
