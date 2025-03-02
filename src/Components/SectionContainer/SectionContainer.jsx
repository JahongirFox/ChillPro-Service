import React from "react";
import "./SectionContainer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


const SectionContainer = () => {

  return (
    <>
      <div className="containerTopText">
        <h1 className="ht">Услуги</h1>
      </div>
      <div className="sectionContainer">
        <div className="containerTopBottom">
          <div id="containerTop">
          <div className="left">
              <div className="topButton">
                <img src={assets.conditsoner} alt="" className="topImage" />
                <ul>
                  <li className="textBottom">Кондиционер</li>
                </ul>
                <div className="bbb">
                  <button className="btn"><Link style={{color:"#fff"}} to={"/contact"}>Вызвать мастера</Link></button>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src="https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223005866783.jpg"
                alt=""
                className="topImage"
              />
              <div className="topButton">
                <ul>
                  <li className="textTop">Холодильник</li>
                </ul>
                <div className="bbb">
                  <button className="btn"><Link style={{color:"#fff"}} to={"/contact"}>Вызвать мастера</Link></button>
                </div>
              </div>
            </div>
            <div className="left">
              <img
                src="https://images.thdstatic.com/productImages/1f582bc2-1fbf-47c6-96d2-31d165a4e8cc/svn/white-whirlpool-front-load-washers-chw9160gw-64_1000.jpg"
                alt=""
                className="topImage"
              />
              <div className="topButton">
                <ul>
                  <li className="textTop">Стиральная машина</li>
                </ul>
                <div className="bbb">
                  <button className="btn"><Link style={{color:"#fff"}} to={"/contact"}>Вызвать мастера</Link></button>
                </div>
              </div>
            </div>
          </div>
          <div className="containerBottom">
          <div className="right">
              <img src={assets.stablizator} alt="" className="topImage" />
              <div className="topButton">
                <ul>
                  <li className="textBottom">Стабилизатор</li>
                </ul>
                <div className="bbb">
                  <button className="btn"><Link style={{color:"#fff"}} to={"/contact"}>Вызвать мастера</Link></button>
                </div>
              </div>
            </div>
            <div className="left">
              <img src={assets.fridgee} alt="" className="topImagee" />
              <div className="topButton">
                <ul>
                  <li className="textBottom">
                    Витринные <br /> холодильники
                  </li>
                </ul>
                <div className="bbb">
                  <button className="btn"><Link style={{color:"#fff"}} to={"/contact"}>Вызвать мастера</Link></button>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={assets.chiller} alt="" className="topImagee" />
              <div className="topButton">
                <ul>
                  <li className="textBottom">Чиллеры</li>
                </ul>
                <div className="bbb">
                  <button className="btn"><Link style={{color:"#fff"}} to={"/contact"}>Вызвать мастера</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionContainer;
