import React from 'react'
import './Karta.scss'

function Karta() {
  return (
    <section className="karta">

    <h2>Карта загрязнений</h2>

      <div className="container">
        <iframe
          src="https://aqicn.org/station/kyrgyzstan-bishkek-%D0%B3%D0%B5%D1%80%D1%86%D0%B5%D0%BD%D0%B0-%D1%83%D0%BB%D0%B8%D1%86%D0%B0/#/z/12.7" // Вставьте правильную ссылку для Бишкек
          width="100%" // Ширина карты на 100% контейнера
          height="600px" // Высота карты
          frameBorder="0" // Без рамки
          allowFullScreen // Разрешить полноэкранный режим
          title="Map of Bishkek Air Quality"
        ></iframe>
      </div>
    </section>
  )
}

export default Karta