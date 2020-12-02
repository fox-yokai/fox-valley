import React from 'react';
import "./style.css";
import { TiSocialInstagram } from 'react-icons/ti';
import { IconContext } from 'react-icons';


const InstagramIcon = () => {
    return (
        <IconContext.Provider value={{ size: "1.5em", className:"react-icons-instagram" }}>
            <div>
                <TiSocialInstagram />
            </div>
        </IconContext.Provider>
    );
};

export default InstagramIcon;