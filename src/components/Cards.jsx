import React from 'react'
import Card from './Card.jsx'
import './styles/Cards.css'

export default function Cards(props) {

  return (
    <main>
      <div className='cardsContainer'>

      {
        props.characters.map(
            (personaje)=>{
              return (
                  <div key={personaje.id}>
                <Card 
                id={personaje.id}
                
                name={personaje.name}
                species={personaje.species}
                gender={personaje.gender}
                image={personaje.image}
                onClose={props.onClose}
                />
                </div>
                )
            }
        )
      }
      </div>
    </main>
  )
}




