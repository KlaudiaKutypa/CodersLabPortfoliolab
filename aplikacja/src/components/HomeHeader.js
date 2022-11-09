import React from 'react';
import '../scss/HomeHeader.scss';
import '../scss/settings/_colors.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';



function HomeHeader() {
    return (
    
        <div className="HomeHeader">
            <div className="HomeHeaderFirst">
                <Link className="link1" to="/logowanie">Zaloguj</Link>
                <Link className="link2"to="/rejestracja">Załóż konto</Link>
            </div>
            <div className="HomeHeaderSecond">
                <Link className="link3" to="App">Start</Link>
                <Link2 className="link4" to="What" smooth={true} duration={1000}>O co chodzi?</Link2>
                <Link2 className="link4" to="Aboutus" smooth={true} duration={1000}>O nas</Link2>
                <Link2 className="link4" to="Help" smooth={true} duration={1000}>Fundacja i organizacje</Link2>
                <Link2 className="link4" to="Contact" smooth={true} duration={1000}>Kontakt</Link2>
            </div>
        </div>    

            
    )
};

export default HomeHeader;