import { getPersons } from "./persons";
import { Expense, ExpenseByUser } from "../interfaces/ExpenseInterface";

export function getExpenses(): Expense[] {
  return getExpensesFromLocalStorage().sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });
}

export function createExpenses(expense: Expense) {
  const expenses = getExpensesFromLocalStorage();
  expenses.push(expense);
  saveExpensesInLocalStorage(expenses);
}

export function getExpensesTotal() {
  let total = 0;
  for (let expense of getExpensesFromLocalStorage()) {
    total += expense.amount;
  }
  return total;
}

export function getExpensesByUser(): ExpenseByUser[] {
  const persons = getPersons();

  const expectedExpenseByPerson = getExpensesTotal() / persons.length;
  const expensesByUserMap: Record<string, number> = {};

  for (let person of persons) {
    expensesByUserMap[person] = 0;
  }

  for (let expense of getExpensesFromLocalStorage()) {
    expensesByUserMap[expense.person] += expense.amount;
  }

  const result: ExpenseByUser[] = [];
  for (let person of persons) {
    const expense = expensesByUserMap[person];
    const diff = expense - expectedExpenseByPerson;

    result.push({ person, amount: diff });
  }

  return result;
}

function getExpensesFromLocalStorage(): Expense[] {
  const expensesJson = localStorage.getItem("expenses");
  if (expensesJson === null) {
    return [];
  }
  return JSON.parse(expensesJson);
}

function saveExpensesInLocalStorage(expenses: Expense[]): void {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

export function formatMoney(amount: number) {
  return amount.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
}