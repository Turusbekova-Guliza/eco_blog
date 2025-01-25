import React from "react";
import ".//Footer.scss"

function Footer() {
  return (
    <div>
      {/* Информация о Telegram боте */}
      <div className="text1">
        <h2>Наш бот в Telegram!</h2>
        <p>
          Сканируйте QR-код, чтобы быть в курсе всех новостей и обновлений. Мы делимся важной информацией, интересными событиями и многим другим! Присоединяйтесь к нам и оставайтесь на связи.
        </p>
      </div>

      <div className="text2">
        <h2>Подключайтесь к нашему боту!</h2>
        <p>
          Сканируйте QR-код, чтобы получать важные обновления, следить за событиями и открывать новые возможности!
        </p>
      </div>

      <div className="Telphone">
        <img src="src/components/sponsor/img/Group 14898.png" alt="Sponsor 6" className="sponsor-image" />
      </div>

      {/* Футер сайта */}
      <footer className="footer">
        <div className="footer-container">
          {/* Навигация */}
          <div className="footer-section">
            <h3>Навигация</h3>
            <ul>
              <li>О нас</li>
              <li>Мероприятия</li>
              <li>Карта</li>
              <li>Рейтинг компаний</li>
            </ul>
          </div>

          {/* Статистика */}
          <div className="footer-section">
            <h3>Статистика</h3>
            <ul>
              <li>Самые активные активисты</li>
              <li>Последние мероприятия</li>
            </ul>
          </div>

          {/* Узнать больше */}
          <div className="footer-section">
            <h3>Узнать больше</h3>
            <ul>
              <li>О нас</li>
              <li>Как присоединиться</li>
              <li>Стать спонсором</li>
            </ul>
          </div>

          {/* Связаться с нами */}
          <div className="footer-section">
            <h3>Связаться с нами</h3>
            <ul>
              <li>166 просп. Чуй, Бишкек 720001</li>
              <li>+996 0312 611 177</li>
              <li><a href="https://maps.google.com">Google Maps</a></li>
            </ul>
          </div>
        </div>

        {/* Социальные сети */}
        <div className="footer-social-icons">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Facebook" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="YouTube" /></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
