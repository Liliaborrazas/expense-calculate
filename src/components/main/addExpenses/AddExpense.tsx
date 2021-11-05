import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import Button from '../../../components/button/Button';
import { getPersons } from '../../../interfaces/PersonInterface';
import './AddExpense.css';

type FormElement = React.FormEvent<HTMLFormElement>

const AddExpense = () => {
  const nowDate = moment().format("YYYY-MM-DDTHH:mm");
  const history = useHistory();

  const [friend, setFriend] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState(nowDate);
  const [description, setDescription] = useState<string>("");


  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    const expense = { friend, amount: parseFloat(amount), date, description };
    //createExpenses(expense);
    console.log(expense)
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
            <span>User</span>
            <select
              className='input-select'
              onChange={(event) => setFriend(event.target.value)}
              value={friend}
              required
            >
              <option value="" />
              {getPersons().map((friend, idx) => (
                <option value={friend} key={idx}>
                  {friend}
                </option>
              ))}
            </select>
          </label>

          <label className=''>
            <span>Amount</span>
            <div className=''>
              <input
                className='input-amount'
                required
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.0"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
              <span className=''>€</span>
            </div>
          </label>

          <label className=''>
            <span>Concept</span>
            <input
              placeholder="Restaurant"
              className='input-select'
              required
              type="textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <Button label="Add" type="submit" />
    </form>
    </div>
  )
}
export default AddExpense;