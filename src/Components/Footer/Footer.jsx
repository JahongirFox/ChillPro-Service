import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
     <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">

        <div className="footerLogo"><span style={{color:"#fff"}}>ChillPro</span><span style={{color:"#2887ff", fontWeight:"bold"}}>Service</span></div>

          <p className='footerDescription'>
          Мастер с большим опытом работы,  поможет Вам решить проблемы с
          бытовой техникой качественно и быстро. Гарантия! У вас на дому. 
          </p>

          <div className="footer-social-icons">
            <a href="https://www.instagram.com/chillpro.uz"><img src={assets.instagram} alt="" /></a>
            <a href="https://t.me/chillprouz"><img src={assets.telegram} alt="" /></a>
            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
           <h2>Услуги</h2>
           <ul>
           <li>РЕМОНТ ХОЛОДИЛЬНИКОВ;</li>
            <li>РЕМОНТ СТИРАЛЬНЫХ МАШИН;</li>
            <li>РЕМОНТ МОРОЗИЛЬНЫХ КАМЕР;</li>
            <li>УСТАНОВКА  КОНДИЦИОНЕРОВ;</li>
            <li>РЕМОНТ и ЗАПРАВКА КОНДИЦИОНЕРОВ;</li>
           </ul>
        </div>
        <div className="footer-content-right">
            <h2>Связаться с нами</h2>
            <ul>
                <li>+998 (33) 157-17-17</li>
                <li>Contact@chillpro.uz</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ ChillProService - Barcha huquqlar himoyalangan.</p>
    </div>
    </>
  )
}

export default Footer