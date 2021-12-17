import React from 'react'

const NewGame = ({ refDisplay, refNewGame, setBorderState, setRestart, setPosition, winner, victoryOne, setVictoryOne, victoryTwo, setVictoryTwo }) => {
 

    const Restarting = () => {
        setRestart(Math.floor(Math.random() * 100000))
        setPosition(Array(9).fill(null));
        setBorderState(false)
        refNewGame.current.style.display = "none";
        refDisplay.current.style.display = "flex"; 
        
        if(winner === "Player One has won!") {
            setVictoryOne(victoryOne + 1)
        }

        if(winner === "Player Two has won!") {
            setVictoryTwo(victoryTwo + 1)
        }
    }
  
    
    return (
        <div ref={refNewGame}  className="newGame">
            <h2>{winner}</h2>
            <button className="startBtn" onClick={() => Restarting()}>Play Again!</button>
        </div>
    )
}

export default NewGame
