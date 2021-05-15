import React, { useEffect, useState } from 'react'
import './Nav.css';

const Nav = () => {
    // To disappear the nav bar if you scroll down
    const [show, handleShow] = useState(false);

    const tansitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    // this code will only run the components Mount
    useEffect(()=> {
        window.addEventListener('scroll', tansitionNavBar);
        return () => window.removeEventListener('scroll', tansitionNavBar);
    },[]);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
        <img 
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
        alt="net__logo"
        />

        <img 
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
        alt="avatar__logo"
        />  
        </div>
        </div>
    )
}

export default Nav
