import React, { useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../redux/user/userActionCreater";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="relative bg-blue-100 px-5 py-2 text-sm">
      <div>
        <AccountCircleIcon
          fontSize="large"
          className="absolute right-5"
          onClick={() => setShowPopup((prev) => !prev)}
        />
      </div>

      {showPopup && (
        <div
          className="absolute right-5 top-10 bg-white px-3 py-1 shadow-md z-10"
          onClick={() => {
            localStorage.removeItem("token");
            dispatch(logout());
          }}
        >
          Logout
        </div>
      )}
    </div>
  );
};

export default Header;
