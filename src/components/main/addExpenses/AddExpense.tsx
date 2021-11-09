import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import moment from "moment";
import { createExpenses } from '../../../servises/expenses';
import Button from '../../../components/button/Button';
import { getPersons } from '../../../servises/persons';
import './AddExpense.css';

type FormElement = React.FormEvent<HTMLFormElement>

const AddExpense = () => {
  const nowDate = moment().format("YYYY-MM-DDTHH:mm");
  const history = useHistory();

  const [person, setPerson] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState(nowDate);
  const [description, setDescription] = useState<string>("");


  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    const expense = { person, amount: parseFloat(amount), date, description };
    createExpenses(expense);
    history.push("/");
  }; 

  return(
    <div>
      <h1>Agrega un gasto</h1>
      <form onSubmit={handleSubmit} className='form-container'>
          <input
            className='input-date'
            required
            type={"datetime-local"}
            max={nowDate}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <label className=''>
            <span>Nombre</span>
            <select
              className='input-select'
              onChange={(event) => setPerson(event.target.value)}
              value={person}
              required
            >
              <option value="" />
              {getPersons().map((person, idx) => (
                <option value={person} key={idx}>
                  {person}
                </option>
              ))}
            </select>
          </label>

          <label className=''>
            <span>Gasto</span>
            <div className=''>
              <input
                className='input-amount'
                required
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.0 €"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
          </label>

          <label className=''>
            <span>Concepto</span>
            <input
              placeholder="Concepto"
              className='input-text'
              required
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <Button label="Agregar" type="submit" />
    </form>
    </div>
  )
}
export default AddExpense;