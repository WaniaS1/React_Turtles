import React from 'react'

export default function WelcomeModal({startGameCallback, cards, turn}) {
  
  if(!cards[0] || turn > 0){
    return (
      <div className='modal hidden'>
          <h3>WITAJ KOLEGO</h3>
          <h5>CHCESZ ZAGRAĆ?</h5>
          <button className='btn' onClick={startGameCallback}>NOWA GRA</button>
      </div>
    )
  }
  if(!turn){
    return (
      <div className='modal'>
          <h3>WITAJ KOLEGO</h3>
          <h5>CHCESZ ZAGRAĆ?</h5>
          <button className='btn' onClick={startGameCallback}>NOWA GRA</button>
      </div>
    )
  }
}
