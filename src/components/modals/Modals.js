import React from 'react'
import WelcomeModal from './WelcomeModal'
import CardsModal from './CardsModal'
import VictoryModal from './VictoryModal'


export default function Modals({startGameCallback, cards, turn, throwCard, setCardsAppState, victory, showCards, setCardsDepletedState}) {
  return (
    <>
        <WelcomeModal turn={turn} startGameCallback={startGameCallback} cards={cards}/>
        <CardsModal setCardsDepletedState = {setCardsDepletedState} showCards = {showCards} turn={turn} cards = {cards} throwCard={throwCard} setCardsAppState ={setCardsAppState} victory={victory}/>
        <VictoryModal victory ={victory} startGameCallback={startGameCallback} setCardsDepletedState = {setCardsDepletedState}/>
    </>
  )
}
