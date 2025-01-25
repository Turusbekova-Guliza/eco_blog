import React, { useState } from 'react';
import './Donate.scss';

function Donate() {
  const [amount, setAmount] = useState(10); // Сумма пожертвования
  const [comment, setComment] = useState(''); // Комментарий
  const [charCount, setCharCount] = useState(0); // Подсчёт символов

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setAmount(value);
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment(value);
    setCharCount(value.length); // Обновляем счётчик символов
  };

  const handleDonate = () => {
    alert(`Спасибо за пожертвование в размере ${amount}$!`);
    setAmount(10); // Сброс суммы
    setComment(''); // Сброс комментария
    setCharCount(0); // Сброс счётчика символов
  };

  return (
    <section className="donate">
      <div className="container">
        <div className="donate-header">
          <div className="donate-logo">A</div>
          <h1 className="donate-title">EcoBishkek</h1>
        </div>
        <div className="donate-thank-you">Спасибо за пожертвование!</div>
        <div className="donate-box">
          <div className="donate-anonymous">
            <span>Send anonymously</span>
            <span className="donate-edit">✏️</span>
          </div>
          <div className="donate-amount-box">
            <input
              type="number"
              className="donate-amount"
              value={amount}
              onChange={handleAmountChange}
              min="5"
            />
            <span className="donate-currency">$</span>
          </div>
          <div className="donate-currency-info">
            US Dollar - $ (USD)
            <br />
            Минимальная сумма: $5
          </div>
          <textarea
            className="donate-comment"
            placeholder="Добавьте комментарий..."
            value={comment}
            onChange={handleCommentChange}
            maxLength={200}
          ></textarea>
          <div className="donate-char-counter">{charCount} / 200</div>
          <button className="donate-button" onClick={handleDonate}>
            ПОЖЕРТВОВАТЬ
          </button>
          <div className="donate-language">🌐 Russian</div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
