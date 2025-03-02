import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';  // useNavigate import qilinadi
import './ContactPage.css'
import Navbar from '../Navbar/Navbar';

export const ContactPage = () => {
  const form = useRef();
  const navigate = useNavigate();  // useNavigate hookini chaqiramiz

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('avaz-chillpro-service33', 'avaz-chillpro-template33', form.current, {
        publicKey: '1xvuoHY7pkMiNrpX_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Email muvaffaqiyatli yuborilgandan so‘ng, Home sahifasiga yo‘naltiramiz
          navigate('/');  // Bu yerda Home sahifasi (/) ga yo'naltirish amalga oshiriladi
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

 
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div>
      <Navbar />
      <div className='login-popup'>
        <form className="login-popup-container" ref={form} onSubmit={sendEmail}>
          <div className="login-popup-title">
            <h1 className='lll'>ChillProService</h1>
          </div>
          <div className="login-popup-inputs">
            <input type="text" placeholder='Имя*' name='to_name' />
            <input type="tel" placeholder='+998*' name='to_number'/>
          </div>
          <button type="submit" onClick={handleClick}>Отправить</button>
        </form>
        {showAlert && (
        <div style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#2887ff",
          color: "white",
          padding: "20px 40px",
          borderRadius: "5px",
          zIndex: "9999"
        }}>
          Отправил! Дождитесь ответа эксперта
        </div>
      )}
      </div>
    </div>
  );
};

export default ContactPage;