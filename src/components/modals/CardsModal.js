import React from 'react'

export default function CardsModal({turn, cards, throwCard, setCardsAppState, victory, showCards, setCardsDepletedState}) {

  if(!turn || victory || !showCards){
    return (
      <div className='modal hidden cards'>
        <p>RZUĆ KARTĘ</p>
        <div className='grid'>
          {cards.map((card, i) => {
              if(i < 5){
              return (
              <div key = {i} onClick = {throwCard} turtleid = {card.turtleId} className = 'card hidden'>
                <img src ={`/image/tur${card.turtleId}.png`} alt ='turtle'/>
                <p>{card.move}</p>
              </div>
            )}
          })}
        </div>
        <button>MIESZAJ KARTY</button> 
      </div>
    )
  } else {
    return (
      <div className='modal cards'>
        <p>RZUĆ KARTĘ</p>
        <div className='grid'>
          {cards.map((card, i) => {
              if(i < 5){
              return (
              <div key = {i} onClick = {(e) => {throwCard(e, setCardsAppState)}} turtleid = {card.turtleId} className = 'card' cardid = {card.id} cardvalue ={card.move}>
                <img src ={`/image/tur${card.turtleId}.png`} alt ='turtle'/>
                <p>{card.move}</p>
              </div>
            )}
          })}
        </div>
        <button className='btn' onClick={setCardsDepletedState}>MIESZAJ KARTY</button> 
      </div>
    )
  }
}
