import React from 'react';
import { Link } from "react-router-dom";
import photo from '../../../images/expense-calculate-logo.jpeg';
import {getPersons} from '../../../servises/persons';
import './Home.css';
import Expenses from '../home/components/Expenses';
import Balances from '../home/components/Balances'
import Persons from '../home/components/Persons'


const Home = () => {
  return (
    <div className='home-container'>
    <h1 className="home-welcome">Bienvenid@ a la app de gastos compartidos</h1>
      <img src={photo} className='image-welcome' alt="expense" />
    <div className=''>
      {getPersons().length === 0 ? (
      <div>
       <p className='home-text'>
      Crea tu grupo de gastos!
     </p>
     <Link to="/add-person" className='btn-addPerson'>
       <i className="fas fa-users" /> Añade amigos
     </Link>
     </div>
      ) : (
        <>
          <Persons />
          <Expenses />
          <Balances />
        </>
      )}
    </div>
  </div>
  )
}
export default Home;