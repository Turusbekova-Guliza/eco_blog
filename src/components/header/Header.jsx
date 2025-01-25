import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

function Header() {
  const [isVisible, setIsVisible] = useState(true); // Состояние для видимости хедера
  let lastScrollY = 0; // Храним предыдущую позицию скролла

  // Функция для отслеживания скроллинга
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Если скроллим вниз — скрыть хедер
      setIsVisible(false);
    } else {
      // Если скроллим вверх — показать хедер
      setIsVisible(true);
    }
    lastScrollY = window.scrollY > 0 ? window.scrollY : 0; // Обновляем позицию скролла
  };

  // Используем useEffect, чтобы добавить слушатель события
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Добавляем слушатель скроллинга

    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="header_block">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="header_ul">
            <Link to="/">Главная</Link>
            <a href="#about">О нас</a>
            <a href="#events">Мероприятия</a>
            <a href="#karta">Карта</a>
            <a href="#rating">Рейтинг компаний</a>
          </ul>
          <button className="header_btn">
            <Link to="donate">Поддержать</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
