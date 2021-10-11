import React from 'react';
import '../scss/Steps.scss';
import decoration from '../assets/Decoration.svg';
import icon1 from '../assets/Icon1.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import icon4 from '../assets/Icon4.png';
import { BrowserRouter as Router, Route, Switch, Link as Link1 } from 'react-router-dom';
import {Element} from'react-scroll';



function Steps() {
    return (
        <Element name="What">
     <div className="Steps">
         <div className="firstStep">
          <p>Wystarczą 4 proste kroki</p>
          <img src={decoration}></img>
         </div>
         <div className="secondStep">
             <div className="secondStepsec">
             <img src={icon1}></img>
             <h3>Wybierz rzeczy</h3>
             <p><br />ubrania, zabawki, sprzęt i inne</p>
             </div>
             <div className="secondStepsec">
             <img src={icon2}></img>
             <h3>Spakuj je</h3>
             <p><br />skorzystaj z worków na śmieci</p>
             </div>
             <div className="secondStepsec">
             <img src={icon3}></img>
             <h3>Zdecyduj komu chcesz pomóc</h3>
             <p><br />wybierz zaufane miesjce</p>
             </div>
             <div className="secondStepsec">
             <img src={icon4}></img>
             <h3>Zamów kuriera</h3>
             <p><br />kurier przyjedzie w dogodnym terminie</p>
             </div>
          
         </div>
         <div className="thirdStep">
          <button>
          <Link1 className="link6" to="/logowanie">ODDAJ <br />RZECZY</Link1></button>
         </div>
     </div>
     </Element>
       
    )
};

export default Steps;