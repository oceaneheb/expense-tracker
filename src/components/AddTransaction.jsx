import React from 'react'

const AddTransaction = () => {
  return (
    <div>
        <h4 className='title'>Ajouter une transaction</h4>
        <form onsubmit="event.preventDefault();">
            <div className='form-control'>
                <label htmlFor="text">Texte</label>
                <input type="text" id='text' placeholder='Entrez du texte...'/>
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Montant</label>
                <input type="text" id='amount' placeholder='Entrez le montant...'/>
            </div>
            <button>Ajouter la transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction
