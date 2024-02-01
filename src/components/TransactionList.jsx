import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {

const { transactions } = useContext(GlobalContext);
const { deleteTransaction } = useContext(GlobalContext);

//Afficher la croix de suppression d'une transaction au survol 
const [isShown, setIsShown] = useState(false);

  return (
    <div className='transaction-list'>
      <h4 className='history'>Historique</h4>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.amount > 0 ? 'transaction-item plus' : 'transaction-item minus'} onMouseEnter={() => setIsShown(transaction.id)} onMouseLeave={() => setIsShown(0)}>

            {/* Libellé et montant de la transaction */}
            {transaction.text}<span>{transaction.amount > 0 ? '+': '-'}{Math.abs(transaction.amount)} €</span>

            {/* Boutton de suppression */}
            {isShown === transaction.id && <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>x</button>}

            </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList
