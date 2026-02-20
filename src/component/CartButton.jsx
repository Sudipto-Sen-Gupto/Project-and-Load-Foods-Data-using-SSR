"use client"
import { CartContext } from '@/Context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({food}) => {
    const [added,setAdded]=useState(false)
    const {addCart}=use(CartContext);
    const handleClick=()=>{
            addCart(food);
            setAdded(true)
            
            
    }
    return (
       
            <button onClick={handleClick} disabled={added?true:false} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 w-full rounded-lg transition duration-300 shadow-md disabled:bg-gray-300 disabled:text-white">
                       {
                        added?'Added':'Add to Cart'
                       }
                      </button>
        
    );
};

export default CartButton;