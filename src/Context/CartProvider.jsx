"use client"
import React, { createContext, useState } from 'react';

 export const CartContext=createContext();

const CartProvider = ({children}) => {
    const [cartItems,setCartItems]=useState([]);

    const addCart=(item)=>{
        setCartItems([...cartItems,item])
    }

    const cartInfo={
        cartItems,addCart
    }
    return (
       <CartContext value={cartInfo}>{children}</CartContext>
    );
};

export default CartProvider;