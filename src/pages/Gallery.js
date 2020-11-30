import React from 'react';
import Page from '../components/Page/Page';
import ImgComp from "../components/ImgComp/ImgComp";
import King from '../images/king.jpg';
import Kaim from '../images/kaim.jpg';
import MiniMe from '../images/mini-me.jpg';
import Ro from '../images/ro.jpg';
import Yancha from '../images/yancha.jpg';

class Gallery extends React.Component {
    render() {
        return (
        <Page heading="Gallery">
            <div className="row">
                <ImgComp img={King} alt="Teddy-style King the African Wild Dog" />
                <ImgComp img={Kaim} alt="Teddy-style Kaim the fox" />
                <ImgComp img={MiniMe} alt="Anthro-style Etoile the nekomata" />
                <ImgComp img={Ro} alt="Teddy-style Ro the dog" />
                <ImgComp img={Yancha} alt="Kuttari-style Yancha the fox yokai" />
            </div>
        </Page>
        );
    }
}

export default Gallery;