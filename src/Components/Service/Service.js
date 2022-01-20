import React from 'react';
import {AiOutlineGoogle, CgFacebook, CgScreenMirror, DiCodeBadge, FaLaptopCode} from "react-icons/all";
import Item from "./Item/Item";

function Service() {
    return (
        <div id="service" className="container-fluid service-bg-wrapper">
            <div className="row">
                <h1 className="col-lg-12 service-title">My Services</h1>
            </div>
            <div className="container">
                <div className="row service-wrapper">
                    <Item title="Web Design" logo={<CgScreenMirror color="white"/>}>I approach project individually and allways focus on the result</Item>
                    <Item title="Web Development" logo={<DiCodeBadge color="white"/>}>your website will be build whith an new proven technologies</Item>
                    <Item title="Facebook Ads" logo={<CgFacebook color="white"/>}>your potential clients well see your services or production on Facebook</Item>
                    <Item title="Google Ads" logo={<AiOutlineGoogle color="white"/>}>Your service or product will appear at the top of the Google search</Item>

                </div>
            </div>

        </div>
    );
}

export default Service;
