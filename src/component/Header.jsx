import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-stone-700'>
          
        
              <Link className='flex items-center p-2' href={'/'}>
              {/* <img src="/yummy.png" alt="Food" className='h-15 w-15' /> */}

              <Image width={120} height={120} src="/yummy.png" alt="Food" className='h-15 w-15' />
              <h1 className='text-2xl font-bold p-4'>Spicy Eatery</h1></Link>
        

            <div>
                <Link prefetch={false} className='btn' href={'/food'}>Food</Link>
                <Link className='btn' href={'/reviews'}>Reviews</Link>
            </div>
        </div>
    );
};

export default Header;