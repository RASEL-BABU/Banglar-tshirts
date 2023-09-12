import React from 'react';
import './OrderSummary.css'

const OrderSummary = ({cart, hundleRemovefromCart}) => {

    return (
        <div className='order-container'>
            <h2>this is order summary:{cart.length}</h2>
            {
                cart.map(tshirt=><p 
                key={tshirt._id}>
                    {tshirt.name}
            
                <button className='button' onClick={()=>hundleRemovefromCart(tshirt._id)} >delete</button></p>)
            }
        </div>
    );
};

export default OrderSummary;