import React from 'react'
import SearchBar from './SearchBar'
import './styles/Nav.css'
import {Link} from 'react-router-dom'



export default function Nav(props) {

  return (
    
    <nav className='navBarContainer'>
      <div className="linksContainer">
        <Link to='/home'>
          <h3>Home</h3>
        </Link>
        <Link to='/about'>
          <h3>About</h3>
        </Link>
        <Link to='/contact'>
          <h3>Contact</h3>
        </Link>
      </div>
     
      <SearchBar onSearch={props.onSearch}/>
      <div className='logOutContainer'>
          <p>{props.username}</p>
          {props.access && <button onClick={props.logOut}>Log Out</button>}
      </div>
    </nav>

  )
}
