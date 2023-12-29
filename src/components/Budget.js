import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;

        // Check if the entered value is a valid number, does not exceed 20,000,
        // and is greater than or equal to total spending
        if (!isNaN(inputValue) && inputValue >= totalExpenses && inputValue <= 20000) {
            setNewBudget(inputValue);
        } else {
            // Display an alert with the appropriate message based on conditions
            if (inputValue < totalExpenses) {
                alert("The budget cannot be lower than the total spending.");
            } else if (inputValue > 20000) {
                alert("The budget cannot exceed £20,000.");
            } else {
                alert("Invalid budget value.");
            }
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {getCurrencySymbol(currency)} </span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}>   
            </input>
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


export default Budget;