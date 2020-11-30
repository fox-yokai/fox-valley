import React from 'react';
import './Page.css';

const Page = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center mt-5 mb-5">
                    <div className="card" style={{"width": "36rem"}}>
                        <img src={props.logoImg} className="card-img-top" alt={props.logoImgAlt} />
                        <div className="card-body">
                            <h2 className="card-title">{props.heading}</h2>
                                {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Page;