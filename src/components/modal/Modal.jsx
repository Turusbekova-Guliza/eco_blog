import ".//Model.scss";
import { useState } from "react";

const Modal = ({ showModal, closeModalHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Форма успешно отправлена!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    closeModalHandler();
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModalHandler}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModalHandler}>
          &times;
        </button>
        <h2 className="modal-title">Стань Волонтером!</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Введите ваш номер телефона"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Почта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите вашу почту"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Введите ваше сообщение"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="modal-join-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
