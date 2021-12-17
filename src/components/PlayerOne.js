import React from "react";

const PlayerOne = ({ refPlayerOne, borderState, victoryOne }) => {
  if (borderState === false) {
    refPlayerOne.current.style.border = "solid 2px black";
  } else if (borderState === true) {
    refPlayerOne.current.style.border = "";
  }

  return (
    <div className="contained">
      <div ref={refPlayerOne} className="playerOne">
        Player One
      </div>
      <div className="victory">
          Victories: {victoryOne}
      </div>
    </div>
  );
};

export default PlayerOne;
