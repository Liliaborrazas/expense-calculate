export interface Person {
  name: string,
  debts: Array<object>,
  payments: Array<object>,
  total_paid: number,
  relative_debts: Array<object>
}

//debts cantidades que debe[{}]
//total paid diferencia payment - debts
//relative_debts esto es la exrtra
