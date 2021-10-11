import React from 'react';
import '../scss/Aboutus.scss';
import {Element} from'react-scroll';
import decoration from '../assets/Decoration.svg'
import people from '../assets/People.png'
import signature from '../assets/Signature.svg'


function Aboutus() {
    return (
        <Element name="Aboutus">
        <div className="AboutusSec">
            <div className="left">
                <div className="left-top">
                    <p>O nas</p>
                    <img src={decoration}></img>
                    <h4 className="description">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyes pea prairie turnip leek lentil turnip greens parsnip.</h4>
                    <img src={signature} className="sign"></img>
                 </div>
                {/* <div className="left-bottom">
                    <img src={signature}></img>
                </div> */}
            </div>
            <div className="right">
                <img src={people}></img>
            </div>
        </div>
        </Element>
    )
};

export default Aboutus;