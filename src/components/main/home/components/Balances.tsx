import React from "react";
// import styles from "./Balances.module.scss";
import { getExpensesByUser } from "../../../../servises/expenses";
 import { formatMoney } from "../../../../servises/expenses";

function Balances() {
  return (
    <section className=''>
      <h2 className=''>Balances</h2>

      {getExpensesByUser().map((expensesByUser, idx) => (
        <div key={idx} className=''>
          <div>{expensesByUser.person}</div>
          <div>{formatMoney(expensesByUser.amount)}</div>
        </div>
      ))}
    </section>
  );
}

export default Balances;