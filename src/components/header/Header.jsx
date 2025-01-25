import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img src="" alt="" />
          <ul>
            <Link to='/'>Главная</Link>
            <a href="#about">О нас</a>
            <a href="#events">Мероприятия</a>
            <a href="#karta">Карта</a>
            <a href="#rating">Рейтинг компаний</a>
          </ul>
          <button><Link to='donate'>Поддержать</Link></button>
        </div>
      </div>
    </header>
  )
}

export default Header