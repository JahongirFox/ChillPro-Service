import React, { useEffect } from "react";
import "./Scroll.css";
import { assets } from "../../assets/assets";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Scroll = () => {

  const handleCall = () => {
    window.location.href = "tel:+998331511717";
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100,   
    });
  }, []);
  return (
    <>
      <div className="phoneContainer">
        <div className="phoneTop"  data-aos="fade-right">
          <h1 className="phoneText">Не нашли свою <span style={{color:"black"}}>поломку?</span> </h1>
          <p className="phoneDescription">Наши специалисты бесплатно вас проконсультируют <br /> и ответят на все вопросы <br /> по телефону:</p>
          <button className="phoneBtn" onClick={handleCall}>+(998) 33 151 17 17</button>
        </div>

        <div className="phoneBottom" data-aos="fade-left">
          <img src={assets.phone_2} alt="" className="phoneImage"/>
        </div>
      </div>
    </>
  );
};

export default Scroll;
