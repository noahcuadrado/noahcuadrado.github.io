import { React } from 'react';
import { TbArrowUpRight } from "react-icons/tb";
import MagicButton from '../../tools/MagicButton.js';
import MainContainer from '../common/maincontainer/MainContainer.js';
import nightmode from '../../images/night_mode.png';

function Body() 
{
  function openLink(link, local = false) {
    if (local)
        window.open(link, '_self');
    else
        window.open(link, '_blank');
  }

  //function mailto links to 'mailto:"noahcuadradosuarez@gmail.com"'
  function mailto() {
    window.location.href = 'mailto:"noahcuadradosuarez@gmail.com"';
  }

  return (
    <div className="body p-3">
        <div className='row mb-4'>
            <div className='col-8'>
                <MainContainer className='h-100'>
                    <div className='mb-2'>
                        <span className='big-text'>My most recent project</span>
                    </div>
                    <div>
                        <span className='small-text'>Night Mode 🌙</span>
                    </div>
                    <div className='image-container mt-4 mb-4 overflow-hidden'>
                        <img src={nightmode} alt="Night Mode" className="AAAAAAAAAAAAAHHHHHHHHH" />
                    </div>
                    <div>
                        <MagicButton type="animated" className="btn small-text p-3 me-3" onClick={() => openLink("/nightmode", true)}>Play the game!</MagicButton>
                        <MagicButton type="animated" className="btn small-text p-3" onClick={() => openLink("https://noahuxui.itch.io/night-mode")}>
                            <span className='me-1'>Visit</span>
                            <TbArrowUpRight />
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
                            <MagicButton type="animated" className="btn small-text p-3 mt-5" onClick={() => mailto()}>Get in touch</MagicButton>
                        </div>
                    </MainContainer>
                </div>
                <div className='h-50 '>
                    <MainContainer className='h-100'>
                        <div className='big-text'>
                            <span>Looking for games?</span>
                        </div>
                        <div className='mid-text'>
                            <span>Visit my itch.io!</span>
                        </div>
                        <MagicButton type="animated" className="btn small-text p-3 mt-5" onClick={() => openLink("https://noahuxui.itch.io")}>
                            <span className='me-1'>Visit</span>
                            <TbArrowUpRight />
                        </MagicButton>
                    </MainContainer>
                </div>
            </div>
        </div>
        <div className='row mb-1'>
            <div className='col'>
                <MainContainer className=''>
                    <div className='mid-text'>
                        <span>Currently</span>
                    </div>
                    <div className='mid-text'>
                        <span>Open to work</span>
                    </div>
                    <MagicButton type="animated" className="btn small-text p-3 mt-5" onClick={() => mailto()}>Open to work</MagicButton>
                </MainContainer>
            </div>
            <div className='col'>
                <MainContainer className=''>
                    <div className='mid-text'>
                        <span>Currently</span>
                    </div>
                    <div className='mid-text'>
                        <span>Open to work</span>
                    </div>
                    <MagicButton type="animated" className="btn small-text p-3 mt-5" onClick={() => mailto()}>Open to work</MagicButton>
                </MainContainer>
            </div>
            <div className='col'>
                <MainContainer className=''>
                    <div className='mid-text'>
                        <span>Currently</span>
                    </div>
                    <div className='mid-text'>
                        <span>Open to work</span>
                    </div>
                    <MagicButton type="animated" className="btn small-text p-3 mt-5" onClick={() => mailto()}>Open to work</MagicButton>
                </MainContainer>
            </div>
        </div>
    </div>
  );
}

export default Body;
