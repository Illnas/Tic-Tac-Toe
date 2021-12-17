import React from "react";
import Button from "./Button";

const Grid = ({borderState, setBorderState, position, restart}) => {

  return (
    <div id="gridStyle">
      <div className="btn-group" role="group">
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={0}
          restart={restart}
        />
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={1}
          restart={restart}
        />
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={2}
          restart={restart}
        />
      </div>
      <div className="btn-group" role="group">
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={3}
          restart={restart}
        />
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={4}
          restart={restart}
        />
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={5}
          restart={restart}
        />
      </div>
      <div className="btn-group" role="group">
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={6}
          restart={restart}
        />
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={7}
          restart={restart}
        />
        <Button
          borderState={borderState}
          setBorderState={setBorderState}
          position={position}
          value={8}
          restart={restart}
        />
      </div>
    </div>
  );
};

export default Grid;
