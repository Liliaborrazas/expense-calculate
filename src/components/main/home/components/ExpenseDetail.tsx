import React from "react";
import { Expense } from "../../../../interfaces/ExpenseInterface";
import Moment from "react-moment";
import { formatMoney } from "../../../../servises/expenses";

type ExpenseDetailProps = {
  expense: Expense;
};

function ExpenseDetail({ expense }: ExpenseDetailProps) {
  return (
    <div className=''>
      <div className=''>
        <div>{expense.person}</div>
        <Moment fromNow className=''>
          {expense.date}
        </Moment>
      </div>

      <div className=''>
        <span>
          {/* <i className="fa fa-money" /> */}
          <span className=''> {expense.description} </span>
        </span>
        <div>{formatMoney(expense.amount)}</div>
      </div>
    </div>
  );
}

export default ExpenseDetail;