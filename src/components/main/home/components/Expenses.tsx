import React from "react";
import { Link } from "react-router-dom";
import { getExpenses, getExpensesTotal } from "../../../../servises/expenses";
import { formatMoney } from "../../../../servises/expenses";
import ExpenseDetail from "./ExpenseDetail";

function Expenses() {
  return (
    <section className=''>
      <div className=''>
        <h2 className=''>Lista de Gastos</h2>
        <Link to="/add-expense" className=''>
          Agrega gasto
        </Link>
      </div>
      {getExpenses().map((expense, idx) => (
        <ExpenseDetail key={idx} expense={expense} />
      ))}
      <div className=''>
        <span>Total: </span>
        <strong>{formatMoney(getExpensesTotal())}</strong>
      </div>
    </section>
  );
}

export default Expenses;