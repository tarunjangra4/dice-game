import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBettingAmounts,
  updateSelecetedBettingAmount,
  updateSelecetedBettingOption,
} from "../redux/betAmountOptions/betAmountOptionsActionCreater";
import { useState } from "react";
import Dice from "./Dice";
import Result from "./Result";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { removeGameResult } from "../redux/gameResult/resultActionCreater";

const bettingOptions = ["7 Up", "7 Down", "Lucky 7"];

const GameBoard = () => {
  // const [bettingOption, setBettingOption] = useState(null);
  const {
    bettingAmountOptions,
    selectedBettingAmountOption,
    selectedBettingOption,
  } = useSelector((store) => store.bettingAmount);
  const { userPoints } = useSelector((store) => store.userPoints);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBettingAmounts());
  }, [dispatch]);

  const handleAmountSelect = (e) => {
    dispatch(updateSelecetedBettingAmount(e.target.value));
    dispatch(removeGameResult());
  };

  const handleOptionSelect = (val) => {
    dispatch(updateSelecetedBettingOption(val));
  };

  return (
    <>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select Betting Amount
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedBettingAmountOption}
            label="Select Betting Amount"
            onChange={handleAmountSelect}
          >
            {Object.values(bettingAmountOptions)?.map((bettingAmount) => {
              if (userPoints >= bettingAmount) {
                return (
                  <MenuItem key={bettingAmount} value={bettingAmount}>
                    {bettingAmount}
                  </MenuItem>
                );
              } else {
                return null;
              }
            })}
          </Select>
        </FormControl>
      </div>
      <div className="mt-10 text-gray-500">
        <p>Select One Option</p>
        <div className="flex items-center gap-10 justify-center mt-2">
          <p
            className={`flex items-center justify-center text-center w-24 h-24 rounded-full border-2 border-solid border-green-500 text-green-500 text-5xl ${
              selectedBettingOption === "Lucky 7" && "bg-green-50"
            }`}
            onClick={() => handleOptionSelect(bettingOptions[2])}
          >
            7
          </p>
          <div className="h-24 flex flex-col justify-between">
            <p
              className={`flex items-center justify-center text-center w-28 h-11 border-2 border-solid border-yellow-400 rounded-sm text-yellow-400 text-xl font-semibold ${
                selectedBettingOption === "7 Up" && "bg-yellow-50"
              }`}
              onClick={() => handleOptionSelect(bettingOptions[0])}
            >
              7 UP
            </p>
            <p
              className={`flex items-center justify-center text-center w-28 h-11 border-2 border-solid border-red-400 rounded-sm text-red-400 text-xl font-semibold ${
                selectedBettingOption === "7 Down" && "bg-red-50"
              }`}
              onClick={() => handleOptionSelect(bettingOptions[1])}
            >
              7 DOWN
            </p>
          </div>
        </div>
      </div>
      <Dice
        selectedBettingAmountOption={selectedBettingAmountOption}
        selectedBettingOption={selectedBettingOption}
      />
      <Result
        selectedBettingAmountOption={selectedBettingAmountOption}
        selectedBettingOption={selectedBettingOption}
      />
    </>
  );
};

export default GameBoard;
