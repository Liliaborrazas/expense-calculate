import React, { ChangeEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import {createPerson, Person} from '../../../interfaces/PersonInterface';
import Button from '../../button/Button';

type FormElement = React.FormEvent<HTMLFormElement>;

interface Props {
  newGroup: (name: Person)=> void,
}
const initialState = {
  name:'',
}
const AddPerson = ({newGroup} : Props) => {

  const [names, setNames] = useState(initialState);

const handleInputChange = ({
  target:{ name, value },
}: ChangeEvent<HTMLInputElement> ) => {
 setNames({ ...names, [name]: value})

}

const handleNewGroup = (e: FormElement) => {
  e.preventDefault();
  createPerson(names.name);
  newGroup(names)
  setNames(initialState)
}
  // const handleSubmit = (e: FormElement) => {
  //   e.preventDefault();
  //   createPerson(names.name);
  // }

  return(
    <form onSubmit={handleNewGroup}>
      <label>
        Agrega Personas para crear un grupo
      </label>
      <input
      name='name'
      className=''
      placeholder='Name'
      required
      type='text'
      value={names.name}
      onChange={handleInputChange}
      />
      <Button label='Add Person' type='submit'/>
    </form>
  )

}
export default AddPerson;