import React from 'react';
import '../scss/HeaderSec.scss';
import decoration from '../assets/Decoration.svg'
import { BrowserRouter as Router, Route, Switch, Link as Link1 } from 'react-router-dom';


function HeaderSec() {
    return (
        <section className="HeaderSec">
        <div className="HomePicture"></div>
        <div className="HomeHeaderThird">
        <p>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</p>
        <img src={decoration}></img>
        <div className="HeaderButtons">
        <button className="button">
        <Link1 className="link5" to="/logowanie">ODDAJ <br></br>RZECZY</Link1>
        </button>
        <button className="button">
        <Link1 className="link5" to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link1>
        </button>
        </div>
        </div>


        </section>
        
    
    )
};

export default HeaderSec;