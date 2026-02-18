import FoodCards from '@/component/FoodCards';
import React from 'react';

 const foodData=async()=>{
    const data=await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random');

    await new Promise(resolve=> setTimeout(resolve,2000))
    const res=await data.json();
    return res.foods || [];
 }

const Food = async() => {
    const foods=await foodData();
    return (
        <div className='mt-10'>
        <h1 className='text-2xl font-bold text-cyan-600 text-center'>This is food section : <span className='text-rose-400'>{foods?.length ||0}</span></h1>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 p-4 mt-5'>
                {
                    foods?.map(food=><FoodCards key={food.id} food={food}></FoodCards>)
                }
            </div>
        
        </div>
    );
};

export default Food;