import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between p-4'>
            <img src="/food.png" alt="Food" className='h-10 w-10' />

            <div>
                <Link className='btn' href={'/'}>Home</Link>
                <Link className='btn' href={'/menu'}>Menu</Link>
            </div>
        </div>
    );
};

export default Header;