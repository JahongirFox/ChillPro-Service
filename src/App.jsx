import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { HomePage } from './Components/HomePage/HomePage'
import SectionContainer from './Components/SectionContainer/SectionContainer'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'
import './App.css'
import { assets } from './assets/assets'
import About from './Components/About/About'
import ContactPage from './Components/ContactPage/ContactPage'
import Home from './Components/Page/Home'
import { Routes, Route } from 'react-router-dom'




const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div>

      <div className="callButton" onClick={toggleMenu}>
        <img src={assets.arrow} alt="Call" className="callIcon" />
      </div>

      {isMenuOpen && (
        <div className="callMenu">
          <p>Вызвать мастера</p>
          <a href="tel:+998331511717" className="callNumber">
            +998 33 151 17 17
          </a>
        </div>
      )}
    </div>

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<ContactPage/>} />
  </Routes>

    </>
  )
}

export default App