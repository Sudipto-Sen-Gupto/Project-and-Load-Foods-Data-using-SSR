
"use client"
import ReviewCard from '@/component/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';

const reviews = () => {

    const [reviews,setReviews]=useState([]);
    const[loading,setLoading]=useState(true);
    
    useEffect(()=>{
         fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
         .then(res=>res.json()).then(data=>{
           return new Promise(resolve=>setTimeout(()=>
            {resolve(data)},2000))
         }).
         then(data=>{
            // console.log(data.reviews)
            
             setReviews(data.reviews)
             setLoading(false)
        })
    },[])
      
    if(loading){
       return <ReviewLoading></ReviewLoading>
    }
    
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold text-center  '>This is reviews section ({reviews.length})</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 p-10'>
                {
                    reviews.map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default reviews;