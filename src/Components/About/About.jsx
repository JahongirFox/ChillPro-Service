import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className="aboutTop">
    <h1 style={{fontWeight:"500"}}>Нам можно<span style={{color:"#2887ff"}}> доверять!</span></h1>    
    </div>
    
    <div className="aboutContainer">
        <div className="gridColumsTop">
            <div className="item">
                <h4>Работаем без выходной</h4>
                <br />
                <p className='gridDescription'>Мы ремонтируем бытовую технику для Работаем без выходной: 24/7.</p>
            </div>
            <hr className='aboutHr'/>
            <div className="item">
                <h4>Запчасти в наличии</h4>
                <br />
                <p className='gridDescription'>Собственный склад запчастей, поставки без посредников, гарантия производителя.</p>
                </div>
                <hr className='aboutHr'/>
            <div className="item">
                <h4>Ремонт на дому</h4>
                <br />
                <p className='gridDescription'>Мы ремонтируем бытовую технику на дому.</p>
                </div>
                <hr className='aboutHr'/>
            <div className="item">
                <h4>Гарантируем качество</h4>
                <br />
                <p className='gridDescription'>90% Оригинальные
                запчасти</p>
            </div>
            <hr className='aboutHr'/>
            <div className="item">
                <h4>Оплата по факту</h4>
                <br />
                <p className='gridDescription'>Гибкая ценовая
                политика</p>
            </div>
            <hr className='aboutHr'/>
            <div className="item">
                <h4>Выезд в день заявки</h4>
                <br />
                <p className='gridDescription'>Оперативная помощь – срочный выезд мастера по Ташкенту, в день заявки</p>
            </div>
            <hr className='aboutHr'/>
            </div>
        </div>
    </>
  )
}

export default About