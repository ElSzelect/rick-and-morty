import React from "react";
import './styles/Card.css'
import {Link} from 'react-router-dom'

function Card(props){

    function buttonHandler(){
        props.onClose(props.id)
        
    }

    return(
        <div className="content-card" >
            <div className="header">
            <button className="botonX" onClick={buttonHandler}>X</button>
            <Link to={`/detail/${props.id}`}>
            <h1>{props.name}</h1>
            </Link>
            </div>

            <img src={props.image} alt={`Imagen de ${props.name}`}  />

            <div className="details">
            <h4>Card {props.id}</h4>
            <p>{props.species}</p>
            <p>{props.gender}</p>
            </div>
        </div>
    )
}

export default Card