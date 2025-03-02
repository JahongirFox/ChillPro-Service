import React, { useEffect } from 'react'
import './HomePage.css'
import { assets } from '../../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const HomePage = () => {


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
    <section>
        <div className="container">
            <div className="leftContainer">
                <div className="fadeIn"><h1 className='leftText'>Профессиональный ремонт <br /> техники в <span style={{color:"#2887ff", fontWeight:"bold"}}>Узбекистане</span></h1>
                <div className="homeContainer">
                <div className="one">
                    <h2>1.</h2>
                    <li>Выезд в любой <br /> район города</li>
                </div>
                <div className="one">
                    <h2>2.</h2>
                    <li>Оригинальные <br /> запчасти</li>
                </div>
                </div>            
               <div className="homeContainerBottom">
               <div className="one">
                    <h2>3.</h2>
                    <li>90 % запчастей с <br /> собой в наличии</li>
                </div>
                <div className="one">
                    <h2>4.</h2>
                    <li>Гибкая ценовая <br /> политика</li>
                </div>
               </div>
             
                <div className="homeBtn"><button onClick={handleCall} className='homeButton'>Вызвать мастера</button></div></div>
            </div>
            <div data-aos="fade-left" className="rightContainer">
                <img src={assets.header} alt=""  className='homeImage'/>
            </div>
        </div>
    </section>
    </>
  )
}
