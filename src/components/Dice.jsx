import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiceRollResult } from "../redux/diceRoll/diceRollActionCreater";
import diceImage from "../assets/dice.png";
import { Button } from "@mui/material";
import {
  updateSelecetedBettingAmount,
  updateSelecetedBettingOption,
} from "../redux/betAmountOptions/betAmountOptionsActionCreater";

const Dice = ({ selectedBettingAmountOption, selectedBettingOption }) => {
  const { dice1Val, dice2Val } = useSelector((store) => store.diceRoll);
  // const { selectedBettingOption } = useSelector((store) => store.bettingAmount);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-5 mt-14">
      <div>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              getDiceRollResult({
                bettingAmount: selectedBettingAmountOption,
                bettingOption: selectedBettingOption,
              })
            );
            dispatch(updateSelecetedBettingAmount(null));
            dispatch(updateSelecetedBettingOption(null));
          }}
          disabled={!selectedBettingAmountOption || !selectedBettingOption}
        >
          Roll Dice <img className="w-6" src={diceImage} alt="" />
        </Button>
      </div>
      {/* <button
        className="flex gap-1.5 h-10 bg-blue-600 px-5 py-2 rounded text-white disabled:bg-blue-300"
        onClick={() =>
          dispatch(
            getDiceRollResult({
              bettingAmount: selectedBettingAmountOption,
              bettingOption: selectedBettingOption,
            })
          )
        }
        disabled={!selectedBettingAmountOption || !selectedBettingOption}
      >
        <p>Roll Dice</p>
        <img className="w-6" src={diceImage} alt="" />
      </button> */}
      {/* {selectedBettingAmountOption && selectedBettingOption && ( */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <p className="rounded px-4 py-2 bg-slate-50 inline-block">
            {dice1Val ?? 0}
          </p>
          <p className="rounded px-4 py-2 bg-slate-50 inline-block">
            {dice2Val ?? 0}
          </p>
        </div>
        <div>
          <p className="rounded px-5 py-2 bg-slate-50 inline-block text-2xl">
            {(dice1Val ?? 0) + (dice2Val ?? 0)}
          </p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Dice;
