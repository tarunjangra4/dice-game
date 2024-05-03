import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/user/userActionCreater";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(registerUser({ email, password }));
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-7 bg-blue-100">
      <TextField
        value={email}
        className="w-[75%]"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={password}
        className="w-[75%]"
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        className="w-[75%] h-12"
        variant="outlined"
        onClick={handleSignup}
      >
        Sign Up
      </Button>
      <div className="w-[78%] relative">
        <div className="absolute right-0">
          <Button variant="text">
            <Link to="/">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
