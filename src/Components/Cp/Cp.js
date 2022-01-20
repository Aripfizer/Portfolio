import React, {useEffect, useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import Service from "../Service/Service";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Cp() {
    return (
        <>
                <Navbar/>
                <Header/>
                <About/>
                <Service/>
                <Experience/>
                <Portfolio/>
                <Contact/>
                <Footer/>
        </>

    );
}

export default Cp;
