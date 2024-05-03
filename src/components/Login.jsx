import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/user/userActionCreater";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-7 bg-blue-100">
      <TextField
        className="w-[75%]"
        value={email}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="w-[75%]"
        value={password}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="w-[75%] h-12" variant="outlined" onClick={handleLogin}>
        Login
      </Button>
      <div className="w-[78%] relative">
        <div className="absolute right-0">
          <Button variant="text">
            <Link to="/register">Sing Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
