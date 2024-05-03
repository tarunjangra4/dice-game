import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { UserPointsReducer } from "./userPoints/userPointsReducer";
import { bettingAmountOptionsReducer } from "./betAmountOptions/betAmountOptionsReducer";
import { diceRollReducer } from "./diceRoll/diceRollReducer";
import { gameResultReducer } from "./gameResult/resultReducer";
import { userReducer } from "./user/userReducer";

const reducer = combineReducers({
  userPoints: UserPointsReducer,
  bettingAmount: bettingAmountOptionsReducer,
  diceRoll: diceRollReducer,
  result: gameResultReducer,
  user: userReducer,
});

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
