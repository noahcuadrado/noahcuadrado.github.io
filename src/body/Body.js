import { React, useEffect, useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import MainContainer from './common/maincontainer/MainContainer.js';
import Home from './home/Home.js';
import Games from './games/Games.js';
import Designs from './designs/Designs.js';

import NightMode from './games_frames/nightmode/NightMode.js';
import JustACoinAway from './games_frames/coinaway/JustACoinAway.js';
import Maddi from './games_frames/maddi/Maddi.js';
import Type from './games_frames/type/Type.js';
import Shape48 from './games_frames/shape/Shape.js';

import image12 from '../images/rectangle342381-zckf-200h.png';
import './Body.css';

function Body() {
  const [theme, setTheme] = useState(getCookie('theme'));
  const [themeSelected, setThemeSelected] = useState(false);

  function changeBackground(on) {
    if (on)
      setTheme("dark");
    else
      setTheme("light");
  }
  function selectTheme(theme) {
    setTheme(theme);
    setThemeSelected(true);
    setCookie("theme", theme, 30);
  }
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "light";
  }
  useEffect(() => {
    let themec = getCookie('theme');
    if (themec !== undefined && themec !== "") {
      selectTheme(themec);
    }else{
      selectTheme("light");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <>
      {themeSelected &&
        <div id="main_page" className={`container ${theme === "dark" ? "dark" : ""}`}>
          <div className="header p-3">
            <MainContainer className="menu">
              <div className="row">
                <div className="col-4 logo-text">
                  <a href="/" className='btn btn-dark me-1 mid-text empty-button'>
                    noah cuadrado.
                  </a>
                </div>
                <div className="col-8">
                  <div className='d-flex flex-row-reverse'>
                    <a className='btn btn-dark me-1 small-text empty-button' href="/games">games.</a>
                    <a className='btn btn-dark me-1 small-text empty-button' href="/designs">designs.</a>
                    <a className='btn btn-dark me-1 small-text empty-button' href='mailto:"noahcuadradosuarez@gmail.com"'>contact.</a>
                  </div>
                </div>
              </div>
            </MainContainer>
          </div>

          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/designs" element={<Designs />} />
              <Route path="/games" element={<Games />} />

              <Route path="/nightmode" element={<NightMode />} />
              <Route path="/coinaway" element={<JustACoinAway />} />
              <Route path="/maddi" element={<Maddi />} />
              <Route path="/type" element={<Type />} />
              <Route path="/shape48" element={<Shape48 />} />
            </Routes>
          </BrowserRouter>

          <div className="footer p-3">
            <img src={image12} alt="Rectangle342381" className="noahcuadradocomhomepage1-rectangle34" />
            <div className='d-flex justify-content-center'>
              <span className="text-center">
                <span>Designed by Noah Cuadrado - Developed by Demiterra</span>
                <br />
                <span>Copyright © 2023 by Noah Cuadrado. All Rights Reserved</span>
              </span>
            </div>
          </div>
        </div>
      }
      {
        !themeSelected &&
        <div id="theme_selector" className={`theme_selector ${theme === "dark" ? "dark" : ""}`}>
          <div className="vertical_center">
            <div className="column column-1">
              <div className="flex">
                <button id="light-button" className="button light" onClick={() => selectTheme('light')}>light.</button>
              </div>
            </div>
            <div className="column column-2">
              <div className="flex">
                <button className="button dark" onMouseEnter={() => changeBackground(true)} onMouseLeave={() => changeBackground(false)} onClick={() => selectTheme('dark')}>dark.</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Body;
