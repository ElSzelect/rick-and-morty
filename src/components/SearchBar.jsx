import React from 'react'
import { useState } from 'react'
import './styles/SearchBar.css'


export default function SearchBar(props) {

  const[input,setInput]=useState()

  const handleChange = (event)=> {
    setInput(event.target.value)

  } 

  

  return (
    <div className='searchBarContainer'>
      <form action="" onSubmit={(event)=>{event.preventDefault() ;props.onSearch(input); setInput('')}}>
      
        <input maxLength={3} placeholder='Number minor than 826' id='input' type="text" onChange={handleChange} value={input}/>
        <button type='submit' > Add </button>

      </form>
    </div>
  )
}
