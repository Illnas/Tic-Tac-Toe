import React from 'react'

const PlayerTwo = ({refPlayerTwo, borderState, victoryTwo}) => {
    if(borderState === true) {
        refPlayerTwo.current.style.border = "solid 2px black"
    } else if (borderState === false) {
        refPlayerTwo.current.style.border = ""
    }

    return (
        <div className="contained">
        <div ref={refPlayerTwo} className="playerTwo">
          Player Two
        </div>
        <div className="victory">
            Victories: {victoryTwo}
        </div>
      </div>
    )
}

export default PlayerTwo
