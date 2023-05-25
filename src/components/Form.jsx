import React from 'react'
import { useState } from 'react'
import {validation} from './validation'
import './styles/Form.css'
import portal from '../imgs/portalSinFondo.png'
import portalGif from '../imgs/portalGif.gif'

export default function Form(props) {
    const [userData, setUserData] =useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })

    function handleInputChange(e){
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        })
        )

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

        function handleSubmit(e) {
            e.preventDefault()
            props.login(userData);
        }

    return (
        <main id='main' className=''>
            <div className='formContainer'>
                <img className='portal' alt='portal' src={portal}></img>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label  htmlFor="">Email</label>
                    <input  onChange={handleInputChange} type="email" name='username' placeholder='Email' value={userData.username}/>
                    <p>{errors.username && errors.username}</p>
                    <label  htmlFor="">Contraseña</label>
                    <input onChange={handleInputChange} type="password" name='password' placeholder='Contraseña' value={userData.password}/>
                    <p>{errors.password && errors.password}</p>
                    <button type='submit'>Ingresar</button>
                </form>
            </div>
        </main>
    )
}