import React from 'react';
import {AiFillGooglePlusCircle, CgTwitter, FaCopyright, FaFacebookMessenger} from "react-icons/all";


function App() {
    return (
        <div className="container-fluid footer-bg-wrapper">
            <div className="row footer-wrapper col-lg-8 offset-lg-2">
                <div className="col-lg-3 footer-item">
                    Cotonou City (+229) <br/>
                    +229 67180009 <br/>
                    arieldossou00@gmail.com
                </div>
                <div className="col-lg-3 footer-item">
                    HOME<br/>
                    ABOUT ME<br/>
                    SERVICES
                </div>
                <div className="col-lg-3 footer-item">
                    EXPERIENCE<br/>
                    PORTFOLIO<br/>
                    CONTACT
                </div>
                <div className="col-lg-3 footer-item">
                    <span className="footer-icon"><FaFacebookMessenger/> </span>
                    <span className="footer-icon"><AiFillGooglePlusCircle/></span>
                    <span className="footer-icon"><AiFillGooglePlusCircle/></span>
                    <span className="footer-icon"><CgTwitter/></span> <br/>
                    <span className="footer-cpr">CopyRight <FaCopyright/> 2022   <br/> All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
}

export default App;
