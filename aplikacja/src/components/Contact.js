
import '../scss/Contact.scss';
import decoration from '../assets/Decoration.svg'
import {Element} from'react-scroll';
import background from '../assets/BackgroundImage.png';
import fb from '../assets/Facebook.png';
import insta from '../assets/Instagram.png';
import React, { useEffect, useState } from "react";





function Contact() {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');
    const [isPending, setIsPending]=useState(true);

    let resultMessage;
    if (message.length > 0  && message.length < 120  ) {
    resultMessage = "Wiadomość musi mieć conajmniej 120 znaków!"
    console.log(resultMessage);
    } 

    let resultName;
    if (name.includes(" ") ) {
    resultName = "Podane imię jest nieprawidłowe!"
    console.log(resultName);
    } 

    // let resultEmail
    // const emailValidator = reqiure('email-validator');

    // if (emailValidator.validate("test@email.com")) {
    //     resultEmail = "poprawny"
    // }

    let resultEmail;
    if (!email.includes("@" && ".") ) {
    resultEmail = "Podane email jest nieprawidłowy!"
    console.log(resultEmail);
    } 

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = { name, email, message };
        console.log(newInfo);

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newInfo)
        }).then((response) => response.json())
        .then((newInfo) => {
          console.log(newInfo);
          setIsPending(false);
        })
      }

      let infoMessage;
          if (isPending == false) {
            infoMessage= "Wiadomość została wysłana! Wkrótce się skontaktujemy."
          }

    return (
        <Element name="Contact">
     <div className="Contact">
        <div className="Contact-picture">
            <img src={background}></img>
        </div>
         <div className="Contact-form">
        <div>
             <p>Skontaktuj się z nami</p>
            <img src={decoration}></img>
        </div>
            <div className="successMessage">
            <h2>{infoMessage}</h2>
            </div>
         <form className="formContact" onSubmit={handleSubmit}>
            <div className="div">
            <div className="divname">
            <label> Wpisz swoje imię</label>
            <input type="text" placeholder="Krzysztof" value={name} onChange={(e) => setName(e.target.value)}></input>
            <h3>{resultName}</h3>
            </div>
            <div className="divemail">
            <label> Wpisz swój email</label>
            <input type="text" placeholder="abc@xyz.pl" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
            <h3>{resultEmail}</h3>
            </div>
            </div>
            <label> Wpisz swoją wiadomość</label>
            <input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." value={message} onChange={(e) => setMessage(e.target.value)}></input>
            <h3>{resultMessage}</h3>
           <button className="butttonform">Wyślij</button>
        </form>
        
         </div>
         <div className="footer">
             <div></div>
             <h4>Copyright by Coders Lab</h4>
             <div>
             <img src={fb}></img>
             <img src={insta}></img>
             </div>
         </div>
         
     </div>
     </Element>
       
    )
};

export default Contact;