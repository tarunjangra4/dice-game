import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
