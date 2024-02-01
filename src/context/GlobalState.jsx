//Informations accessibles à toute l'application
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    //Need access to transactions in several components
    transactions: [ 
        {id: 1, text: 'Salaire', amount: 940},
        {id: 2, text: 'Courses', amount: -100},
        {id: 3, text: 'Salle de sport', amount: 40},
        {id: 4, text: 'Logement', amount: -450},
    ]
}

// Create a global context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    //Use a stateReducer because we need to access state and dispatch
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    //Fonction "Supprimer une transaction"
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //Fonction "Ajouter une transaction"
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
            transactions: state.transactions, 
            deleteTransaction, 
            addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}