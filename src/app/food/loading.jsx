import FoodCardSkeleton from '@/component/FoodCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-4 mt-5'>
       {
           [...Array(12)].map((_,index)=><FoodCardSkeleton key={index}></FoodCardSkeleton>
           )
       }     
        </div>
    );
};

export default loading;