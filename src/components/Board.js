import React, { useState } from 'react'
import useLogic from '../hooks/useLogic'
import Modals from './modals/Modals'
import Turtles from './Turtles'

export default function Board({cards, turtles, setCardsDepletedState, setCardsAppState}) {
  const [showCards, setShowCards] = useState(false)//

  const hideCards = () => {
    setShowCards(false)
  }

  const {startGameCallback, turn, victory, throwCard} = useLogic(hideCards)
  


  return (
    <div className='board'>
        <div className='card myCards' onClick = {() => {setShowCards(true)}}><img src ={`/image/tur0.png`} alt ='turtle'/></div>
        <img src='/image/board.png' alt='board' className='boardImg'/>
        <Turtles turtles ={turtles} />
        <Modals setCardsDepletedState = {setCardsDepletedState} showCards = {showCards} victory={victory} throwCard= {throwCard} turn ={turn} startGameCallback={startGameCallback} cards={cards} setCardsAppState = {setCardsAppState}/>
        <h2>{turn}</h2>
    </div>
  )
}
