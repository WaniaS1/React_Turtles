import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { useEffect, useState } from 'react';
import useLogic from './hooks/useLogic';

function App() {
  const [cards, setCards] = useState([])
  const [turtles, setTurtles] = useState([])
  const [cardsDepleted, setCardsDepleted] = useState(false)

  const { shuffleCards } = useLogic()

  const setCardsAppState = (id) => {
    let newCards = cards.filter((card) => {
      return card.id != id
      })
      setCards(newCards)
  }

  const setCardsDepletedState = () => {
    setCardsDepleted(!cardsDepleted)
  }

  useEffect(() => {
    fetch('http://localhost:3001/cards')
      .then(res => res.json())
      .then(data => setCards(shuffleCards(data)))
    
      fetch('http://localhost:3001/turtles')
      .then(res => res.json())
      .then(data => setTurtles(data))

  },[cardsDepleted])

  

  return (
    <div className="App">
      <Board cards={cards} turtles={turtles} setCardsAppState = {setCardsAppState} setCardsDepletedState ={setCardsDepletedState}/>
    </div>
  );
}

export default App;




/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/