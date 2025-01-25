import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/donate'>Donate</Link>
      </ul>
    </header>
  )
}

export default Header