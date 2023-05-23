import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function Detail(props) {
    const navigate = useNavigate()
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
           });
        return setCharacter({});
     }, [detailId]);

    return(
        <div className='detailContainer'>
            <div className='backButtom'>
                <button onClick={() => navigate('/home')}>Volver</button>
                
            </div>
            <div className='infoContainer'>

            <h1>{`NOMBRE: ${character.name}`}</h1>
            <h2>{`ESTATUS: ${character.status}`}</h2>
            <h2>{`ESPECIE: ${character.specie}`}</h2>
            <h2>{`GENERO: ${character.gender}`}</h2>
            <h2>{`ORIGEN: ${character.origin}`}</h2>
        
            </div>
            <img src={character.image} alt={`imagen de ${character.name}`} />
        </div>
    )
}

export default Detail