import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from "./userActionsTypes";

const initialState = {
  loggedInUser: "",
  userCreated: "",
  token: null,
};

export const userReducer = (state = initialState, action) => {
  const { type: actionType, payload } = action;

  switch (actionType) {
    case CREATE_USER:
      return { ...state, userCreated: payload };

    case LOGIN_USER:
      return { ...state, token: payload };

    case LOGOUT_USER:
      return { ...state, token: payload };

    default:
      return state;
  }
};
