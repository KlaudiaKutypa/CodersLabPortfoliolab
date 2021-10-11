import React, { useState } from 'react';
import '../scss/Logging.scss';
import decoration from '../assets/Decoration.svg';
import { BrowserRouter as Router, Route, Switch, Link as Link1 } from 'react-router-dom';



function Logging() {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  let resultEmail;
    if (!email.includes("@" && ".") ) {
    resultEmail = "Podane email jest nieprawidłowy!"
    console.log(resultEmail);
    } 

    let resultPassword;
    if (password.length < 6 && password.length > 0 ) {
    resultPassword = "Podane hasło jest za krótkie!"
    console.log(resultPassword);
    }

    return (
        <div className="Logging">
            <p>Zaloguj się</p>
            <img src={decoration}></img>
            <form className="formLogging">
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <h3>{resultEmail}</h3>
              <label>Hasło</label>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <h3>{resultPassword}</h3>
              
        </form>
          <div className="buttons">
            <Link1 className="link2"to="/rejestracja">Załóż konto</Link1>
            <button>Zaloguj się</button>
          </div>

        </div>
    )
};

export default Logging;