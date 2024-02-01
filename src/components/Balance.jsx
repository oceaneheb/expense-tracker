import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const sum = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className='balance'>
      <h4>Votre solde</h4>
      <p>{sum.toFixed(2)} €</p>
    </div>
  )
}

export default Balance
