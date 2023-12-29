import React, { useContext, useState  } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);


    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
            setSelectedCurrency(val);
    }
    

  return (
        <div>  
            <select 
            className='custom-dropdown'
            name="Currency" 
            id="Currency" 
            onChange={event => changeCurrency(event.target.value)}
            value={selectedCurrency}  
                        >
                <option className='custom-dropdown' value="$" style={{ color: 'black' }}>$ Dollar</option>
                <option className='custom-dropdown' value="£" style={{ color: 'black' }}>£ Pound</option>
                <option className='custom-dropdown' value="€" style={{ color: 'black' }}>€ Euro</option>
                <option className='custom-dropdown' value="₹" style={{ color: 'black' }}>₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;