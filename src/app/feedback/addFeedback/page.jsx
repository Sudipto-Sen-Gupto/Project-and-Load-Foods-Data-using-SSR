"use client"
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const page = () => {
   const router=useRouter();

    const feedbackSubmit=async(e)=>{
        e.preventDefault();
        const Food=e.target.Food.value;
        const message=e.target.message.value;
        console.log(Food,message);
        const res=await fetch('/api/feedback',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({Food,message})
        });
        const data=await res.json();
        console.log(data);
        if(data.insertedId){
            toast("Feedback submitted successfully");
            router.push("/feedback")
        }
    }
    return (
        <div >
             <h1 className='text-center text-2xl font-bold p-10'>Give your valuable feedback Monsieur/Madam</h1> 
            <div className='p-20 flex justify-center items-center '>
           
            <form  className='space-y-5' onSubmit={feedbackSubmit}>
                   <h1 className='text-2xl'>  Food Name:</h1>
                   <input type="text" className='border-2 border-amber-400 px-20 py-5'name='Food' required/>
                     <br />
                   <h1 className='text-2xl'>Message:</h1> <textarea name="message" id="" cols={22} rows={10}  className='border-2 border-blue-500  px-20' required ></textarea>
                        <br />
                 <div className='text-center'>  <button className='btn'>Submit</button></div>
            </form>
        </div>
        <ToastContainer/>
        </div>
       
    );
};

export default page;