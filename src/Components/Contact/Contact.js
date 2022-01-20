import React from 'react';

const Contact = () => {

    return (
        <div id="contact" className="contact-clean col-lg-8 offset-lg-2" style={{padding : '20px', borderRadius : '10px',marginTop : '80px', backgroundColor : 'rgba(0, 0, 0, 0.3)'}}>
            <form className={"form"}>
                <h2 className="text-center" style={{color : '#ef4035'}}>Contact Me</h2>
                <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Name" /></div>
                <div className="form-group"><input className="form-control" type="text" name="phone" placeholder="PhoneNumber" /></div>
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                <div className="form-group"><textarea className="form-control" name="message" placeholder="Message" rows="5" ></textarea></div>
                <div className="form-group"><button className="btn btn-primary" type="submit">send </button></div>
            </form>
        </div>
    );
}

export default Contact;