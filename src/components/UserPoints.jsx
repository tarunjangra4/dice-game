import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import coinIcon from "../assets/cointIcon.webp";
import { getUserPoints } from "../redux/userPoints/userPointsActionCreater";

const UserPoints = () => {
  const { userPoints } = useSelector((store) => store.userPoints);
  const { selectedBettingAmountOption } = useSelector(
    (store) => store.bettingAmount
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPoints());
  }, [dispatch, userPoints]);

  return (
    <div className="w-[100%] h-24">
      <div
        title="Points"
        className="absolute right-5 top-16 flex items-center justify-center gap-2 px-3 py-1 bg-white"
      >
        <img className="w-5 h-5" src={coinIcon} alt="" />
        <p className=" text-black">
          {/* {userPoints - selectedBettingAmountOption} */}
          {userPoints}
        </p>
      </div>
    </div>
  );
};

export default UserPoints;
