import React from "react";
import Logo from '../img/Logo.png'
import '../styles/Header.css'


const Header = () => {
    return(
        <>
        <nav className="navs">
            <div className="logo">
                <img src={Logo} alt="Ehcc Logo" />
            </div>
            <div className="text">
                <h1>Enthronement Assembly</h1>
                <p>activating and actualizing God’s royalty in you..</p>
            </div>
            <div></div>
        </nav>
        </>
    )


}

export default Header