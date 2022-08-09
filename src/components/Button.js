import React, { useState } from "react";

const Button = ({ borderState, setBorderState, value, position }) => {
  const [item, setItem] = useState("");
  const [disable, setDisable] = useState(false);

  function showingNumber(e) {
    if (borderState === false) {
      setItem("X");
      setDisable(true);
      setBorderState(!borderState);
      position[value] = "X"
    }

    if (borderState === true) {
      setItem("O");
      setBorderState(!borderState);
      setDisable(true);
      position[value] = "O"
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={(e) => {showingNumber(e)}}
        disabled={disable}
        value={value}
      >{item}</button>
    </div>
  );
};

export default Button;
