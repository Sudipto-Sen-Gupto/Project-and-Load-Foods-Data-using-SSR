import FeedbackCard from '@/component/FeedbackCard';
import Link from 'next/link';
import React from 'react';

 const getFeedbackData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/feedback`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch feedback data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);

    // prevents build crash
    return [];
  }
};

const Feedback = async() => {
      const feedbackData=await getFeedbackData()

    return (
        <div>
                 <div className='p-10'>
                  <Link href={'/feedback/addFeedback'} className='btn '>Add Feedback</Link>
                 </div>

                <h1 className='pl-10 text-2xl'>Feedback data:{feedbackData.length}</h1>  
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-10'>
                     {
                        feedbackData.map(card=><FeedbackCard key={card._id} card={card}></FeedbackCard>)
                     }
                    </div>       
        </div>
    );
};

export default Feedback;