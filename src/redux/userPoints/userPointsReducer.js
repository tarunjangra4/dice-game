import { GET_USER_POINTS, UPDATE_USER_POINTS } from "./userPointsActionTypes";

const initialState = {
  userPoints: 0,
};

export const UserPointsReducer = (state = initialState, action) => {
  const { type: actionType, payload } = action;

  switch (actionType) {
    case GET_USER_POINTS:
      return { ...state, userPoints: payload };

    case UPDATE_USER_POINTS:
      return { ...state, userPoints: payload };

    default:
      return { ...state };
  }
};
