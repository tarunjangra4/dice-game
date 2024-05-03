import React from "react";
import { useSelector } from "react-redux";

const Result = ({ selectedBettingAmountOption, selectedBettingOption }) => {
  const { gameResult } = useSelector((store) => store.result);

  return (
    <div className="flex flex-col items-center gap-1 mt-12">
      {gameResult && (
        <>
          {gameResult.result === "win" && (
            <>
              <p className="text-4xl text-yellow-400">Congratulations</p>
              <p className="text-2xl text-yellow-400">
                You have Won {gameResult?.wonAmount}
              </p>
            </>
          )}
          {gameResult.result === "lost" && (
            <>
              <p className="text-4xl text-red-400">Sorry!</p>
              <p className="text-2xl text-red-400">Better Luck Next Time</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
