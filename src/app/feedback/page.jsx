import FeedbackCard from '@/component/FeedbackCard';
import React from 'react';

 const getFeedbackData=async()=>{
    const newData=await fetch("http://localhost:3000/api/feedback");
    const data=newData.json();
    return data
 }

const Feedback = async() => {
      const feedbackData=await getFeedbackData()

    return (
        <div>
                <h1>Feedback data:{feedbackData.length}</h1>  
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-10'>
                     {
                        feedbackData.map(card=><FeedbackCard key={card._id} card={card}></FeedbackCard>)
                     }
                    </div>       
        </div>
    );
};

export default Feedback;