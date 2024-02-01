import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  
  //Sum of positive amounts
  const sumIncome = transactions.reduce((acc, transaction) => {
    if(transaction.amount > 0 ) {
      acc += transaction.amount;
    }
    return acc;
  }, 0);
  //Sum of negative amounts
  const sumExpense = transactions.reduce((acc, transaction) => {
    if(transaction.amount < 0) {
      acc += transaction.amount;
    }
    return acc;
    
  }, 0)
  
    
  return (
    <div className='income-expense'>
      <div className='income'>
        <h4>Income</h4>
        <p>{sumIncome.toFixed(2)} €</p>
      </div>
      <div></div>
      <div className='expense'>
        <h4>Expense</h4>
        <p>{Math.abs(sumExpense).toFixed(2)} €</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
