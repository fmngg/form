import React from 'react';
import emailjs from '@emailjs/browser';

import './Home.scss';

const Home = () => {
  const form = React.useRef();
  console.log(process.env);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(() => {
        alert(
          'Ваша заявка успешно отправлена и находится в обработке. Ожидайте email с подтверждением бронирования.',
        );
      })
      .catch((error) => {
        alert('Письмо не было доставлено по непредвиденной ошибке', error);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h1>Отправить заявку на участие в семинаре</h1>
      <p className="info">
        Организаторы свяжутся с Вами для подтверждения записи.
        <br />
        Участие в семинаре <span>бесплатное</span>.
      </p>
      <input
        required
        placeholder="Иван Иванов"
        minLength="3"
        type="text"
        name="userName"
        id="name"
      />
      <input required placeholder="ivanivanov@mail.ru" type="email" name="emailAdress" id="email" />
      <select name="courseName" id="courses" required>
        <option disabled>Семинары</option>
        <option value="JS Development">JS Development</option>
        <option value="React Development">React Development</option>
      </select>
      <div className="footer">
        <p>*Все поля обязательны для заполнения</p>
        <button type="submit" value="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Home;
