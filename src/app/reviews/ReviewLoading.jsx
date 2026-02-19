import ReviewCard from '@/component/ReviewCard';
import ReviewCardSkeleton from '@/component/ReviewCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 p-10'>
                {
                    [...Array(12)].map((_,index)=><ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
                }
            </div>
        </div>
    );
};

export default ReviewLoading;