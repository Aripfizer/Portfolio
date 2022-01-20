import React, {useState} from 'react';

function Item(props) {
    /*const[] = useState("");*/

    const MouseOverHandle = (e) => {
        e.preventDefault();
        console.log(e.target);
        const div = e.target.firstChild;
        console.log(div);
    }
    return (
            <div className="service-item">
                <div className="logo-container">
                    <span className="service-logo">{props.logo}</span>
                </div>
                <div>
                    <h2 className="service-item-title">{props.title}</h2>
                    <p>{props.children}</p>
                </div>
            </div>
    );
}

export default Item;
