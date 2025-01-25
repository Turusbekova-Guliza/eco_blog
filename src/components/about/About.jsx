
import ".//About.scss";

import planetImg from "../../assets/planet.jpg";
import biodiversityImg from "../../assets/tree.jpg";
import energyImg from "../../assets/light.jpg";

const About = () => {
  const cards = [
    {
      img: planetImg,
      title: "Забота о планете",
      text: "Сделайте свой выбор в пользу окружающей среды! Каждое принимаемое нами решение влияет на будущее нашей планеты. Узнайте, как простые шаги могут сделать вас и наш мир более устойчивым. Давайте вместе сохраним наш единственный дом – Землю.",
    },
    {
      img: biodiversityImg,
      title: "Биоразнообразие – сокровище",
      text: "Берегите природные богатства! Разнообразие живых организмов – сила нашей планеты. Откройте для себя меры по сохранению биоразнообразия и поддержке гармонии в экосистемах. Присоединяйтесь к нам в защите природы!",
    },
    {
      img: energyImg,
      title: "Энергия для чистого будущего",
      text: "Выбирайте чистую энергию! Мышление о будущем начинается с энергии сегодня. Изучите простые шаги по переходу на чистые источники энергии. Поддержите устойчивые технологии и вместе с нами создайте зеленое будущее!",
    },
  ];

  return (
    <div className="eco-cards">
      {cards.map((card, index) => (
        <div className="eco-card" key={index}>
          <img src={card.img} alt={card.title} className="eco-card__icon" />
          <h3 className="eco-card__title">{card.title}</h3>
          <p className="eco-card__text">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
