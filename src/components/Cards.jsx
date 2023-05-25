import React from 'react'
import Card from './Card.jsx'
import './styles/Cards.css'
import { useState } from 'react'

export default function Cards(props) {

  const [color, setColor] = useState('rgba(255, 0, 0, 0.847)')
  
  const switchFavsCards = () => {
    props.switchToFavs()
    setColor(color === "rgba(255, 0, 0, 0.847)" ? "rgba(142, 0, 0, 0.671)" : "rgba(255, 0, 0, 0.847)")
  }

  return (
    <main>
      <button className='favSwitchButton' style={{ backgroundColor: color }} type='button' onClick={switchFavsCards}>Favourites</button>
      <div className='cardsContainer'>
      {props.characters.length ? (<></>) : (<span id='NoCharacters'>'No characters'</span>) }
      { props.favPage ? props.favCharacters.map(
            (character)=>{
              return (
                
                  <div key={character.id}>
                <Card
                id={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                character={character}
                onClose={props.onClose}
                favCharacterHandler={props.favCharacterHandler}
                />
                </div>
                )
            }
        ) :
        props.characters.map(
            (character)=>{
              return (
                  <div key={character.id}>
                <Card
                id={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                character={character}
                onClose={props.onClose}
                favCharacterHandler={props.favCharacterHandler}
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




