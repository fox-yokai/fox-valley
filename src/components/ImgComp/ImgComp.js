import React from 'react'

const ImgComp = (props) => {
    return (
        <img src={props.img} className="rounded mx-auto d-block mt-2 mb-2" alt={props.alt} style={{"width": "10rem"}}></img>
    );
};

export default ImgComp;
