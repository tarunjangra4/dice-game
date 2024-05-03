import { GET_GAME_RESULT_ACTION } from "./resultActionTypes";

const initialState = {
  gameResult: null,
};

export const gameResultReducer = (state = initialState, action) => {
  const { type: actionType, payload } = action;
  console.log("result reducer ", action);

  switch (actionType) {
    case GET_GAME_RESULT_ACTION:
      return { ...state, gameResult: { ...payload } };

    default:
      return state;
  }
};
