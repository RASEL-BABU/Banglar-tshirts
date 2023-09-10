import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import OrderSummary from '../OrderSummary/OrderSummary';
import '../Home/Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts=useLoaderData()
  const [cart,setCart]=useState([])
    const hundleAddtocart=tshirt=>{

        const exists=cart.find(ts=>ts._id===tshirt._id)
        if(exists){
            toast('all ready exists.');

        }
        else{
            const newCart=[...cart,tshirt];
        setCart(newCart);

        }

        
    }
        const hundleRemovefromCart=id=>{
            console.log(id)
            const remaining=cart.filter(ts=>ts._id !==id);
        
            setCart(remaining)
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
            <OrderSummary cart={cart} hundleRemovefromCart={hundleRemovefromCart}></OrderSummary>
           </div>
        </div>
    );
};

export default Home;