import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import photo from '../../../images/expense-calculate-logo.jpeg';
import { Person } from '../../../interfaces/PersonInterface'
import AddPerson from '../addPerson/AddPerson';
import {getPersons} from '../../../interfaces/PersonInterface';

// interface Props {
//   person: Person[]
// }
type Props = {
  person: Person[];
}
const PersonsList = ({person}:Props) => {
  const [group, setGroup] = useState<Person[]>([
      {
       id:1,
       name: 'lily',
       }
      ])

  const newGroup = (person:Person)=>setGroup([...group, person])
  
  const [mostrarComponente, setMostrarComponente] = useState(false);
  // useEffect(()=>{
  //   traerDatos()
  // },[group])

  // const traerDatos = ()=> {
  //   let datos = getPersons()
  //   console.log(datos)
  // }
  // pepe = getPersons()
  // setGrupo(pepe)
  return (
    
    <section>
      <h1 className="welcome">Welcome to Expense Calculate</h1>
      <img src={photo}  alt="logo" />
      <AddPerson newGroup={newGroup} />
      {getPersons().map((name, index) => (
          <div key={index}>
            <Link to="/add-expense" >
              {name}
            </Link>
          </div>
        ))
      }
      <Link to='/add-expense'>
        <button className="">Añadir Gasto</button>
      </Link>
    </section>
  )
}
export default PersonsList;