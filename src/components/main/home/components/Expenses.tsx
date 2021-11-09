import React from "react";
import { Link } from "react-router-dom";
import { getExpenses, getExpensesTotal } from "../../../../servises/expenses";
import { formatMoney } from "../../../../servises/expenses";
import ExpenseDetail from "./ExpenseDetail";
import './Expenses.css';

function Expenses() {
  return (
    <section className='section-expenses'>
      <div className='section-wrapper__title'>
        <div className='section-wrapper'>
          <Link to="/add-expense" className='link-expense'>
            Agrega gasto
          </Link>
        </div>
      </div>
      {getExpenses().map((expense, idx) => (
        <ExpenseDetail key={idx} expense={expense} />
      ))}
      <div className='expenses-total'>
        <span>Total: </span>
        <strong>{formatMoney(getExpensesTotal())}</strong>
      </div>
    </section>
  );
}

export default Expenses;