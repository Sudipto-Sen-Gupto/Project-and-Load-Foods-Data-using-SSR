"use client"
import { useRouter, useSearchParams } from 'next/navigation';

import React from 'react';

const Input = () => {
              
       const params=useSearchParams();
       const router=useRouter();
     
    const handleSubmit=(event)=>{
         event.preventDefault()
           const form=event.target;
           const search=form.search.value;
          const newParams=new URLSearchParams(params.toString());
          newParams.set('search',search);
          router.push(`/food?${newParams.toString()}`)
        }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='search your food' className='border-2 border-white px-20 py-4 text-[22px]'/>
                <button className='bg-amber-600 text-white p-6' >Search</button>
            </form>
        </div>
    );
};

export default Input;