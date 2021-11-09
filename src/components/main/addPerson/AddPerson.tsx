import React, { ChangeEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {createPerson} from '../../../servises/persons';
import Button from '../../button/Button';
import './AddPerson.css';
type FormElement = React.FormEvent<HTMLFormElement>;


const initialState = {
  name:''
}
const AddPerson = () => {

const [names, setNames] = useState(initialState);
const history = useHistory();

const handleInputChange = ({
  target:{ name, value },
}: ChangeEvent<HTMLInputElement> ) => {
 setNames({ ...names, [name]: value})

}

const handleNewUser = (e: FormElement) => {
  e.preventDefault();
  createPerson(names.name);
  setNames(initialState);
  history.push("/")
}

  return(
    <form onSubmit={handleNewUser} className='form-container'>
      <label className='label-addPerson'>
        Escriba los nombres del grupo
      </label>
      <input
      name='name'
      className='input-addPerson'
      placeholder='Name'
      required
      type='text'
      value={names.name}
      onChange={handleInputChange}
      />
    
      <Button label='Agrega amig@' type='submit'/>
    </form>
  )

}
export default AddPerson;