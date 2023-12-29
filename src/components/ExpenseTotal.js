import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {getCurrencySymbol(currency)}{totalExpenses}</span>
        </div>
    );
};

// Fonction utilitaire pour obtenir le symbole de la devise en fonction de la localisation
const getCurrencySymbol = (currency) => {
    switch (currency) {
        case '$':
            return '$';
        case '£':
            return '£';
        case '€':
            return '€';
        case '₹':
            return '₹';
        default:
            return '£';
    }
};

export default ExpenseTotal;