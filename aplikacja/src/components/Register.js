
import '../scss/Register.scss';
import decoration from '../assets/Decoration.svg';
import { BrowserRouter as Router, Route, Switch, Link as Link1 } from 'react-router-dom';
import React, { useState } from 'react';


function Register() {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [passwordcheck, setPasswordcheck]=useState('');

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

    let resultPasswordcheck;
    if (passwordcheck !== password ) {
    resultPasswordcheck = "Podane hasło jest inne!"
    console.log(resultPasswordcheck);
    }

    return (
        <div className="Register">
            <p>Załóż konto</p>
            <img src={decoration}></img>
            <form className="formRegister">
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <h3>{resultEmail}</h3>
              <label>Hasło</label>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <h3>{resultPassword}</h3>
              <label>Powtórz hasło</label>
              <input type="text" value={passwordcheck} onChange={(e) => setPasswordcheck(e.target.value)}></input>
              <h3>{resultPasswordcheck}</h3>
        </form>
          <div className="buttons">
          <Link1 className="link1" to="/logowanie">Zaloguj się</Link1>
            <button>Załóż konto</button>
          </div>

        </div>
    )
};

export default Register;