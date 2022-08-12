import { useState } from 'react'

function useLogic(hideCards) {
    const [ victory, setVictory] = useState(false)
    const [ turn, setTurn ] = useState(0)
    const [ cardsDepleted, setCardsDepleted ] = useState(false)

    const startGameCallback = () => {
        setTurn(1)
        setVictory(false)
        document.querySelectorAll('.turtlesContainer > div').forEach((turtle => {
            turtle.style.top = 0;
        }))
    }

    const shuffleCards = (cards)   => {
        return cards.sort(() => Math.random() - 0.5)
    }
    
    const throwCard = (e, setCardsAppState) => {
        if(turn > 2){
            setCardsDepleted(!cardsDepleted)
        }

        hideCards()
        let turtleId = e.currentTarget.attributes.turtleid.value
        turtleId ++
        let turtlePosition = document.querySelector(`.turtlesContainer > div:nth-of-type(${turtleId})`).style.top
        turtlePosition = turtlePosition.slice(0, turtlePosition.length -2)

        //check if somebody is on top of me
        // if(turtlePosition < 0){
        //     let carriedTurtlePosition = turtlePosition
        //     carriedTurtlePosition -= 53 * e.currentTarget.attributes.cardvalue.value
        //     document.querySelectorAll('.turtlesContainer > div').forEach((turtle => {
        //         if(turtle.style.top === `${turtlePosition}px`);
        //         {
        //             turtle.style.top = `${carriedTurtlePosition}px`
        //         }
        //     }))
        // }

        turtlePosition -= 53 * e.currentTarget.attributes.cardvalue.value
        document.querySelector(`.turtlesContainer > div:nth-of-type(${turtleId})`).style.top = `${turtlePosition}px`
        


        checkVictory(turtlePosition)

        e.currentTarget.className = 'card hidden'
        const cardId = e.currentTarget.attributes.cardid.value
        setTimeout(()=> {
            setCardsAppState(cardId)
            setTurn(prev => prev + 1)
            document.querySelectorAll('.cards > .grid > .card').forEach(item => {
                item.className = 'card'
            })

        }, 500)
    }
    const checkVictory = (turtlePosition) => {
        if(turtlePosition < -520){
            setVictory(true)
        }
    }

    return {startGameCallback, shuffleCards, turn, throwCard, victory, cardsDepleted}
}

export default useLogic
