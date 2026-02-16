import React from 'react';

 const foodData=async()=>{
    const data=await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const res=await data.json();
    return res.foods || [];
 }

const Food = async() => {
    const foods=await foodData();
    return (
        <div>
        <h1>This is food section {foods?.length ||0}</h1>
        </div>
    );
};

export default Food;