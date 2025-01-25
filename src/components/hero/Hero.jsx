import "./Hero.scss";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <h1 className="hero-title">
          Вместе мы сделаем много полезного для природы и человека!
          <p className="hero-subtitle">
            EcoBishkek - платформа для отслеживания загрязнений,подачи <br />{" "}
            жалоб и участия в экологических инициативах.
          </p>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
