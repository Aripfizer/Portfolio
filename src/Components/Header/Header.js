import React from "react";
import ReactTyped from "react-typed";

const Header = () => {
    return (
            <div id="home" className="header-wrapper">
                <div className="main-info">
                    <h1>Web development and websites promo</h1>
                    <ReactTyped
                        className="typed-text"
                        strings={["Hello !", "I am Ariel !", "Ariel DOSSOU", "I am developper"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop={20}
                    />
                    <a href="#" className="btn-main-offer">Contact-me</a>
                </div>
            </div>
    )
}

export default Header;