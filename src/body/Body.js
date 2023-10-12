import { React } from 'react';
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
  
  return (
    <>
      <div id="main_page" className="container">
        <div className="header p-3">
          <MainContainer className="menu">
            <div className="row">
              <div className="col-12 col-md-6 logo-text">
                <a href="/" className='btn btn-dark me-1 mid-text empty-button'>
                  noah cuadrado.
                </a>
              </div>
              <div className="col-12 col-md-6 p-2">
                <div className='d-flex justify-content-end flex-wrap'>
                  <a className='btn btn-dark me-1 small-text empty-button' href="/games">games.</a>
                  <a className='btn btn-dark me-1 small-text empty-button' href="https://www.behance.net/noahcuadradodesign" target='_blank' rel="noreferrer">designs.</a>
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
          <img src={image12} alt="Rectangle342381" className="footer-separator" />
          <div className='d-flex justify-content-center'>
            <span className="text-center">
              <span>Designed by Noah Cuadrado - Developed by Demiterra</span>
              <br />
              <span>Copyright © 2023 by Noah Cuadrado. All Rights Reserved</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
