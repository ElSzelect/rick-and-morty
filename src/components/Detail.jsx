import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './styles/Detail.css'

function Detail(props) {
    
    const {detailId} = useParams()
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                
                setCharacter(char); 
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           })
        return setCharacter({});
     }, [detailId]);

    return(
        <main>
        
        <section className='detailContainer'>
            <img className='detailImage' src={character.image} alt={`imagen de ${character.name}`} />
                <div className='infoContainer'>
                    <h1>{`Name: ${character.name}`}</h1>
                    <h2>{`Status: ${character.status}`}</h2>
                    <h2>{`Specie: ${character.species}`}</h2>
                    <h2>{`Gender: ${character.gender}`}</h2>
                    <h2>{`Origin: ${character.origin?.name}`}</h2>
                </div>
        </section>
        </main>
    )
}

export default Detail