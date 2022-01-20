import React from 'react';
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo2 from "../../logo2.PNG";
import {FaBars} from "react-icons/all";


const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo2} className="logo"/> <span className="logo-Text">LePotentiel</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars color="#fff"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">about me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav>
    )
}
export default Navbar;