import { getExpensesByUser } from "../../../../servises/expenses";
import { formatMoney } from "../../../../servises/expenses";
import './Balances.css';

function Balances() {
  return (
    <section className='section-balances'>
      <h2 className=''>Balances</h2>
      <div className=''>
        {getExpensesByUser().map((expensesByUser, idx) => (
          <div key={idx} className='balances-container__item'>
            <div className='item-person'>{expensesByUser.person}</div>
            <div>{formatMoney(expensesByUser.amount)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Balances;