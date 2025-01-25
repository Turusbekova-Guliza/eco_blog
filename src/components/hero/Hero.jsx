import { useState } from "react";
import Modal from "../modal/Modal";
import "./Hero.scss";
import Carousel from "../carousel/Carousel";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <div className="Hero">
      <div className="container">
        <div className="hero-block">
          <h1 className="hero-title">
            Вместе мы сделаем много полезного для природы и человека!
          </h1>
          <p className="hero-subtitle">
            EcoBishkek - платформа для отслеживания загрязнений, подачи <br />
            жалоб и участия в экологических инициативах.
          </p>
          <button className="join-btn" onClick={openModalHandler}>
            Присоединиться
          </button>

          <Carousel />
        </div>
      </div>

      <Modal showModal={showModal} closeModalHandler={closeModalHandler} />
    </div>
  );
}

export default Hero;
