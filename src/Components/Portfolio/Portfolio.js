import React from 'react';
import img1 from '../../images/img8.jpg';
import img2 from '../../images/img7.jpg';
import img3 from '../../images/img4.jpg';
import img4 from '../../images/img5.jpg';

function Portfolio() {
    return (
        <div id="portfolio" className="container-fluid pf-wrapper">
            <div className="row">
                <h2 className="col-lg-12 pf-title">Portfolio</h2>
            </div>
            <div className="row">
                <img className="col-lg-2 col-md-6 h4 pf-img img-thumbnail" src={img1} alt="image1 Portfolio AriKing"/>
                <img className="col-lg-2 col-md-6 h4 pf-img img-thumbnail" src={img2} alt="image2 Portfolio AriKing"/>
                <img className="col-lg-2 col-md-6 h4 pf-img img-thumbnail" src={img3} alt="image3 Portfolio AriKing"/>
                <img className="col-lg-2 col-md-6 h4 pf-img img-thumbnail" src={img4} alt="image4 Portfolio AriKing"/>
            </div>
        </div>
    );
}

export default Portfolio;
