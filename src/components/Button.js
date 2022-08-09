import React, { useState } from "react";

const Button = ({  value, position }) => {
  const [item, setItem] = useState("");
  const [disable, setDisable] = useState(false);
  const [borderState, setBorderState] = useState(false)

  function showingNumber() {
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
  console.log(item)

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => showingNumber()}
        disabled={disable}
        value={value}
      >{item}</button>
    </div>
  );
};

export default Button;
