import {React} from 'react';

import "./magic-button.css";

const MagicButton = ({ type, ...props }) => 
{
    //type can be "static" or "animated"
    return (
        <button className={`magic-button ${type} ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};
export default MagicButton;