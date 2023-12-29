import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {getCurrencySymbol(currency)}{budget - totalExpenses}</span>
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

export default Remaining;
