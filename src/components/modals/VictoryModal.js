import React from 'react'

export default function VictoryModal({startGameCallback, cards, turn, victory, setCardsDepletedState}) {

  if(!victory){
    return (
      <div className='modal hidden'>
          <h3>BRAWO</h3>
          <h5>GRASZ ZNOWU?</h5>
          <button className='btn' onClick={startGameCallback}>NOWA GRA</button>
      </div>
    )
  }
  if(victory){
    return (
      <div className='modal'>
            <h3>BRAWO</h3>
            <h5>GRASZ ZNOWU?</h5>
            <button className='btn' onClick={() => {startGameCallback(); setCardsDepletedState()}}>NOWA GRA</button>
      </div>
    )
  }
}
