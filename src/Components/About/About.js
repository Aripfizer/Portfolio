import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../images/img7.jpg";


function About() {
    return (
        <div id="about" className="container-fluid about-wrapper">
            <div className="row">
                <div className="col-lg-6" id="img-container">
                    <img src={image} alt="Image de Ariel Dossou" id="header-img"/>
                </div>
                <div className="col-lg-6" id="dev-container">
                    <section>
                        <h2 >ABOUT ME</h2>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    </section>
                </div>
            </div>

        </div>
    );
}

export default About;
