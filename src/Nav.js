import React, { useState, useEffect } from 'react';
import logo from './download.png';
import icon from './extraicon.png';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src={logo}
                alt="Netflix logo"
            />
            <img 
                className="nav__avatar"
                src={icon}
                alt="Netflix icon"
            />
        </div>
    )
}

export default Nav;
