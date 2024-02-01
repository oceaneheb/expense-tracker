import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  }
  const changeAmount = (e) => {
    setAmount(e.target.value);
  }

 
  const onSubmit = (e) => {
    e.preventDefault();  //Empêcher le navigateur de s'actualiser à l'envoi du form

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000), //Générer id aléatoire
      text,
      amount: +amount //Retourner le montant en nombre pour éviter de créer un string
    };

    addTransaction(newTransaction);
  }

  return (
    <div>
        <h4 className='title'>Ajouter une transaction</h4>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="text">Texte</label>
                <input type="text" value={text} id='text' placeholder='Entrez du texte...' onChange={changeText}/>
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Montant</label>
                <input type="text" value={amount} id='amount' placeholder='Entrez le montant...' onChange={changeAmount} />
            </div>
            <button>Ajouter la transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction
