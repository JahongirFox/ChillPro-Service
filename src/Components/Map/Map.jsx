import React from 'react'
import './Map.css'

const Map = () => {

  return (
    <>
    <div className="mapContainer">
      <div className="mapRight" data-aos="fade-right">
      <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Aa49dc788e7e71f55ab90339d5858d81986f4049942cbbb504d3beb16a26a89d2&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
      </div>
      <div className="mapLeft">
        <div className="mapText" data-aos="fade-left">
            <div className="url">
              <p className='mapDescription'>Наш адрес</p>
            <ul>
                <li className='mapUrl'>Ташкент, просп. Ханабадтепа</li>
            </ul>  
            </div>
            <div className="url">
              <p className='mapDescription'>Номер телефона</p>
            <ul>
                <li className='mapUrl'>+998 33 151 17 17</li>
            </ul>  
            </div>
            <div className="url">
              <p className='mapDescription'>График работы</p>
            <ul>
                <li className='mapUrl'> 24/7</li>
            </ul>  
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Map