import React from "react";
import "./Footer.css";
import Instagram from "../../assets/img/Instagram.png";
import Telegram from "../../assets/img/Telegram.png";
import Linkeln from "../../assets/img/Linkedin.png";
import Youtube from "../../assets/img/Youtube.png";
import Facebook from "../../assets/img/Facebook.png";
import Logo from '../../assets/svg/logo (5).png'
const Footer = () => {
  return (
    <footer className="foot">
      <div className="con">
        <div className="foot-top">
          <div className="sec">
           <img src={Logo} alt="logo" />
            <p>
              Onlayn platformaga tegishli barcha materiallar "NAJOT TA‘LIM
              MARKAZI" MCHJning mulki hisoblanadi. Ushbu materiallardan onlayn
              ta‘lim olishdan tashqari nusxa ko‘chirish, tarqatish va boshqa
              maqsadlarda foydalanish qonunan man etiladi.
            </p>
          </div>
          <div className="sec">
            <h2>Ma'lumotlar</h2>
            <ul className="list">
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>FAQ</p>
              </li>
              <li>
                <p>Ommaviy oferta</p>
              </li>
            </ul>
          </div>
          <div className="sec">
          <h2>Ommabop kurslar</h2>
            <ul className="list">
              
              <li>
                <p>Foundation dasturlash</p>
              </li>
              <li>
                <p>Foundation dizayn</p>
              </li>
              <li>
                <p>.NET</p>
              </li>
              <li>
                <p>Grafik dizayn bootcamp</p>
              </li>
            </ul>
          </div>
          <div className="sec">
            <h2>Bizning loyihalar</h2>
            <ul className="list">
              <li>
                <p>Osmondagi bolalar</p>
              </li>
              <li>
                <p>0 dan 1 gacha</p>
              </li>
              <li>
                <p>Abutech</p>
              </li>
              <li>
                <p>Alohida mavzu</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-middle">
       
            <div className="left">
              <h2>Tarmoqlar:</h2>
              <br />
              <div className="icons">
                <img src={Telegram} alt="telegram" />
                <img src={Facebook} alt="facebook" />
                <img src={Youtube} alt="youtube" />
                <img src={Linkeln} alt="linkeln" />
                <img src={Instagram} alt="instagram" />
              </div>
            </div>
            <div className="right">
              <h2>Telefon raqam:</h2>
              <br />
              <p>+ 998 (99) 293 75 95</p>
            </div>
          
          
        </div>
        <div className="foot-bottom">
          <ul>
            <li>
              <h2>
                Toshkent shahri, Chilonzor9, <br /> Qatortol ko‘chasi
              </h2>
            </li>
            <li>
              <p>
                Mo‘ljal: Rayhon milliy taomlari qarshi <br /> tomoni, 1- va
                2-uylar orqa tomoni.
              </p>
            </li>
            <li>
              <p>
                © Najot Ta’lim, 2022 barcha <br /> huquqlar himoyalangan.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
