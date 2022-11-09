
import '../scss/Help.scss';
import {Element} from'react-scroll';
import decoration from '../assets/Decoration.svg'
import React, { useEffect, useState } from "react";
export default Help;

const APIorg = "https://klaudiakutypa.github.io/CodersLabReact/db.json/organizations";
const APIfou = "https://klaudiakutypa.github.io/CodersLabReact/db.json/foundations";
const APIloc = "https://klaudiakutypa.github.io/CodersLabReact/db.json/locals";
// const API = "http://localhost:3001/locals";

function Help() {
   const [all, setAll] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [perPage, setPerPage] = useState(3)

   const handleSeeOrganizations = () => {
      fetch(`${APIorg}`)
      .then((response) => response.json())
      .then((organizations) => setAll(organizations));
  }

  const handleSeeFoundations = () => {
   fetch(`${APIfou}`)
   .then((response) => response.json())
   .then((foundations) => setAll(foundations));
}

const handleSeeLocals = () => {
   fetch(`${APIloc}`)
   .then((response) => response.json())
   .then((locals) => setAll(locals));
}

  useEffect(() => {
   handleSeeFoundations();
   },[]);

   const indexOfLast = currentPage * perPage;
   const indexOfFFirst = indexOfLast - perPage;

   const pageNumbers = [];
   const totalPosts = all.length;
   console.log(totalPosts);

   for(let i=1; i <= Math.ceil(totalPosts / perPage); i++){
      pageNumbers.push(i);
   }

   const paginate = (pageNumbers) => setCurrentPage(pageNumbers);
   
    return (
       
        <Element name="Help">
     <div className="Help">
         <div className="Help-first">
            <p>Komu pomagamy?</p>
            <img src={decoration}></img>
         </div>
         <div className="Help-second">
            <button onClick={handleSeeFoundations}>Fundacjom</button>
            <button onClick={handleSeeOrganizations}>Organizacjom pozarządowym</button>
            <button onClick={handleSeeLocals}>Lokalnym zbiórkom</button>
         </div>
         <div className="Help-third">
            <h4>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprdzić czym się zajmują, komu pomagają i czego potrzebują.</h4>
         </div>
            <div className="Help-fourth">
            {all.slice(indexOfFFirst, indexOfLast).map((organization) => (
            <div className="Help-fourth-sec" key={organization.id}>
            <h1>{organization.name}</h1>
            <h3>{organization.needs}</h3>
            <h2>{organization.goal}</h2>
            </div>
            ))}
            </div>
            <ul className="pageul">
               {pageNumbers.map(number => (
                  <li className="pageli" key={number}>
                     <button className="page" onClick={ () => paginate(number)} >{number}</button>
                  </li>
               ))}
            </ul>
     </div>
     </Element>
       
    )
         };
