import axios from "axios";
import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from "./userActionsTypes";

export const registerUser =
  ({ email, password }) =>
  async (dispatch) => {
    axios
      .post(
        "http://localhost:8080/user",
        {},
        {
          headers: {
            Authorization: btoa(email + "$" + password),
          },
        }
      )
      .then((res) => {
        dispatch({ type: CREATE_USER, payload: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

export const loginUser = (data) => async (dispatch) => {
  const { email = "", password = "" } = data;
  axios
    .post(
      "http://localhost:8080/user/login",
      {},
      {
        headers: {
          Authorization: btoa(email + "$" + password),
        },
      }
    )
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_USER, payload: res.data.token });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER, payload: null });
};
