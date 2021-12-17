import React, { useState, useRef } from "react";
import PlayerOne from "./components/PlayerOne";
import PlayerTwo from "./components/PlayerTwo";
import Start from "./components/Start";
import NewGame from "./components/NewGame";
import Grid from "./components/Grid";

function App() {
  const refPlayerOne = useRef();
  const refPlayerTwo = useRef();
  const refDisplay = useRef();
  const refNewGame = useRef();

  const [borderState, setBorderState] = useState(null);
  const [position, setPosition] = useState(Array(9).fill(null));
  const [restart, setRestart] = useState(0);
  const [victoryOne, setVictoryOne] = useState(0);
  const [victoryTwo, setVictoryTwo] = useState(0);

  let winner = "";


    if (
      (position[0] === "X" && position[1] === "X" && position[2] === "X") ||
      (position[0] === "X" && position[3] === "X" && position[6] === "X") ||
      (position[0] === "X" && position[4] === "X" && position[8] === "X") ||
      (position[1] === "X" && position[4] === "X" && position[7] === "X") ||
      (position[2] === "X" && position[5] === "X" && position[8] === "X") ||
      (position[2] === "X" && position[4] === "X" && position[6] === "X") ||
      (position[3] === "X" && position[4] === "X" && position[5] === "X") ||
      (position[6] === "X" && position[7] === "X" && position[8] === "X")
    ) {
      refDisplay.current.style.display = "none";
      refNewGame.current.style.display = "flex";
      winner = "Player One has won!"
    }
    if (
      (position[0] === "O" && position[1] === "O" && position[2] === "O") ||
      (position[0] === "O" && position[3] === "O" && position[6] === "O") ||
      (position[0] === "O" && position[4] === "O" && position[8] === "O") ||
      (position[1] === "O" && position[4] === "O" && position[7] === "O") ||
      (position[2] === "O" && position[4] === "O" && position[6] === "O") ||
      (position[2] === "O" && position[5] === "O" && position[8] === "O") ||
      (position[3] === "O" && position[4] === "O" && position[5] === "O") ||
      (position[6] === "O" && position[7] === "O" && position[8] === "O")


    ) {
      refDisplay.current.style.display = "none";
      refNewGame.current.style.display = "flex";
      winner = "Player Two has won!"
    }

    if (position.every((element) => element !== null) === true) {
      refDisplay.current.style.display = "none";
      refNewGame.current.style.display = "flex";
      winner = "It's a draw!"
    }



  console.log(position);


  return (
    <div>
      <div id="showgrid" ref={refDisplay}>
        <PlayerOne
          refPlayerOne={refPlayerOne}
          borderState={borderState}
          refDisplay={refDisplay}
          victoryOne={victoryOne}
        />
        <Grid
          className="showgrid"
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          restart={restart}
          key={restart}
        />
        <PlayerTwo
          refPlayerTwo={refPlayerTwo}
          borderState={borderState}
          victoryTwo={victoryTwo}
        />
      </div>
      <Start setBorderState={setBorderState} refDisplay={refDisplay} />
      <NewGame
        refNewGame={refNewGame}
        refDisplay={refDisplay}
        setBorderState={setBorderState}
        setRestart={setRestart}
        setPosition={setPosition}
        winner={winner}
        victoryOne={victoryOne}
        setVictoryOne={setVictoryOne}
        victoryTwo={victoryTwo}
        setVictoryTwo={setVictoryTwo}
      />
    </div>
  );
}

export default App;
