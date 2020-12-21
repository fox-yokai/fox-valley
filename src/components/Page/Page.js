import React from 'react';
import './Page.css';

const Page = (props) => {
    return (
        <section className="container">
            <div className="row">
                <div className="col d-flex justify-content-center mt-5 mb-5">
                    <div className="card" style={{"width": "36rem"}}>
                        <img src={props.logoImg} className="card-img-top" alt={props.logoImgAlt} />
                        <div className="card-body">
                            <h1 className="card-title text-center mt-3 mb-5">{props.heading}</h1>
                                {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    );
};

export default Page;