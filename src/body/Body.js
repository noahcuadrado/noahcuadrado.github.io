import {React, useEffect, useState} from 'react';
import MagicButton from '../juan/MagicButton.js';

//import all images from ../images/*
import image1 from '../images/rectangle332388-bitn-300h.png';
import image2 from '../images/rectangle332388-7ucr-300h.png';
import image5 from '../images/rectangle332381-5byi-300h.png';
import image6 from '../images/rectangle332381-f0v-300h.png';
import image7 from '../images/rectangle332381-v2e-300h.png';
import image8 from '../images/vector2381-fn8w.svg';
import image9 from '../images/vector2381-nid.svg';
import image10 from '../images/vector2381-nwwa.svg';
import image11 from '../images/vector2381-twnr.svg';
import image12 from '../images/rectangle342381-zckf-200h.png';


import './Body.css';
function Body() {
  const [theme, setTheme] = useState("light");
  const [themeSelected, setThemeSelected] = useState(false);


  function changeBackground(on){
    if(on)
      setTheme("dark");
    else
      setTheme("light");
  }
  function selectTheme(theme){
      setTheme(theme);
      setThemeSelected(true);
      setCookie("theme", theme, 30);
  }
  function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
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
    if(theme !== undefined && theme !== "")
    {
        if(theme === "dark")
          selectTheme(theme);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      { themeSelected && 
          <div id="main_page" className={theme === "dark" ? "dark" : ""}>
            <div className="noahcuadradocomhomepage1-container">
              <div className="noahcuadradocomhomepage1-noahcuadradocomhomepage1">
                <div className="noahcuadradocomhomepage1-topbar">
                  <a href="index.html" className="noahcuadradocomhomepage1-text">
                    noah cuadrado.
                  </a>
                  <div className="noahcuadradocomhomepage1-frame6">
                    <a href="https://noahuxui.itch.io/" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-text01">
                      <span>Games</span>
                    </a>
                    <a href="https://www.behance.net/noahcuadradodesign" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-text03">
                      Designs
                    </a>
                    <a href="https://es.linkedin.com/in/noahuxui" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-text04">
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
                <div className="noahcuadradocomhomepage1-mygames">
                  <div className="noahcuadradocomhomepage1-frame7">
                    <a href="https://noahuxui.itch.io/" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-text06">
                      <span className="noahcuadradocomhomepage1-text07">
                        Check out my games
                      </span>
                    
                    </a>
                  </div>
                  <div className="noahcuadradocomhomepage1-group9">
                    <a href="https://noahuxui.itch.io/shape48" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-link">
                      <div className="noahcuadradocomhomepage1-frame10">
                        <img
                          src={image1}
                          alt="Rectangle332388"
                          className="noahcuadradocomhomepage1-rectangle33"
                        />
                        <div className="noahcuadradocomhomepage1-frame9">
                          <span className="noahcuadradocomhomepage1-text09">
                            <span>
                              <span>Shape48</span>
                              <br />
                              <span></span>
                            </span>
                          </span>
                          <span className="noahcuadradocomhomepage1-text14">
                            <span>
                              <span>
                                The classic 2048 game with a twist!What will your best
                                score be?Check out this color-coded progression game!
                              </span>
                              <br />
                              <span></span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href="https://noahuxui.itch.io/type" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-link01">
                      <div className="noahcuadradocomhomepage1-frame11">
                        <img src={image2} alt="Rectangle332388" className="noahcuadradocomhomepage1-rectangle331"/>
                        <div className="noahcuadradocomhomepage1-frame91">
                          <span className="noahcuadradocomhomepage1-text19">
                            <span>Type.|</span>
                          </span>
                          <span className="noahcuadradocomhomepage1-text21">
                            <span>
                              If you like writing for fun, or you’re a proffesional
                              mecanographist, check out how good are you at typing
                              random words!
                            </span>
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href="https://noahuxui.itch.io/" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-link02">
                      <div className="noahcuadradocomhomepage1-frame12">
                        <div className="noahcuadradocomhomepage1-group68">
                          <span className="noahcuadradocomhomepage1-text23">
                            <span>...</span>
                          </span>
                        </div>
                        <div className="noahcuadradocomhomepage1-frame92">
                          <span className="noahcuadradocomhomepage1-text25">
                            <span>Coming soon...</span>
                          </span>
                          <span className="noahcuadradocomhomepage1-text27">
                            <span>
                              <span>
                                There are more games on the way! If you want to get
                                updates whenever there's a new release, follow me on
                                itch.io.
                              </span>
                              <br />
                              <span></span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="noahcuadradocomhomepage1-mydesigns">
                  <div className="noahcuadradocomhomepage1-frame71">
                    <a
                      href="https://www.behance.net/noahcuadradodesign"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="noahcuadradocomhomepage1-text32"
                    >
                      <span className="noahcuadradocomhomepage1-text33">
                        Check out my designs
                      </span>
                      
                    </a>
                  </div>
                  <div className="noahcuadradocomhomepage1-frame14">
                    <a
                      href="https://www.behance.net/gallery/150994979/TCS-Design-System-Colour"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="noahcuadradocomhomepage1-link03"
                    >
                      <div className="noahcuadradocomhomepage1-frame101">
                        <img
                          src={image5}
                          alt="Rectangle332381"
                          className="noahcuadradocomhomepage1-rectangle332"
                        />
                        <div className="noahcuadradocomhomepage1-frame93">
                          <span className="noahcuadradocomhomepage1-text35">
                            <span>TCS Design System</span>
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.behance.net/gallery/147113905/UI-Design-Dark-Mode"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="noahcuadradocomhomepage1-link04"
                    >
                      <div className="noahcuadradocomhomepage1-frame13">
                        <img
                          src={image6}
                          alt="Rectangle332381"
                          className="noahcuadradocomhomepage1-rectangle333"
                        />
                        <div className="noahcuadradocomhomepage1-frame94">
                          <span className="noahcuadradocomhomepage1-text37">
                            <span>Dark Mode</span>
                            <br />
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.behance.net/gallery/128428207/UXUI-Design-Engagement-Features"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="noahcuadradocomhomepage1-link05"
                    >
                      <div className="noahcuadradocomhomepage1-frame121">
                        <img
                          src={image7}
                          alt="Rectangle332381"
                          className="noahcuadradocomhomepage1-rectangle334"
                        />
                        <div className="noahcuadradocomhomepage1-frame95">
                          <span className="noahcuadradocomhomepage1-text40">
                            Engagement Features
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="noahcuadradocomhomepage1-mytools">
                  <div className="noahcuadradocomhomepage1-frame71">
                    <a href="https://www.behance.net/noahcuadradodesign" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-text32">
                      <span className="noahcuadradocomhomepage1-text33">
                        Check out my tools
                      </span>
                    </a>
                  </div>
                  <div className="noahcuadradocomhomepage1-frame14">
                    <div className="noahcuadradocomhomepage1-frame101">
                      <MagicButton className="magic-button-source" type="animated">
                        Hire me
                      </MagicButton>
                    </div>
                  </div>
                </div>
                <div className="noahcuadradocomhomepage1-footer">
                  <div className="noahcuadradocomhomepage1-frame68">
                    <span className="noahcuadradocomhomepage1-text41">
                      <span>noah cuadrado.</span>
                    </span>
                    <div className="noahcuadradocomhomepage1-frame67">
                      <div className="noahcuadradocomhomepage1-frame66">
                        <span className="noahcuadradocomhomepage1-text43">
                          <span>Connect with me on social media.</span>
                        </span>
                      </div>
                      <div className="noahcuadradocomhomepage1-frame661">
                        <a href="https://www.linkedin.com/in/noahuxui" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-link06">
                          <img src={image8} alt="Vector2381" className="noahcuadradocomhomepage1-vector"/>
                        </a>
                        <a href="https://twitter.com/noahuxui" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-link07" >
                          <img src={image9} alt="Vector2381" className="noahcuadradocomhomepage1-vector1" />
                        </a>
                        <a href="https://discord.gg/yGZdUtbAXz" target="_blank" rel="noreferrer noopener" className="noahcuadradocomhomepage1-link08">
                          <img src={image10} alt="Vector2381" className="noahcuadradocomhomepage1-vector2"
                          />
                        </a>
                        <a rel="noreferrer noopener" href="https://mastodon.gamedev.place/@noahuxui" target="_blank" className="noahcuadradocomhomepage1-link09">
                          <img src={image11} alt="Vector2381" className="noahcuadradocomhomepage1-vector3"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="noahcuadradocomhomepage1-pages">
                    <a
                      href="https://noahuxui.itch.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="noahcuadradocomhomepage1-text45"
                    >
                      <span>Games</span>
                    </a>
                    <a
                      href="https://www.behance.net/noahcuadradodesign"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="noahcuadradocomhomepage1-text47"
                    >
                      <span>Designs</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/noahuxui/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="noahcuadradocomhomepage1-text49"
                    >
                      <span>Contact</span>
                    </a>
                  </div>
                  <div className="noahcuadradocomhomepage1-frame65">
                    <img src={image12} alt="Rectangle342381" className="noahcuadradocomhomepage1-rectangle34" />
                    <span className="noahcuadradocomhomepage1-text51">
                      <span>Designed by Noah Cuadrado - Developed by Demiterra</span>
                      <span>Copyright © 2023 by Noah Cuadrado. All Rights Reserved</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
      {
        !themeSelected && 
          <div id="theme_selector" className={`theme_selector ${theme === "dark" ? "dark" : "" }`}>
            <div className="vertical_center">
              <div className="column column-1">
                <div className="flex">
                  <button id="light-button" className="button light" onClick={()=>selectTheme('light')}>light.</button>
                </div>
              </div>
              <div className="column column-2">
                <div className="flex">
                  <button className="button dark" onMouseEnter={()=>changeBackground(true)} onMouseLeave={()=>changeBackground(false)} onClick={()=>selectTheme('dark')}>dark.</button>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

export default Body;
