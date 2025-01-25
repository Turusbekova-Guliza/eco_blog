import React, { useState } from 'react';
import './CardPayment.scss';

function CardPayment() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // Состояние для отображения успешной оплаты

  const handlePayment = (e) => {
    e.preventDefault();
    // Логика обработки оплаты здесь
    setIsPaymentSuccessful(true); // Устанавливаем успешную оплату
  };

  return (
    <div className="card-payment">
      {!isPaymentSuccessful ? (
        <form className="payment-form" onSubmit={handlePayment}>
          <div className="payment-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="visa-logo" />
            <h2>Банковская карта</h2>
          </div>
          <div className="card-details">
            <input
              type="text"
              className="card-input"
              placeholder="Введите номер карты"
              required
            />
            <div className="card-meta">
              <input
                type="text"
                className="card-input"
                placeholder="Месяц и год 00/00"
                required
              />
              <input
                type="text"
                className="card-input"
                placeholder="Три цифры CVV"
                required
              />
            </div>
          </div>
          <button type="submit" className="pay-button">
            Перевести 10K$
          </button>
        </form>
      ) : (
        <div className="payment-success">
          <h2>Оплата успешно прошла!</h2>
        </div>
      )}
    </div>
  );
}

export default CardPayment;
