import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

function Header() {
  const [isVisible, setIsVisible] = useState(true); // Состояние для видимости хедера
  const location = useLocation(); // Получаем текущий путь
  const isDonatePage = location.pathname === '/donate'; // Проверяем, находится ли пользователь на странице "Donate"

  let lastScrollY = 0; // Храним предыдущую позицию скролла

  // Функция для отслеживания скроллинга
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Скрываем хедер при скроллинге вниз
    } else {
      setIsVisible(true); // Показываем хедер при скроллинге вверх
    }
    lastScrollY = window.scrollY > 0 ? window.scrollY : 0; // Обновляем позицию скролла
  };

  // Добавляем слушатель скроллинга
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isVisible ? 'visible' : 'hidden'} ${
        isDonatePage ? 'header--dark' : 'header--light'
      }`}
    >
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
            <Link to="/donate">Поддержать</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
