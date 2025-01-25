import "./Model.scss";
import { useState } from "react";

const Modal = ({ showModal, closeModalHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // To track error messages
  const [isSubmitted, setIsSubmitted] = useState(false); // To handle submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Clear error when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setErrorMessage("Пожалуйста, заполните все поля."); // Show error message
      return;
    }

    // If all fields are filled, proceed with form submission
    console.log("Form Submitted:", formData);
    setIsSubmitted(true); // Mark form as submitted
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
    setTimeout(() => {
      closeModalHandler(); // Close modal after a short delay
    }, 1000);
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

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {isSubmitted && (
            <p className="success-message">Ваша анкета успешно отправлена!</p>
          )}

          <button type="submit" className="modal-join-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
