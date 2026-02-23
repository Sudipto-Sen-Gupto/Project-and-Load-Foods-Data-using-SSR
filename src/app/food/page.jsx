import CardItems from '@/component/CardItems';
import FoodCards from '@/component/FoodCards';
import React from 'react';
import Input from '../inputSearch/Input';

export const metadata={
    title:"Food Section",
    description:"This is food section of spice eatery"
}
 const foodData=async(search)=>{
    const data=await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,{next:{revalidate:5}});

    await new Promise(resolve=> setTimeout(resolve,2000))
    const res=await data.json();
    return res.foods || [];
 }

const Food = async({searchParams}) => {
    const {search=""}=await searchParams;
    // console.log(search);
    const foods=await foodData(search);
    return (
        <div className='mt-10'>
        <h1 className='text-2xl font-bold text-cyan-600 text-center'>This is food section : <span className='text-rose-400'>{foods?.length ||0}</span></h1>

        <div className='flex justify-center mt-5 '>
            <Input></Input>
        </div>
            
           <div className='flex'>
             <div className='flex-4 grid grid-cols-1 md:grid-cols-3 gap-10 p-4 mt-5'>
                {
                    foods?.map(food=><FoodCards key={food.id} food={food}></FoodCards>)
                }
            </div>

            <div className= 'flex-1 p-6 mt-8 border-2 border-cyan-500 h-300'>
                
              <CardItems></CardItems>
            </div>
           </div>
        
        </div>
    );
};

export default Food;