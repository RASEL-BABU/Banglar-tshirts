import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import OrderSummary from '../OrderSummary/OrderSummary';
import '../Home/Home.css';

const Home = () => {
    const tShirts=useLoaderData()
  const [cart,setCart]=useState([])
    const hundleAddtocart=tshirt=>{
        const newCart=[...cart,tshirt];
        setCart(newCart);
        
    }
    return (
        <div className='home-container'>
          
           <div className='tshirt-container'>
           {
                tShirts.map(tshirt => <Tshirt
                key={tshirt.id}
                tshirt={tshirt}
                hundleAddtocart={hundleAddtocart}
                ></Tshirt>)
            }
           </div>
         
           <div className='cart'>
            <OrderSummary cart={cart}></OrderSummary>
           </div>
        </div>
    );
};

export default Home;