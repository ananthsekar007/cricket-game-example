import React, { useEffect, useState, useTransition } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function CricketComponent() {
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [extras, setExtras] = useState(0);
  const [totalBalls, setTotalBalls] = useState(0);
  const [isPending, startTransition] = useTransition();

  const addToScore = (runs, isExtra = false) => {
    !isExtra
      ? setTotalBalls((prevBalls) => prevBalls + 1)
      : setExtras((prevExtras) => prevExtras + 1);
    setScore((prevScore) => prevScore + runs);
  };

  const takeWickets = () => {
    if (wickets === 10) return;
    setTotalBalls((prevBalls) => prevBalls + 1);
    setWickets((prevWickets) => prevWickets + 1);
  };

  const calculateOversFromBalls = (balls) => {
    const overs = Math.floor(balls / 6);
    const remainingBalls = balls % 6;
    if (remainingBalls === 0) {
      return overs;
    } else {
      return overs + "." + remainingBalls;
    }
  };

  const resetGame = () => {
    startTransition(() => {
      setScore(0);
      setExtras(0);
      setTotalBalls(0);
      setWickets(0);
    });
  };

  return (
    <div className="flex flex-col p-4 space-y-7 w-[600px] bg-white bg-opacity-60 hover:shadow-xl transition hover:scale-110 rounded ">
      <p className="font-semibold text-xl">Cricket ScoreBoard</p>
      <div className="flex space-x-4 justify-center items-center p-5 self-center bg-white rounded">
        <p className="text-2xl font-semibold text-green-500">{score}</p>
        <div className="w-[0.5px] h-10 bg-opacity-50 bg-black" />
        <p className="text-2xl font-semibold text-red-500">{wickets}</p>
        <p className="text-mg">
          ( {calculateOversFromBalls(totalBalls)} ) overs
        </p>
      </div>
      <div className="flex justify-evenly">
        <ButtonComponent
          className="bg-blue-500 hover:bg-blue-700"
          buttonText="1"
          onClick={() => {
            addToScore(1);
          }}
        />
        <ButtonComponent
          className="bg-blue-500 hover:bg-blue-700"
          buttonText="2"
          onClick={() => {
            addToScore(2);
          }}
        />
        <ButtonComponent
          className="bg-blue-500 hover:bg-blue-700"
          buttonText="3"
          onClick={() => {
            addToScore(3);
          }}
        />
        <ButtonComponent
          className="bg-green-500 hover:bg-green-700"
          buttonText="4"
          onClick={() => {
            addToScore(4);
          }}
        />
        <ButtonComponent
          className="bg-green-500 hover:bg-green-700"
          buttonText="6"
          onClick={() => {
            addToScore(6);
          }}
        />
      </div>
      <div className="flex justify-evenly">
        <ButtonComponent
          className="bg-black bg-opacity-50 hover:bg-opacity-100"
          buttonText="WD"
          onClick={() => {
            addToScore(1, true);
          }}
        />
        <ButtonComponent
          className="bg-red-500 hover:bg-red-700"
          buttonText="W"
          onClick={() => {
            takeWickets();
          }}
        />
        <ButtonComponent
          buttonText="NB"
          className="bg-cyan-500 hover:bg-cyan-700"
          onClick={() => {
            addToScore(1, true);
          }}
        />
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="w-1/3" />
        <ButtonComponent
          buttonText="Reset Game!"
          className="w-1/3 bg-black w-fit bg-opacity-50 hover:bg-opacity-100"
          onClick={resetGame}
        />
        <p className="w-1/3 text-lg font-semibold   ">Extras : {extras}</p>
      </div>
    </div>
  );
}

export default CricketComponent;
