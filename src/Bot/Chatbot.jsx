import React, { useState } from "react";
import styles from "./Chatbot.module.scss";

const knowledgeBase = {
  привет: "Здравствуйте! Как я могу Вам помочь?",
  "как дела": "У меня всё хорошо, а у Вас?",
  "что делаешь": "Отвечаю на Ваши вопросы :)",
  цены: "Стоимость наших товаров начинается от 100 рублей.",
  заказать: "Для заказа товара, просто напишите его название.",
  спасибо: "Пожалуйста, обращайтесь еще!",
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value.trim();
    if (message) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: message, sender: "user" },
      ]);
      event.target.reset();
      setTimeout(() => {
        const reply =
          knowledgeBase[message.toLowerCase()] || "Извините, я не понимаю вас.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: reply, sender: "bot" },
        ]);
      }, 500);
    }
  };

  return (
    
    <div className={styles.container}>
      <div className={styles.header} ><p>Отправьте нам сообщение</p></div>
      <div className={styles.dialog}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${styles[message.sender]}`}
          >
            {message.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleMessageSubmit} className={styles.form}>
        <input
          type="text"
          name="message"
          placeholder="Напишите сообщение..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          
          <img className={styles.img56} src="56.png" alt="изображение" />
          
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
