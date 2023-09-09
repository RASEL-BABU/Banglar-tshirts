import React from 'react';
import './OrderSummary.css'

const OrderSummary = ({cart}) => {
    return (
        <div className='order-container'>
            <h2>this is order summary:{cart.length}</h2>
        </div>
    );
};

export default OrderSummary;