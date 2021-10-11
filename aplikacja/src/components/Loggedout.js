import React from 'react';
import '../scss/Loggedout.scss';
import decoration from '../assets/Decoration.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Loggedout() {
    return (
        <div className="Loggingout">
            <p>Wylogowanie nastąpiło pomyślnie!</p>
            <img src={decoration}></img>
            <Link className="link3" to="/">Strona główna</Link>
        </div>
    )
};

export default Loggedout;