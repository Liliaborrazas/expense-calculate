import React from "react";
import { Expense } from "../../../../interfaces/ExpenseInterface";
import Moment from "react-moment";
import { formatMoney } from "../../../../servises/expenses";
import './ExpenseDetail.css';

type ExpenseDetailProps = {
  expense: Expense;
};

function ExpenseDetail({ expense }: ExpenseDetailProps) {
  return (
    <div className='expense-detail__container'>
      <div className='detail-person__date'>
      <div className='item-person'>{expense.person}</div>
        <Moment fromNow className=''>
          {expense.date}
        </Moment>
      </div>
      <div className='detail-person__date'> 
         <div className='item-person'> {expense.description} </div>
         <div>{formatMoney(expense.amount)}</div>
      </div>
    </div>
  );
}

export default ExpenseDetail;