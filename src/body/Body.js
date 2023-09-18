import { React, useEffect, useState } from 'react';
import MagicButton from '../juan/MagicButton.js';
import MainContainer from './maincontainer/MainContainer.js';
import { TbArrowUpRight } from "react-icons/tb";

//import all images from ../images/*
/*
import image1 from '../images/rectangle332388-bitn-300h.png';
import image2 from '../images/rectangle332388-7ucr-300h.png';
import image5 from '../images/rectangle332381-5byi-300h.png';
import image6 from '../images/rectangle332381-f0v-300h.png';
import image7 from '../images/rectangle332381-v2e-300h.png';
import image8 from '../images/vector2381-fn8w.svg';
import image9 from '../images/vector2381-nid.svg';
import image10 from '../images/vector2381-nwwa.svg';
import image11 from '../images/vector2381-twnr.svg';
*/
import image12 from '../images/rectangle342381-zckf-200h.png';


import './Body.css';
function Body() {
  const [theme, setTheme] = useState("light");
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
    return "";
  }

  useEffect(() => {
    let theme = getCookie('theme');
    if (theme !== undefined && theme !== "") {
      //if(theme === "dark")
      //  selectTheme(theme);

      //TODO: activate back dark theme
    }
    selectTheme("light");
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
                  noah cuadrado.
                </div>
                <div className="col-8">
                  <div className='d-flex flex-row-reverse'>
                    <a className='btn btn-dark me-1 small-text empty-button' href="#">games.</a>
                    <a className='btn btn-dark me-1 small-text empty-button' href="#">designs.</a>
                    <a className='btn btn-dark me-1 small-text empty-button' href="#">contact.</a>
                  </div>
                </div>
              </div>
            </MainContainer>
          </div>
          <div className="body p-3">
            <div className='row mb-4'>
              <div className='col-8'>
                <MainContainer className='h-100'>
                  <div className='mb-2'><span className='big-text'>My most recent project</span></div>
                  <div><span className='small-text'>Rothio Tome Integrations’ Website</span></div>
                  <div className='image-container mt-4 mb-4'>
                    AAAAAAAAAAAAAHHHHHHHHH
                  </div>
                  <div>
                    <MagicButton type="animated" className="btn small-text p-3 me-3">Read the Case Study</MagicButton>
                    <MagicButton type="animated" className="btn small-text p-3">
                      <>
                        <span className='me-1'>Visit</span>
                        <TbArrowUpRight />
                      </>
                    </MagicButton>
                  </div>
                </MainContainer>
              </div>
              <div className='col-4 mb-2'>
                <div className='h-50 pb-3 mb-2'>
                  <MainContainer className='h-100'>
                    <div className='m-3'>
                      <div className='big-text'><span>I am currently</span></div>
                      <div className='mid-text'><span>Open to work</span></div>
                      <MagicButton type="animated" className="btn small-text p-3 mt-5">Get in touch</MagicButton>
                    </div>
                  </MainContainer>
                </div>
                <div className='h-50 '>
                  <MainContainer className='h-100'>
                    <div className='big-text'><span>Looking for games?</span></div>
                    <div className='mid-text'><span>Visit my itch.io!</span></div>
                    <MagicButton type="animated" className="btn small-text p-3 mt-5">
                      <>
                        <span className='me-1'>Visit</span>
                        <TbArrowUpRight />
                      </>
                    </MagicButton>
                  </MainContainer>
                </div>
              </div>
            </div>
            <div className='row mb-1'>
              <div className='col'>
                <MainContainer className=''>
                  <div className='mid-text'><span>Currently</span></div>
                  <div className='mid-text'><span>Open to work</span></div>
                  <MagicButton type="animated" className="btn small-text p-3 mt-5">Open to work</MagicButton>
                </MainContainer>
              </div>
              <div className='col'>
                <MainContainer className=''>
                  <div className='mid-text'><span>Currently</span></div>
                  <div className='mid-text'><span>Open to work</span></div>
                  <MagicButton type="animated" className="btn small-text p-3 mt-5">Open to work</MagicButton>
                </MainContainer>
              </div>
              <div className='col'>
                <MainContainer className=''>
                  <div className='mid-text'><span>Currently</span></div>
                  <div className='mid-text'><span>Open to work</span></div>
                  <MagicButton type="animated" className="btn small-text p-3 mt-5">Open to work</MagicButton>
                </MainContainer>
              </div>
            </div>
          </div>
          <div className="footer p-3">
            <img src={image12} alt="Rectangle342381" className="noahcuadradocomhomepage1-rectangle34" />
            <span>
              <span>Designed by Noah Cuadrado - Developed by Demiterra</span>
              <br />
              <span>Copyright © 2023 by Noah Cuadrado. All Rights Reserved</span>
            </span>
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
