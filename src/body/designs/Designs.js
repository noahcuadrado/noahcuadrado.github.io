import { React } from 'react';
import MagicButton from '../../tools/MagicButton.js';
import MainContainer from '../common/maincontainer/MainContainer.js';

import nightmode from '../../images/night_mode.png';
import shapeg from '../../images/rectangle332213-ox3r-300h.png';
import typeg from '../../images/rectangle332245-9pa-300h.png';
import maddi from '../../images/maddi.png';
import coinaway from '../../images/coinaway.png';

function Designs() 
{

  function openLink(link, local = false) {
    if (local)
        window.open(link, '_self');
    else
        window.open(link, '_blank');
  }

  return (
    <div className="body p-3">
        <div className='mb-5 d-flex justify-content-center'>
            <MainContainer className='w-50'>
                <div className='text-center'>
                    <span className='big-text'>Night Mode 🌙</span>
                </div>
                <div className='image-container mt-4 mb-4 overflow-hidden no-background'>
                    <img src={nightmode} alt="Night Mode" />
                </div>
                <div className='d-flex justify-content-center'>
                    <MagicButton type="animated" className="btn small-text p-3 me-3" onClick={() => openLink("/nightmode")}>Play the game!</MagicButton>
                </div>
            </MainContainer>
        </div>
        

        <div className='mb-5 d-flex justify-content-center'>
            <MainContainer className='w-50'>
                <div className='text-center'>
                    <span className='big-text'><span className='color-yellow'>J</span>ust a Coin Awa<span className='color-pink'>y</span></span>
                </div>
                <div className='image-container mt-4 mb-4 overflow-hidden no-background'>
                    <img src={coinaway} alt="Just a Coin Away" />
                </div>
                <div className='d-flex justify-content-center'>
                    <MagicButton type="animated" className="btn small-text p-3 me-3" onClick={() => openLink("/coinaway")}>Play the game!</MagicButton>
                </div>
            </MainContainer>
        </div>

        <div className='mb-5 d-flex justify-content-center'>
            <MainContainer className='w-50'>
                <div className='text-center'>
                    <span className='big-text'>MADDI</span>
                </div>
                <div className='image-container mt-4 mb-4 overflow-hidden no-background'>
                    <img src={maddi} alt="Maddi" />
                </div>
                <div className='d-flex justify-content-center'>
                    <MagicButton type="animated" className="btn small-text p-3 me-3" onClick={() => openLink("/maddi")}>Play the game!</MagicButton>
                </div>
            </MainContainer>
        </div>

        <div className='mb-5 d-flex justify-content-center'>
            <MainContainer className='w-50'>
                <div className='text-center'>
                    <span className='big-text'>Type.<span className='color-gray'>|</span></span>
                </div>
                <div className='image-container mt-4 mb-4 overflow-hidden no-background'>
                    <img src={typeg} alt="Type" />
                </div>
                <div className='d-flex justify-content-center'>
                    <MagicButton type="animated" className="btn small-text p-3 me-3" onClick={() => openLink("/type")}>Play the game!</MagicButton>
                </div>
            </MainContainer>
        </div>

        <div className='mb-5 d-flex justify-content-center'>
            <MainContainer className='w-50'>
                <div className='text-center'>
                    <span className='big-text'>Shape <span className='fw-bold'>48</span></span>
                </div>
                <div className='image-container mt-4 mb-4 overflow-hidden no-background'>
                    <img src={shapeg} alt="Shape 48" />
                </div>
                <div className='d-flex justify-content-center'>
                    <MagicButton type="animated" className="btn small-text p-3 me-3" onClick={() => openLink("/shape48")}>Play the game!</MagicButton>
                </div>
            </MainContainer>
        </div>
    </div>
  );
}

export default Designs;
