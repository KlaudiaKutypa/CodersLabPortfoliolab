import React from 'react';
import '../scss/Home.scss';

import Aboutus from "./Aboutus";
import {Element} from'react-scroll';
import HeaderSec from './HeaderSec';
import ThreeColumns from './ThreeColumns';
import Steps from './Steps';
import Help from './Help';
import Contact from './Contact';


function Home() {
    return (
        <Element name="HomeEl">
            <div className="HomeFirstSec">
            <HeaderSec />
            </div>
            <div className="HomeSecondSec">
            <ThreeColumns />
            </div>
            <div className="HomeThirdSec">
            <Steps />
            </div>
            <div className="HomeFourSec">
            <Aboutus />
            </div>
            <div className="HomeFiveSec">
            <Help />
            </div>
            <div className="HomeSixSec">
            <Contact />
            </div>
        </Element>
    )
};

export default Home;