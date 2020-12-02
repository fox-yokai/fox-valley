import React from 'react';
import { TiSocialTwitter } from 'react-icons/ti';
import { IconContext } from 'react-icons';

const TwitterIcon = () => {
    return (
        <IconContext.Provider value={{ color: "#00acee", size: "1.5em" , className: "react-icons-twitter" }}>
            <div>
                <TiSocialTwitter />
            </div>
        </IconContext.Provider>
    );
};

export default TwitterIcon;