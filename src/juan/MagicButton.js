import {React} from 'react';

import "./magic-button.css";

const MagicButton = props => 
{
    return (
        <>
            <div class="button">
                <button class="inside-button static">Open to work</button>
            </div> 
            <div class="button">
                <button class="inside-button animated">Open to work</button>
            </div>
        </>
        
    );
};
export default MagicButton;