import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import OrderSummary from '../OrderSummary/OrderSummary';
import '../Home/Home.css';

const Home = () => {
    const tShirts=useLoaderData()
  const [cart,setCart]=useState([])
    const hundleAddtocart=tshirt=>{
        console.log(tshirt);
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
            <OrderSummary></OrderSummary>
           </div>
        </div>
    );
};

export default Home;