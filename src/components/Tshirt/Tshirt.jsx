import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,hundleAddtocart}) => {
    console.log(tshirt);
    const { picture,name,price}=tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h2>price:{price}</h2>
            <button onClick={()=>hundleAddtocart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;