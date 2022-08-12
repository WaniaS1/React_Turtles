import React from 'react'

export default function Turtles({turtles}) {
  return (
    <div className='turtlesContainer'>
      {turtles.map((turtle, i) => (
        <div key = {i}>
          <img  className = 'turtles' src={`/image/tur${turtle.id}.png`} alt='turtle' />
        </div>
      ))}
    </div>
  )
}
