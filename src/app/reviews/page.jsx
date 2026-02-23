import React from 'react';
import ReviewPage from './ReviewPage';
export const metadata={
        title:{
            absolute:"Reviews Secton"
        },
        description:"This is reviews section of spice eatery"
}
const page = () => {
    return (
        <div>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default page;