import React, { useRef } from 'react'



const Start = ({setBorderState, refDisplay}) => {
    const startDisplay = useRef();

    const Starting = () => {
        setBorderState(false);
        refDisplay.current.style.display = "flex";
        startDisplay.current.style.display = "none";
    }

    return (
        <div ref={startDisplay} className="start">
            <h2 className="startingTitle">Welcome to Tic-Tac-Toe</h2>
            <button className="startBtn" onClick={() => Starting()}>Start</button>
        </div>
    )
}

export default Start
