import React from "react";
import { Link } from "react-router-dom";
import { getPersons } from "../../../../servises/persons";
import './Persons.css';

function Persons() {
  return (
    <section className=''>
      <div className='section-wrapper__title'>
        <h2 className='section-wrapper__text'>Lista de amigos</h2>
        <div className='section-wrapper'>
        <Link to="/add-person" className='link-name'>
          Agrega amig@s
        </Link>
      </div>
      <div className='list-container'>
        {getPersons().map((name, index) => (
          <ul key={index} className='list'>
            <li className='list-item'>
              {name}
            </li>
          </ul>
        ))}
        </div>
      </div>

    </section>
  );
}

export default Persons;